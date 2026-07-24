'use client';

import { useState, useEffect, use } from 'react';
import Link from 'next/link';
import { ChevronLeft, Bookmark, Share2, FileText, ExternalLink, Download, Eye, BarChart3, Quote, Lock, Unlock, Clock, User, Building2, BookOpen, Hash } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Article, Citation } from '@/types';
import { mockGetArticle, mockGetRelatedArticles, mockGetCitations } from '@/services/mock-data';
import { CitationGenerator } from '@/components/citation/CitationGenerator';
import { useBookmark } from '@/hooks/use-bookmark';
import { formatCitationCount, getArticleTypeColor } from '@/lib/utils';
import { toast } from 'sonner';
import dynamic from 'next/dynamic';

const PdfViewer = dynamic(() => import('@/components/article/PdfViewer').then(m => m.PdfViewer), { ssr: false });

export default function ArticleDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const [article, setArticle] = useState<Article | null>(null);
  const [related, setRelated] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const { isBookmarked, addBookmark, removeBookmark } = useBookmark();

  const handleDownloadPdf = (pdfUrl: string) => {
    const proxyUrl = `/api/pdf?url=${encodeURIComponent(pdfUrl)}`;
    window.open(proxyUrl, '_blank');
  };

  useEffect(() => {
    async function load() {
      setLoading(true);
      const [articleData, relatedData] = await Promise.all([
        mockGetArticle(id),
        mockGetRelatedArticles(id),
      ]);
      setArticle(articleData || null);
      setRelated(relatedData);
      setLoading(false);
    }
    load();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
        <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
          <Skeleton className="h-8 w-32 mb-6" />
          <Skeleton className="h-10 w-full mb-4" />
          <Skeleton className="h-6 w-3/4 mb-2" />
          <Skeleton className="h-4 w-1/2 mb-6" />
          <Skeleton className="h-40 w-full mb-4" />
          <Skeleton className="h-60 w-full" />
        </div>
      </div>
    );
  }

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">📄</div>
          <h1 className="text-2xl font-bold mb-2">Article Not Found</h1>
          <Link href="/search"><Button>Back to Search</Button></Link>
        </div>
      </div>
    );
  }

  const bookmarked = isBookmarked(article.id);

  const handleBookmark = () => {
    if (bookmarked) {
      removeBookmark(article.id);
      toast.success('Removed from bookmarks');
    } else {
      addBookmark(article.id);
      toast.success('Added to bookmarks');
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
        <Link href="/search">
          <Button variant="ghost" size="sm" className="gap-2 mb-6">
            <ChevronLeft className="h-4 w-4" /> Back to results
          </Button>
        </Link>

        <Card className="p-6 sm:p-8">
          <div className="flex flex-wrap gap-2 mb-4">
            <Badge variant="outline" className={getArticleTypeColor(article.type)}>
              {article.type.charAt(0).toUpperCase() + article.type.slice(1)}
            </Badge>
            {article.openAccess && (
              <Badge className="bg-green-50 text-green-700 dark:bg-green-900 dark:text-green-300">
                <Unlock className="h-3 w-3 mr-1" /> Open Access
              </Badge>
            )}
            {article.quartile && (
              <Badge variant="outline">{article.quartile.toUpperCase()}</Badge>
            )}
          </div>

          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-4">
            {article.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600 dark:text-slate-400 mb-6">
            <span className="flex items-center gap-1"><User className="h-4 w-4" /> {article.authors.map(a => a.name).join(', ')}</span>
            <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> {article.year}</span>
            {article.journal && <span className="flex items-center gap-1"><BookOpen className="h-4 w-4" /> {article.journal}</span>}
            {article.publisher && <span className="flex items-center gap-1"><Building2 className="h-4 w-4" /> {article.publisher}</span>}
          </div>

          <div className="flex items-center gap-6 mb-6 p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{formatCitationCount(article.citationCount)}</div>
              <div className="text-xs text-slate-500">Citations</div>
            </div>
            {article.volume && (
              <div className="text-center">
                <div className="text-lg font-semibold">{article.volume}</div>
                <div className="text-xs text-slate-500">Volume</div>
              </div>
            )}
            {article.issue && (
              <div className="text-center">
                <div className="text-lg font-semibold">{article.issue}</div>
                <div className="text-xs text-slate-500">Issue</div>
              </div>
            )}
            {article.pages && (
              <div className="text-center">
                <div className="text-lg font-semibold">{article.pages}</div>
                <div className="text-xs text-slate-500">Pages</div>
              </div>
            )}
          </div>

          <Separator className="my-6" />

          <div className="flex flex-wrap gap-2 mb-6">
            <Button variant="outline" size="sm" className="gap-2" onClick={handleBookmark}>
              <Bookmark className={`h-4 w-4 ${bookmarked ? 'fill-blue-600 text-blue-600' : ''}`} />
              {bookmarked ? 'Saved' : 'Save'}
            </Button>
            <Button variant="outline" size="sm" className="gap-2">
              <Share2 className="h-4 w-4" /> Share
            </Button>
            {article.pdfUrl && (
              <>
                <Button variant="outline" size="sm" className="gap-2" onClick={() => handleDownloadPdf(article.pdfUrl!)}>
                  <Download className="h-4 w-4" /> Download PDF
                </Button>
                <a href={article.pdfUrl} target="_blank" rel="noopener noreferrer">
                  <Button size="sm" className="gap-2 bg-blue-600 hover:bg-blue-700">
                    <FileText className="h-4 w-4" /> Open PDF <ExternalLink className="h-3 w-3" />
                  </Button>
                </a>
              </>
            )}
            {!article.pdfUrl && (
              <Button variant="outline" size="sm" className="gap-2" disabled>
                <FileText className="h-4 w-4" /> PDF Not Available
              </Button>
            )}
          </div>

          <Tabs defaultValue={article.pdfUrl ? 'pdf' : 'abstract'} className="mt-6">
            <TabsList>
              {article.pdfUrl && <TabsTrigger value="pdf">PDF Viewer</TabsTrigger>}
              <TabsTrigger value="abstract">Abstract</TabsTrigger>
              <TabsTrigger value="details">Details</TabsTrigger>
              <TabsTrigger value="citations">Citations</TabsTrigger>
              <TabsTrigger value="related">Related</TabsTrigger>
            </TabsList>

            {article.pdfUrl && (
              <TabsContent value="pdf" className="mt-4">
                <PdfViewer url={article.pdfUrl} title={article.title} contentType={article.contentType || 'pdf'} />
              </TabsContent>
            )}

            <TabsContent value="abstract" className="mt-4">
              <h3 className="text-lg font-semibold mb-3">Abstract</h3>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">{article.abstract}</p>
              <div className="mt-4">
                <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-2">Keywords</h4>
                <div className="flex flex-wrap gap-2">
                  {article.keywords.map(kw => (
                    <Link key={kw} href={`/search?q=${encodeURIComponent(kw)}`}>
                      <Badge variant="secondary" className="cursor-pointer">{kw}</Badge>
                    </Link>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="details" className="mt-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-3">
                  {article.doi && (
                    <div>
                      <span className="text-sm font-medium text-slate-900 dark:text-white">DOI</span>
                      <a href={`https://doi.org/${article.doi}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-sm text-blue-600 hover:text-blue-700 mt-0.5">
                        {article.doi} <ExternalLink className="h-3 w-3" />
                      </a>
                    </div>
                  )}
                  {article.authors.map((author, i) => (
                    <div key={i}>
                      <span className="text-sm font-medium text-slate-900 dark:text-white">{i === 0 ? 'Authors' : ''}</span>
                      <p className="text-sm text-slate-600 dark:text-slate-400 mt-0.5">
                        {author.name}{author.affiliation ? ` (${author.affiliation})` : ''}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="space-y-3">
                  <div>
                    <span className="text-sm font-medium text-slate-900 dark:text-white">Publisher</span>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mt-0.5">{article.publisher}</p>
                  </div>
                  {article.journal && (
                    <div>
                      <span className="text-sm font-medium text-slate-900 dark:text-white">Journal</span>
                      <p className="text-sm text-slate-600 dark:text-slate-400 mt-0.5">{article.journal}</p>
                    </div>
                  )}
                  <div>
                    <span className="text-sm font-medium text-slate-900 dark:text-white">Source</span>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mt-0.5">{article.source}</p>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="citations" className="mt-4">
              <CitationGenerator articleId={id} article={article} />
            </TabsContent>

            <TabsContent value="related" className="mt-4">
              <h3 className="text-lg font-semibold mb-4">Related Articles</h3>
              <div className="space-y-3">
                {related.map(rel => (
                  <Link key={rel.id} href={`/article/${rel.id}`}>
                    <Card className="p-4 hover:shadow-md transition-shadow">
                      <h4 className="font-medium text-slate-900 dark:text-white group-hover:text-blue-600">{rel.title}</h4>
                      <p className="text-sm text-slate-500 mt-1">{rel.authors.map(a => a.name).join(', ')} · {rel.year}</p>
                      <div className="flex items-center gap-2 mt-2">
                        <Badge variant="secondary" className="text-xs">{rel.citationCount} citations</Badge>
                      </div>
                    </Card>
                  </Link>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </Card>
      </div>
    </div>
  );
}
