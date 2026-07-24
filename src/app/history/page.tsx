'use client';

import Link from 'next/link';
import { History, Search, Clock, Trash2, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { mockHistory } from '@/services/mock-data';
import { formatDate } from '@/lib/utils';
import { useState } from 'react';
import { toast } from 'sonner';

export default function HistoryPage() {
  const [history, setHistory] = useState(mockHistory);

  const clearHistory = () => {
    setHistory([]);
    toast.success('History cleared');
  };

  const removeItem = (id: string) => {
    setHistory(prev => prev.filter(h => h.id !== id));
    toast.success('Item removed');
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <History className="h-6 w-6 text-blue-600" />
            <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Search History</h1>
          </div>
          {history.length > 0 && (
            <Button variant="outline" size="sm" className="text-red-500 gap-2" onClick={clearHistory}>
              <Trash2 className="h-4 w-4" /> Clear All
            </Button>
          )}
        </div>

        {history.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <History className="h-16 w-16 text-slate-300 mb-4" />
            <h2 className="text-xl font-semibold mb-2">No search history</h2>
            <p className="text-slate-500 mb-6">Your recent searches will appear here</p>
            <Link href="/search"><Button className="bg-blue-600 hover:bg-blue-700 gap-2"><Search className="h-4 w-4" /> Start Searching</Button></Link>
          </div>
        ) : (
          <div className="space-y-3">
            {history.map(item => (
              <Card key={item.id} className="p-4">
                <div className="flex items-center justify-between">
                  <Link href={`/search?q=${encodeURIComponent(item.query)}`} className="flex items-center gap-3 flex-1 min-w-0">
                    <Clock className="h-5 w-5 text-slate-400 shrink-0" />
                    <div className="min-w-0">
                      <p className="font-medium text-slate-900 dark:text-white truncate">{item.query}</p>
                      <p className="text-xs text-slate-500">{formatDate(item.createdAt)}</p>
                    </div>
                  </Link>
                  <div className="flex items-center gap-2 shrink-0">
                    <Link href={`/search?q=${encodeURIComponent(item.query)}`}>
                      <Button variant="ghost" size="icon"><ArrowRight className="h-4 w-4" /></Button>
                    </Link>
                    <Button variant="ghost" size="icon" className="text-red-500" onClick={() => removeItem(item.id)}>
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
