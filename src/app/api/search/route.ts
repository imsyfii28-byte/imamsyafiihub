import { NextRequest, NextResponse } from 'next/server';
import { searchOpenAlex } from '@/lib/api/openalex';
import { searchCrossref } from '@/lib/api/crossref';
import { searchDOAJ, searchIndonesianJournals } from '@/lib/api/doaj';
import { searchGaruda } from '@/lib/api/garuda';
import { mockArticles } from '@/services/mock-data';
import { SearchFilters } from '@/types';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('query') || searchParams.get('q') || '';
  const page = parseInt(searchParams.get('page') || '1');
  const perPage = parseInt(searchParams.get('perPage') || '10');
  const source = searchParams.get('source') || 'all'; // all, openalex, crossref, doaj, garuda

  if (!query) {
    return NextResponse.json({ articles: [], total: 0, page, perPage, totalPages: 0 });
  }

  const sources = source === 'all' 
    ? ['openalex', 'crossref', 'doaj', 'doaj-indonesia', 'garuda']
    : [source];

  try {
    // Search local mock articles
    const queryLower = query.toLowerCase();
    const localArticles = mockArticles.filter(a => 
      a.title.toLowerCase().includes(queryLower) ||
      a.abstract.toLowerCase().includes(queryLower) ||
      a.keywords.some(k => k.toLowerCase().includes(queryLower)) ||
      a.authors.some(au => au.name.toLowerCase().includes(queryLower))
    ).map(a => ({ ...a, source: a.source || 'Local' }));

    const results = await Promise.allSettled(
      sources.map(s => {
        switch (s) {
          case 'openalex': return searchOpenAlex(query, page, perPage);
          case 'crossref': return searchCrossref(query, page, perPage);
          case 'doaj': return searchDOAJ(query, page, perPage);
          case 'doaj-indonesia': return searchIndonesianJournals(query, page, perPage);
          case 'garuda': return searchGaruda(query, page, perPage);
          default: return searchOpenAlex(query, page, perPage);
        }
      })
    );

    let allArticles: any[] = [];
    let totalResults = 0;

    for (const result of results) {
      if (result.status === 'fulfilled') {
        allArticles = [...allArticles, ...result.value.articles];
        totalResults += result.value.total;
      }
    }

    // Combine local and external articles
    allArticles = [...localArticles, ...allArticles];

    // Deduplicate by DOI
    const seen = new Set<string>();
    const uniqueArticles = allArticles.filter(a => {
      const key = a.doi || a.title?.toLowerCase();
      if (!key || seen.has(key)) return false;
      seen.add(key);
      return true;
    });

    // Sort by citation count
    uniqueArticles.sort((a, b) => b.citationCount - a.citationCount);

    const totalPages = Math.ceil(totalResults / perPage);

    return NextResponse.json({
      articles: uniqueArticles.slice(0, perPage),
      total: totalResults,
      page,
      perPage,
      totalPages,
      sources: sources,
    });
  } catch (error) {
    console.error('Search API error:', error);
    return NextResponse.json(
      { error: 'Search failed', articles: [], total: 0, page, perPage, totalPages: 0 },
      { status: 500 }
    );
  }
}
