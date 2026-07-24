import { Article } from '@/types';

const GARUDA_BASE = 'https://garuda.kemdikbud.go.id/api';

interface GarudaResult {
  id: string;
  title: string;
  creator: string;
  year: string;
  publisher: string;
  journal: string;
  volume?: string;
  issue?: string;
  pages?: string;
  doi?: string;
  description?: string;
  subject?: string[];
  url?: string;
  pdf_url?: string;
}

function mapGarudaWork(result: GarudaResult): Article {
  const authorNames = (result.creator || '').split(';').filter(Boolean).map((n: string) => ({ name: n.trim() }));

  return {
    id: `garuda-${result.id}`,
    title: result.title || 'Untitled',
    authors: authorNames,
    year: parseInt(result.year || String(new Date().getFullYear())),
    publisher: result.publisher || '',
    journal: result.journal || '',
    volume: result.volume,
    issue: result.issue,
    pages: result.pages,
    doi: result.doi,
    citationCount: 0,
    abstract: result.description || '',
    keywords: result.subject || [],
    openAccess: !!result.pdf_url,
    pdfUrl: result.pdf_url || result.url,
    language: 'id',
    type: 'journal',
    subject: (result.subject?.[0] || '').toLowerCase().replace(/\s+/g, '-'),
    source: 'Garuda/Kemdikbud',
    createdAt: new Date().toISOString(),
  };
}

export async function searchGaruda(query: string, page: number = 1, perPage: number = 10): Promise<{ articles: Article[]; total: number }> {
  try {
    const url = `${GARUDA_BASE}/search?query=${encodeURIComponent(query)}&limit=${perPage}&offset=${(page - 1) * perPage}`;
    const res = await fetch(url, {
      signal: AbortSignal.timeout(10000),
    });
    if (!res.ok) throw new Error(`Garuda API error: ${res.status}`);
    const data = await res.json();
    const results = data.data?.results || data.results || [];
    const articles = results.map(mapGarudaWork);
    return { articles, total: data.data?.total || data.total || 0 };
  } catch (error) {
    console.error('Garuda search error:', error);
    return { articles: [], total: 0 };
  }
}
