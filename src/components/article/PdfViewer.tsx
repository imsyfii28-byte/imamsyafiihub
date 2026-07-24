'use client';

import { useState } from 'react';
import { FileText, Download, ExternalLink, AlertCircle, Loader2, Maximize2, Minimize2, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

interface PdfViewerProps {
  url: string;
  title: string;
  contentType?: 'pdf' | 'html';
}

export function PdfViewer({ url, title, contentType = 'pdf' }: PdfViewerProps) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const isPdf = contentType === 'pdf' || url.toLowerCase().endsWith('.pdf');
  const proxyUrl = `/api/pdf?url=${encodeURIComponent(url)}`;
  const directUrl = url;

  const handleDownload = () => {
    const a = document.createElement('a');
    a.href = isPdf ? proxyUrl : directUrl;
    a.download = isPdf ? `${title.replace(/[^a-zA-Z0-9]/g, '_')}.pdf` : '';
    a.target = '_blank';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold flex items-center gap-2">
          {isPdf ? (
            <FileText className="h-5 w-5 text-blue-600" />
          ) : (
            <Globe className="h-5 w-5 text-green-600" />
          )}
          {isPdf ? 'PDF Viewer' : 'Full Text Viewer'}
        </h3>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" onClick={() => setExpanded(!expanded)}>
            {expanded ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
            {expanded ? 'Collapse' : 'Expand'}
          </Button>
          <Button variant="outline" size="sm" onClick={handleDownload} className="gap-2">
            <Download className="h-4 w-4" /> {isPdf ? 'Download' : 'Open Link'}
          </Button>
          <a href={directUrl} target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="sm" className="gap-2">
              <ExternalLink className="h-4 w-4" /> Open
            </Button>
          </a>
        </div>
      </div>

      <Card className={`relative overflow-hidden transition-all duration-300 ${expanded ? 'h-[800px]' : 'h-[500px]'}`}>
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center bg-slate-50 dark:bg-slate-800 z-10">
            <div className="flex flex-col items-center gap-2">
              <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
              <p className="text-sm text-slate-500">Loading content...</p>
            </div>
          </div>
        )}

        {error ? (
          <div className="absolute inset-0 flex items-center justify-center bg-slate-50 dark:bg-slate-800">
            <div className="flex flex-col items-center gap-3 text-center p-6">
              <AlertCircle className="h-12 w-12 text-slate-400" />
              <div>
                <p className="font-medium text-slate-900 dark:text-white">Cannot display content</p>
                <p className="text-sm text-slate-500 mt-1">Try opening directly in your browser</p>
              </div>
              <div className="flex gap-2">
                <a href={directUrl} target="_blank" rel="noopener noreferrer">
                  <Button size="sm" className="gap-2">
                    <ExternalLink className="h-4 w-4" /> Open in Browser
                  </Button>
                </a>
              </div>
            </div>
          </div>
        ) : isPdf ? (
          <iframe
            src={proxyUrl}
            className="w-full h-full border-0"
            onLoad={() => setLoading(false)}
            onError={() => { setLoading(false); setError(true); }}
            title={`PDF: ${title}`}
          />
        ) : (
          <iframe
            src={directUrl}
            className="w-full h-full border-0"
            onLoad={() => setLoading(false)}
            onError={() => { setLoading(false); setError(true); }}
            title={`Article: ${title}`}
          />
        )}
      </Card>
    </div>
  );
}
