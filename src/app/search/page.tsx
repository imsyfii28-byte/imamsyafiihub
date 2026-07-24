'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { SearchBox } from '@/components/shared/SearchBox';
import { AdvancedFilters } from '@/components/search/AdvancedFilters';
import { SearchResults } from '@/components/search/SearchResults';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { SearchFilters } from '@/types';
import { useSearch } from '@/hooks/use-search';

function SearchContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { results, loading, search } = useSearch();
  const initialQuery = searchParams.get('q') || '';

  const [filters, setFilters] = useState<SearchFilters>({
    query: initialQuery,
    page: 1,
    perPage: 10,
    sortBy: 'relevance',
  });

  useEffect(() => {
    if (initialQuery) {
      setFilters(prev => ({ ...prev, query: initialQuery }));
      search({ ...filters, query: initialQuery });
    }
  }, [initialQuery]);

  const handleSearch = (query: string) => {
    const newFilters = { ...filters, query, page: 1 };
    setFilters(newFilters);
    search(newFilters);
    router.push(`/search?q=${encodeURIComponent(query)}`, { scroll: false });
  };

  const handleApplyFilters = (newFilters: Partial<SearchFilters>) => {
    const updated = { ...filters, ...newFilters, page: 1 };
    setFilters(updated);
    search(updated);
  };

  const handleResetFilters = () => {
    const reset = { query: filters.query, page: 1, perPage: 10, sortBy: 'relevance' as const };
    setFilters(reset);
    search(reset);
  };

  const handleSort = (sortBy: string) => {
    const updated = { ...filters, sortBy: sortBy as SearchFilters['sortBy'], page: 1 };
    setFilters(updated);
    search(updated);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-6">
          <SearchBox defaultValue={filters.query} onSearch={handleSearch} />
        </div>

        <AdvancedFilters
          filters={filters}
          onApply={handleApplyFilters}
          onReset={handleResetFilters}
        />

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Select value={filters.sortBy} onValueChange={(value) => handleSort(value || 'relevance')}>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="relevance">Relevance</SelectItem>
                <SelectItem value="date">Date</SelectItem>
                <SelectItem value="citations">Citations</SelectItem>
                <SelectItem value="title">Title</SelectItem>
              </SelectContent>
            </Select>
          </div>
          {results && (
            <span className="text-sm text-slate-500">
              Page {results.page} of {results.totalPages} ({results.total.toLocaleString()} results)
            </span>
          )}
        </div>

        <SearchResults results={results} loading={loading} />
      </div>
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-slate-50 dark:bg-slate-950" />}>
      <SearchContent />
    </Suspense>
  );
}
