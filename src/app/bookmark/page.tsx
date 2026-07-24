'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Bookmark, FolderOpen, Trash2, Search, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { useBookmark } from '@/hooks/use-bookmark';
import { formatCitationCount, getArticleTypeColor } from '@/lib/utils';
import { toast } from 'sonner';

export default function BookmarkPage() {
  const { bookmarks, removeBookmark } = useBookmark();
  const [searchQuery, setSearchQuery] = useState('');

  const folders = [...new Set(bookmarks.filter(b => b.folder).map(b => b.folder!))];
  const filtered = bookmarks.filter(b =>
    !searchQuery || b.article.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-6">
          <Bookmark className="h-6 w-6 text-blue-600" />
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">My Bookmarks</h1>
        </div>

        <div className="mb-6">
          <Input
            placeholder="Search bookmarks..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="max-w-md"
          />
        </div>

        {bookmarks.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <Bookmark className="h-16 w-16 text-slate-300 mb-4" />
            <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">No bookmarks yet</h2>
            <p className="text-slate-500 mb-6">Save articles to read them later</p>
            <Link href="/search">
              <Button className="bg-blue-600 hover:bg-blue-700 gap-2">
                <Search className="h-4 w-4" /> Browse Research
              </Button>
            </Link>
          </div>
        ) : (
          <Tabs defaultValue="all">
            <TabsList className="mb-6">
              <TabsTrigger value="all">All ({bookmarks.length})</TabsTrigger>
              {folders.map(folder => (
                <TabsTrigger key={folder} value={folder}>
                  <FolderOpen className="h-4 w-4 mr-1" /> {folder} ({bookmarks.filter(b => b.folder === folder).length})
                </TabsTrigger>
              ))}
            </TabsList>

            <TabsContent value="all">
              <div className="space-y-3">
                {filtered.map(bookmark => (
                  <Card key={bookmark.id} className="p-4">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <Badge variant="outline" className={`text-xs ${getArticleTypeColor(bookmark.article.type)}`}>
                            {bookmark.article.type}
                          </Badge>
                          {bookmark.folder && (
                            <Badge variant="secondary" className="text-xs">
                              <FolderOpen className="h-3 w-3 mr-1" /> {bookmark.folder}
                            </Badge>
                          )}
                        </div>
                        <Link href={`/article/${bookmark.article.id}`} className="text-base font-semibold text-slate-900 hover:text-blue-600 dark:text-white dark:hover:text-blue-400">
                          {bookmark.article.title}
                        </Link>
                        <p className="text-sm text-slate-500 mt-1">
                          {bookmark.article.authors.map(a => a.name).join(', ')} · {bookmark.article.year}
                        </p>
                      </div>
                      <div className="flex items-center gap-2 shrink-0">
                        <div className="text-center mr-2">
                          <div className="text-sm font-bold text-blue-600">{formatCitationCount(bookmark.article.citationCount)}</div>
                          <div className="text-xs text-slate-400">Cited</div>
                        </div>
                        <Button variant="ghost" size="icon" className="text-red-500" onClick={() => { removeBookmark(bookmark.id); toast.success('Removed'); }}>
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {folders.map(folder => (
              <TabsContent key={folder} value={folder}>
                <div className="space-y-3">
                  {bookmarks.filter(b => b.folder === folder).map(bookmark => (
                    <Card key={bookmark.id} className="p-4">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1 min-w-0">
                          <Link href={`/article/${bookmark.article.id}`} className="text-base font-semibold text-slate-900 hover:text-blue-600 dark:text-white dark:hover:text-blue-400">
                            {bookmark.article.title}
                          </Link>
                          <p className="text-sm text-slate-500 mt-1">
                            {bookmark.article.authors.map(a => a.name).join(', ')} · {bookmark.article.year}
                          </p>
                        </div>
                        <Button variant="ghost" size="icon" className="text-red-500" onClick={() => { removeBookmark(bookmark.id); toast.success('Removed'); }}>
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        )}
      </div>
    </div>
  );
}
