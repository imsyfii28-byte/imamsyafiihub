import { Article } from '@/types';

const OPENALEX_BASE = 'https://api.openalex.org';

interface OpenAlexWork {
  id: string;
  doi?: string;
  title?: string;
  publication_year?: number;
  authorships?: Array<{
    author: { display_name: string };
    institutions?: Array<{ display_name: string }>;
  }>;
  primary_location?: {
    source?: { display_name?: string; publisher?: string };
    pdf_url?: string;
    landing_page_url?: string;
    is_oa?: boolean;
  };
  open_access?: { is_oa: boolean; oa_url: string | null; oa_status: string | null };
  cited_by_count?: number;
  abstract_inverted_index?: Record<string, number[]> | null;
  keywords?: Array<{ display_name: string }>;
  type?: string;
  type_crossref?: string;
  concepts?: Array<{ display_name: string; level: number }>;
  language?: string;
}

function extractAbstract(invertedIndex: Record<string, number[]> | null | undefined): string {
  if (!invertedIndex) return '';
  const words: Array<{ word: string; position: number }> = [];
  for (const [word, positions] of Object.entries(invertedIndex)) {
    for (const pos of positions) {
      words.push({ word, position: pos });
    }
  }
  words.sort((a, b) => a.position - b.position);
  return words.map(w => w.word).join(' ');
}

function mapOpenAlexWork(work: OpenAlexWork): Article {
  const authors = (work.authorships || []).map(a => ({
    name: a.author.display_name,
    affiliation: a.institutions?.[0]?.display_name,
  }));

  const keywords = (work.keywords || []).map(k => k.display_name).slice(0, 8);
  const concepts = (work.concepts || [])
    .filter(c => c.level === 0)
    .map(c => c.display_name);
  
  const subject = concepts[0]?.toLowerCase().replace(/\s+/g, '-') || 'general';

  const source = work.primary_location?.source;
  const journal = source?.display_name || '';
  const publisher = source?.publisher || '';
  const pdfUrl = work.open_access?.oa_url || work.primary_location?.pdf_url || undefined;

  let type = (work.type || work.type_crossref || 'article').toLowerCase();
  if (type.includes('journal') || type.includes('article')) type = 'journal';
  else if (type.includes('review')) type = 'article';
  else if (type.includes('book')) type = 'book';
  else if (type.includes('thesis') || type.includes('dissertation')) type = 'dissertation';
  else if (type.includes('conference') || type.includes('proceedings')) type = 'conference';

  return {
    id: `openalex-${work.id.split('/').pop()}`,
    title: work.title || 'Untitled',
    authors,
    year: work.publication_year || new Date().getFullYear(),
    publisher,
    journal,
    doi: work.doi?.replace('https://doi.org/', '') || undefined,
    citationCount: work.cited_by_count || 0,
    abstract: extractAbstract(work.abstract_inverted_index),
    keywords,
    openAccess: work.open_access?.is_oa || false,
    pdfUrl,
    language: work.language || 'en',
    type: type as Article['type'],
    subject,
    source: 'OpenAlex',
    createdAt: new Date().toISOString(),
  };
}

export async function searchOpenAlex(query: string, page: number = 1, perPage: number = 10): Promise<{ articles: Article[]; total: number }> {
  try {
    const url = `${OPENALEX_BASE}/works?search=${encodeURIComponent(query)}&page=${page}&per_page=${perPage}&sort=cited_by_count:desc`;
    const res = await fetch(url, {
      headers: { 'Accept': 'application/json' },
      signal: AbortSignal.timeout(8000),
    });
    if (!res.ok) throw new Error(`OpenAlex API error: ${res.status}`);
    const data = await res.json();
    const articles = (data.results || []).map(mapOpenAlexWork);
    return { articles, total: data.meta?.count || 0 };
  } catch (error) {
    console.error('OpenAlex search error:', error);
    return { articles: [], total: 0 };
  }
}

export async function getOpenAlexArticle(doi: string): Promise<Article | null> {
  try {
    const url = `${OPENALEX_BASE}/works/doi:${doi}`;
    const res = await fetch(url, { headers: { 'Accept': 'application/json' }, signal: AbortSignal.timeout(8000) });
    if (!res.ok) return null;
    const work = await res.json();
    return mapOpenAlexWork(work);
  } catch {
    return null;
  }
}
