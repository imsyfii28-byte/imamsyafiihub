'use client';

import { useState, useCallback } from 'react';
import { UserBookmark } from '@/types';
import { mockBookmarks } from '@/services/mock-data';

export function useBookmark() {
  const [bookmarks, setBookmarks] = useState<UserBookmark[]>(mockBookmarks);
  const [loading, setLoading] = useState(false);

  const addBookmark = useCallback(async (articleId: string, folder?: string) => {
    const newBookmark: UserBookmark = {
      id: `bookmark-${Date.now()}`,
      articleId,
      article: bookmarks.find(b => b.articleId === articleId)?.article || {} as any,
      folder,
      createdAt: new Date().toISOString(),
    };
    setBookmarks(prev => [newBookmark, ...prev]);
  }, [bookmarks]);

  const removeBookmark = useCallback(async (id: string) => {
    setBookmarks(prev => prev.filter(b => b.id !== id));
  }, []);

  const isBookmarked = useCallback((articleId: string) => {
    return bookmarks.some(b => b.articleId === articleId);
  }, [bookmarks]);

  return { bookmarks, loading, addBookmark, removeBookmark, isBookmarked };
}
