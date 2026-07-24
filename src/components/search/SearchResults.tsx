'use client';

import { SearchResult } from '@/types';
import { ArticleCard } from './ArticleCard';
import { Skeleton } from '@/components/ui/skeleton';

interface SearchResultsProps {
  results: SearchResult | null;
  loading: boolean;
}

export function SearchResults({ results, loading }: SearchResultsProps) {
  if (loading) {
    return (
      <div className="space-y-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="rounded-xl border p-6">
            <Skeleton className="h-5 w-3/4 mb-3" />
            <Skeleton className="h-4 w-1/2 mb-2" />
            <Skeleton className="h-4 w-2/3 mb-3" />
            <Skeleton className="h-16 w-full mb-3" />
            <div className="flex gap-2">
              <Skeleton className="h-6 w-16" />
              <Skeleton className="h-6 w-20" />
              <Skeleton className="h-6 w-14" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (!results) return null;

  if (results.articles.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <div className="text-6xl mb-4">🔍</div>
        <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">No results found</h3>
        <p className="text-slate-600 dark:text-slate-400 max-w-md">
          Try adjusting your search terms or filters to find what you&apos;re looking for.
        </p>
      </div>
    );
  }

  return (
    <div>
      <p className="mb-4 text-sm text-slate-600 dark:text-slate-400">
        Showing {results.articles.length} of {results.total.toLocaleString()} results
      </p>
      <div className="space-y-4">
        {results.articles.map(article => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
}
