'use client';

import Link from 'next/link';
import { Bookmark, ExternalLink, Quote, Share2, FileText, Lock, Unlock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Article } from '@/types';
import { formatCitationCount, truncateText, getArticleTypeColor } from '@/lib/utils';
import { useBookmark } from '@/hooks/use-bookmark';
import { toast } from 'sonner';

interface ArticleCardProps {
  article: Article;
}

export function ArticleCard({ article }: ArticleCardProps) {
  const { isBookmarked, addBookmark, removeBookmark } = useBookmark();
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
    <Card className="group p-6 transition-all hover:shadow-md hover:border-blue-200 dark:hover:border-blue-800">
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-2">
            <Badge variant="outline" className={`text-xs ${getArticleTypeColor(article.type)}`}>
              {article.type.charAt(0).toUpperCase() + article.type.slice(1)}
            </Badge>
            {article.openAccess && (
              <Badge variant="secondary" className="bg-green-50 text-green-700 text-xs dark:bg-green-900 dark:text-green-300">
                <Unlock className="h-3 w-3 mr-1" /> Open Access
              </Badge>
            )}
            {article.quartile && (
              <Badge variant="outline" className={`text-xs ${article.quartile === 'q1' ? 'text-green-600 border-green-200' : article.quartile === 'q2' ? 'text-blue-600 border-blue-200' : article.quartile === 'q3' ? 'text-yellow-600 border-yellow-200' : 'text-red-600 border-red-200'}`}>
                {article.quartile.toUpperCase()}
              </Badge>
            )}
          </div>

          <Link href={`/article/${article.id}`}>
            <h3 className="text-lg font-semibold text-slate-900 group-hover:text-blue-600 transition-colors dark:text-white dark:group-hover:text-blue-400">
              {article.title}
            </h3>
          </Link>

          <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
            {article.authors.map(a => a.name).join(', ')}
          </p>

          <p className="mt-0.5 text-sm text-slate-500 dark:text-slate-500">
            {article.journal && <span>{article.journal} · </span>}
            {article.year} · {article.publisher}
            {article.volume && <span> · {article.volume}{article.issue ? `(${article.issue})` : ''}</span>}
            {article.pages && <span> · {article.pages}</span>}
          </p>

          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 line-clamp-2">
            {truncateText(article.abstract, 200)}
          </p>

          {article.doi && (
            <a href={`https://doi.org/${article.doi}`} target="_blank" rel="noopener noreferrer" className="mt-1 inline-flex items-center gap-1 text-xs text-blue-600 hover:text-blue-700 dark:text-blue-400">
              DOI: {article.doi} <ExternalLink className="h-3 w-3" />
            </a>
          )}

          <div className="mt-3 flex flex-wrap gap-2">
            {article.keywords.slice(0, 4).map(keyword => (
              <Link key={keyword} href={`/search?q=${encodeURIComponent(keyword)}`}>
                <Badge variant="secondary" className="text-xs cursor-pointer hover:bg-blue-50 dark:hover:bg-blue-950">
                  {keyword}
                </Badge>
              </Link>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center gap-2 shrink-0">
          <div className="text-center">
            <div className="text-xl font-bold text-blue-600 dark:text-blue-400">{formatCitationCount(article.citationCount)}</div>
            <div className="text-xs text-slate-500">Citations</div>
          </div>
        </div>
      </div>

      <div className="mt-4 flex items-center gap-2 pt-4 border-t">
        <Button variant="ghost" size="sm" className="gap-1.5 text-slate-600" onClick={handleBookmark}>
          <Bookmark className={`h-4 w-4 ${bookmarked ? 'fill-blue-600 text-blue-600' : ''}`} />
          {bookmarked ? 'Saved' : 'Save'}
        </Button>
        <Button variant="ghost" size="sm" className="gap-1.5 text-slate-600">
          <Quote className="h-4 w-4" /> Cite
        </Button>
        <Button variant="ghost" size="sm" className="gap-1.5 text-slate-600">
          <Share2 className="h-4 w-4" /> Share
        </Button>
        {article.pdfUrl && (
          <Button variant="ghost" size="sm" className="gap-1.5 text-slate-600">
            <FileText className="h-4 w-4" /> PDF
          </Button>
        )}
        <div className="flex-1" />
        <Link href={`/article/${article.id}`}>
          <Button size="sm" variant="outline" className="gap-1.5">
            View Details <ExternalLink className="h-3 w-3" />
          </Button>
        </Link>
      </div>
    </Card>
  );
}
