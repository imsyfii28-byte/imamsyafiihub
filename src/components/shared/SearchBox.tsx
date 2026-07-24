'use client';

import { useState, useEffect, useRef } from 'react';
import { Search, X } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useDebounce } from '@/hooks/use-debounce';
import { useRouter } from 'next/navigation';

interface SearchBoxProps {
  large?: boolean;
  placeholder?: string;
  defaultValue?: string;
  onSearch?: (query: string) => void;
  className?: string;
}

export function SearchBox({ large = false, placeholder = 'Search articles, authors, keywords, DOI...', defaultValue = '', onSearch, className = '' }: SearchBoxProps) {
  const [query, setQuery] = useState(defaultValue);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  useEffect(() => {
    if (inputRef.current && large) {
      inputRef.current.focus();
    }
  }, [large]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const q = query.trim();
    if (!q) return;
    if (onSearch) {
      onSearch(q);
    } else {
      router.push(`/search?q=${encodeURIComponent(q)}`);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={`relative ${className}`}>
      <div className="relative flex items-center">
        <Search className={`absolute left-4 text-slate-400 ${large ? 'h-6 w-6' : 'h-4 w-4'}`} />
        <Input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={placeholder}
          className={`w-full border-slate-200 bg-white pl-12 pr-12 text-slate-900 shadow-sm placeholder:text-slate-400 focus-visible:ring-blue-500 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:placeholder:text-slate-500 ${
            large ? 'h-16 rounded-2xl text-lg' : 'h-12 rounded-xl text-base'
          }`}
        />
        {query && (
          <Button type="button" variant="ghost" size="icon" className={`absolute right-16 ${large ? 'h-8 w-8' : 'h-6 w-6'}`} onClick={() => setQuery('')}>
            <X className={large ? 'h-5 w-5' : 'h-4 w-4'} />
          </Button>
        )}
        <Button type="submit" size="icon" className={`absolute right-2 bg-blue-600 hover:bg-blue-700 text-white ${large ? 'h-12 w-12 rounded-xl' : 'h-8 w-8 rounded-lg'}`}>
          <Search className={large ? 'h-5 w-5' : 'h-4 w-4'} />
        </Button>
      </div>
    </form>
  );
}
