import { Article } from '@/types';

const DOAJ_BASE = 'https://doaj.org/api/v2/search/articles';
const DOAJ_JOURNAL_BASE = 'https://doaj.org/api/v2/search/journals';

interface DOAJResult {
  id: string;
  bibjson?: {
    title?: string;
    year?: string;
    month?: string;
    author?: Array<{ name?: string; affiliation?: string }>;
    journal?: {
      title?: string;
      publisher?: string;
      country?: string;
      language?: string[];
    };
    volume?: string;
    number?: string;
    start_page?: string;
    end_page?: string;
    doi?: string;
    abstract?: string;
    keywords?: string[];
    link?: Array<{ url: string; type: string; content_type?: string }>;
    eissn?: string;
  };
}

function mapDOAJWork(result: DOAJResult): Article {
  const b = result.bibjson || {};
  const authors = (b.author || []).map(a => ({
    name: a.name || 'Unknown',
    affiliation: a.affiliation,
  }));

  // Find PDF link first, then HTML fulltext
  const pdfLink = (b.link || []).find(l => l.content_type === 'pdf' || l.type === 'pdf');
  const htmlLink = (b.link || []).find(l => l.type === 'fulltext');
  const pdfUrl = pdfLink?.url || htmlLink?.url || undefined;

  const isIndonesian = b.journal?.country === 'ID';
  const language = isIndonesian ? 'id' : (b.journal?.language?.[0] || 'en').toLowerCase();

  const pages = b.start_page && b.end_page ? `${b.start_page}-${b.end_page}` : b.start_page || undefined;

  return {
    id: `doaj-${result.id}`,
    title: b.title || 'Untitled',
    authors,
    year: parseInt(b.year || String(new Date().getFullYear())),
    publisher: b.journal?.publisher || '',
    journal: b.journal?.title || '',
    volume: b.volume,
    issue: b.number,
    pages,
    doi: b.doi,
    citationCount: 0,
    abstract: b.abstract || '',
    keywords: b.keywords || [],
    openAccess: true,
    pdfUrl,
    language,
    type: 'journal',
    subject: isIndonesian ? 'indonesia' : 'general',
    source: isIndonesian ? 'DOAJ (Indonesia)' : 'DOAJ',
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

export async function searchIndonesianJournals(query: string, page: number = 1, perPage: number = 10): Promise<{ articles: Article[]; total: number }> {
  try {
    // Search for articles with Indonesia country filter
    const searchQuery = query ? `${query} country:id` : 'country:id';
    const url = `${DOAJ_BASE}?query=${encodeURIComponent(searchQuery)}&page=${page}&pageSize=${perPage}&sort=year:desc`;
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
    console.error('Indonesian journal search error:', error);
    return { articles: [], total: 0 };
  }
}
