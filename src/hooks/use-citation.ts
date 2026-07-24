'use client';

import { useState, useCallback } from 'react';
import { Citation } from '@/types';
import { mockGetCitations } from '@/services/mock-data';

export function useCitation() {
  const [citations, setCitations] = useState<Citation | null>(null);
  const [loading, setLoading] = useState(false);

  const generateCitations = useCallback(async (articleId: string) => {
    setLoading(true);
    try {
      await new Promise(r => setTimeout(r, 500));
      const data = await mockGetCitations();
      setCitations(data);
    } finally {
      setLoading(false);
    }
  }, []);

  const copyToClipboard = useCallback(async (text: string) => {
    await navigator.clipboard.writeText(text);
  }, []);

  return { citations, loading, generateCitations, copyToClipboard };
}
