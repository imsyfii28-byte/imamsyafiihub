'use client';

import { useState } from 'react';
import { Copy, Download, Check, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Article, Citation } from '@/types';
import { mockGetCitations } from '@/services/mock-data';
import { toast } from 'sonner';

interface CitationGeneratorProps {
  articleId: string;
  article: Article;
}

const citationStyles = [
  { id: 'apa', label: 'APA 7th Edition' },
  { id: 'mla', label: 'MLA 9th Edition' },
  { id: 'ieee', label: 'IEEE' },
  { id: 'chicago', label: 'Chicago' },
  { id: 'harvard', label: 'Harvard' },
  { id: 'bibtex', label: 'BibTeX' },
  { id: 'ris', label: 'RIS' },
];

export function CitationGenerator({ articleId, article }: CitationGeneratorProps) {
  const [citations, setCitations] = useState<Citation | null>(null);
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [activeStyle, setActiveStyle] = useState('apa');

  const generateCitations = async () => {
    setLoading(true);
    const data = await mockGetCitations();
    setCitations(data);
    setLoading(false);
  };

  useState(() => { generateCitations(); });

  const getCitationText = (): string => {
    if (!citations) return '';
    return (citations as any)[activeStyle] || '';
  };

  const copyToClipboard = async () => {
    const text = getCitationText();
    if (text) {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      toast.success('Citation copied to clipboard');
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const exportCitation = () => {
    const text = getCitationText();
    const ext = activeStyle === 'bibtex' ? 'bib' : activeStyle === 'ris' ? 'ris' : 'txt';
    const blob = new Blob([text], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `citation-${articleId}.${ext}`;
    a.click();
    URL.revokeObjectURL(url);
    toast.success('Citation exported');
  };

  return (
    <div>
      <div className="flex items-center gap-2 mb-4">
        <Quote className="h-5 w-5 text-blue-600" />
        <h3 className="text-lg font-semibold">Citation Generator</h3>
      </div>

      <div className="mb-4">
        <Select value={activeStyle} onValueChange={(v) => setActiveStyle(v || 'apa')}>
          <SelectTrigger className="w-full sm:w-64">
            <SelectValue placeholder="Select citation style" />
          </SelectTrigger>
          <SelectContent>
            {citationStyles.map(style => (
              <SelectItem key={style.id} value={style.id}>{style.label}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {citations && (
        <Card className="p-4 bg-slate-50 dark:bg-slate-800">
          <pre className="text-sm text-slate-700 dark:text-slate-300 whitespace-pre-wrap font-sans">
            {(citations as any)[activeStyle] || 'Citation not available'}
          </pre>
        </Card>
      )}

      <div className="flex flex-wrap gap-2 mt-4">
        <Button variant="outline" size="sm" className="gap-2" onClick={copyToClipboard}>
          {copied ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
          {copied ? 'Copied!' : 'Copy'}
        </Button>
        <Button variant="outline" size="sm" className="gap-2" onClick={exportCitation}>
          <Download className="h-4 w-4" /> Export
        </Button>
      </div>
    </div>
  );
}
