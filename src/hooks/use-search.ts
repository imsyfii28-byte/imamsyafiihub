'use client';

import { useState, useCallback } from 'react';
import { SearchFilters, SearchResult } from '@/types';
import { mockSearch } from '@/services/mock-data';

export function useSearch() {
  const [results, setResults] = useState<SearchResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const search = useCallback(async (filters: SearchFilters) => {
    setLoading(true);
    setError(null);

    try {
      // Try real API first
      const params = new URLSearchParams();
      if (filters.query) params.set('q', filters.query);
      params.set('page', String(filters.page || 1));
      params.set('perPage', String(filters.perPage || 10));

      const res = await fetch(`/api/search?${params}`, {
        signal: AbortSignal.timeout(10000),
      });

      if (res.ok) {
        const data = await res.json();
        if (data.articles && data.articles.length > 0) {
          setResults(data);
          setLoading(false);
          return;
        }
      }
    } catch (e) {
      console.log('API search failed, using mock data:', e);
    }

    // Fallback to mock data
    try {
      const data = await mockSearch(filters);
      setResults(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Search failed');
    } finally {
      setLoading(false);
    }
  }, []);

  const clearResults = useCallback(() => {
    setResults(null);
    setError(null);
  }, []);

  return { results, loading, error, search, clearResults };
}
