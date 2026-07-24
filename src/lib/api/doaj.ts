import { Article } from '@/types';

const DOAJ_BASE = 'https://doaj.org/api/v2/search/articles';

interface DOAJResult {
  id: string;
  bibjson?: {
    title?: string;
    year?: string;
    author?: Array<{ name?: string; affiliation?: string }>;
    journal?: { title?: string; publisher?: string };
    volume?: string;
    number?: string;
    pages?: string;
    doi?: string;
    abstract?: string;
    keywords?: string[];
    link?: Array<{ url: string; type: string }>;
    eissn?: string;
  };
}

function mapDOAJWork(result: DOAJResult): Article {
  const b = result.bibjson || {};
  const authors = (b.author || []).map(a => ({
    name: a.name || 'Unknown',
    affiliation: a.affiliation,
  }));

  const pdfUrl = (b.link || []).find(l => l.type === 'fulltext')?.url ||
    (b.link || []).find(l => l.url)?.url;

  return {
    id: `doaj-${result.id}`,
    title: b.title || 'Untitled',
    authors,
    year: parseInt(b.year || String(new Date().getFullYear())),
    publisher: b.journal?.publisher || '',
    journal: b.journal?.title || '',
    volume: b.volume,
    issue: b.number,
    pages: b.pages,
    doi: b.doi,
    citationCount: 0,
    abstract: b.abstract || '',
    keywords: b.keywords || [],
    openAccess: true,
    pdfUrl,
    language: 'en',
    type: 'journal',
    source: 'DOAJ',
    createdAt: new Date().toISOString(),
  };
}

export async function searchDOAJ(query: string, page: number = 1, perPage: number = 10): Promise<{ articles: Article[]; total: number }> {
  try {
    const url = `${DOAJ_BASE}?query=${encodeURIComponent(query)}&page=${page}&pageSize=${perPage}&sort=year:desc`;
    const res = await fetch(url, {
      headers: { 'Accept': 'application/json' },
      signal: AbortSignal.timeout(8000),
    });
    if (!res.ok) throw new Error(`DOAJ API error: ${res.status}`);
    const data = await res.json();
    const results = data.results || [];
    const articles = results.map(mapDOAJWork);
    return { articles, total: data.total || 0 };
  } catch (error) {
    console.error('DOAJ search error:', error);
    return { articles: [], total: 0 };
  }
}
