'use client';

import { useState, useEffect } from 'react';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';
import { TrendingKeyword } from '@/types';
import { mockGetTrendingKeywords } from '@/services/mock-data';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

export function TrendingKeywords() {
  const [keywords, setKeywords] = useState<TrendingKeyword[]>([]);

  useEffect(() => {
    mockGetTrendingKeywords().then(setKeywords);
  }, []);

  return (
    <section className="py-12 bg-slate-50 dark:bg-slate-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 mb-6">
          <TrendingUp className="h-5 w-5 text-blue-600" />
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white">Trending Keywords</h2>
        </div>
        <div className="flex flex-wrap gap-3">
          {keywords.map((item) => (
            <Link key={item.keyword} href={`/search?q=${encodeURIComponent(item.keyword)}`}>
              <Badge variant="secondary" className="px-4 py-2 text-sm gap-2 hover:bg-blue-50 dark:hover:bg-blue-950 transition-colors cursor-pointer">
                {item.keyword}
                <span className="text-xs text-slate-400">({item.count.toLocaleString()})</span>
                {item.trend === 'up' && <TrendingUp className="h-3 w-3 text-green-500" />}
                {item.trend === 'down' && <TrendingDown className="h-3 w-3 text-red-500" />}
                {item.trend === 'stable' && <Minus className="h-3 w-3 text-slate-400" />}
              </Badge>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
