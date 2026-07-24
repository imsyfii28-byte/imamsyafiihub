import { Article } from '@/types';

const CROSSREF_BASE = 'https://api.crossref.org';

interface CrossrefWork {
  DOI: string;
  title?: string[];
  author?: Array<{
    family?: string;
    given?: string;
    affiliation?: Array<{ name: string }>;
  }>;
  published?: { 'date-parts'?: number[][] };
  container?: { title?: string[]; publisher?: string };
  volume?: string;
  issue?: string;
  page?: string;
  'is-referenced-by-count'?: number;
  abstract?: string;
  subject?: string[];
  type?: string;
  link?: Array<{ URL: string; 'content-type'?: string }>;
  license?: Array<{ URL: string; 'content-version': string }>;
  language?: string;
}

function mapCrossrefWork(work: CrossrefWork): Article {
  const authors = (work.author || []).map(a => ({
    name: [a.given, a.family].filter(Boolean).join(' '),
    affiliation: a.affiliation?.[0]?.name,
  }));

  const year = work.published?.['date-parts']?.[0]?.[0] || new Date().getFullYear();
  const journal = work.container?.title?.[0] || '';
  const publisher = work.container?.publisher || '';
  const pdfUrl = work.link?.find(l => l['content-type']?.includes('pdf'))?.URL || undefined;
  const abstract = work.abstract?.replace(/<[^>]+>/g, '') || '';
  const openAccess = work.license?.some(l => l['content-version'] === 'vor') || !!pdfUrl;

  let type = (work.type || 'article').toLowerCase();
  if (type.includes('journal-article') || type === 'article') type = 'journal';
  else if (type.includes('book')) type = 'book';
  else if (type.includes('proceedings') || type.includes('conference')) type = 'conference';
  else if (type.includes('dissertation') || type.includes('thesis')) type = 'dissertation';

  return {
    id: `crossref-${work.DOI.replace(/[^a-zA-Z0-9]/g, '-')}`,
    title: work.title?.[0] || 'Untitled',
    authors,
    year,
    publisher,
    journal,
    volume: work.volume,
    issue: work.issue,
    pages: work.page,
    doi: work.DOI,
    citationCount: work['is-referenced-by-count'] || 0,
    abstract,
    keywords: work.subject || [],
    openAccess,
    pdfUrl,
    language: work.language || 'en',
    type: type as Article['type'],
    source: 'Crossref',
    createdAt: new Date().toISOString(),
  };
}

export async function searchCrossref(query: string, page: number = 1, perPage: number = 10): Promise<{ articles: Article[]; total: number }> {
  try {
    const offset = (page - 1) * perPage;
    const url = `${CROSSREF_BASE}/works?query=${encodeURIComponent(query)}&offset=${offset}&rows=${perPage}&sort=relevance&order=desc`;
    const res = await fetch(url, {
      headers: { 'Accept': 'application/json' },
      signal: AbortSignal.timeout(8000),
    });
    if (!res.ok) throw new Error(`Crossref API error: ${res.status}`);
    const data = await res.json();
    const items = data.message?.items || [];
    const articles = items.map(mapCrossrefWork);
    return { articles, total: data.message?.['total-results'] || 0 };
  } catch (error) {
    console.error('Crossref search error:', error);
    return { articles: [], total: 0 };
  }
}
