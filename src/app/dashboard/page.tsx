'use client';

import Link from 'next/link';
import { Bookmark, History, Search, Download, Quote, TrendingUp, FileText, BookOpen, ArrowRight, Activity } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { mockDashboardStats, mockBookmarks, mockHistory } from '@/services/mock-data';
import { formatDate, formatCitationCount } from '@/lib/utils';

export default function DashboardPage() {
  const stats = mockDashboardStats;

  const statCards = [
    { icon: Bookmark, label: 'Total Bookmarks', value: stats.totalBookmarks, color: 'text-blue-600 bg-blue-50 dark:bg-blue-900/20' },
    { icon: Search, label: 'Total Searches', value: stats.totalSearches, color: 'text-purple-600 bg-purple-50 dark:bg-purple-900/20' },
    { icon: Quote, label: 'Citations Exported', value: stats.totalCitations, color: 'text-green-600 bg-green-50 dark:bg-green-900/20' },
    { icon: TrendingUp, label: 'This Week', value: '+12', color: 'text-orange-600 bg-orange-50 dark:bg-orange-900/20' },
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Dashboard</h1>
            <p className="text-slate-500 dark:text-slate-400">Welcome back, Researcher</p>
          </div>
          <div className="flex gap-2">
            <Link href="/search"><Button size="sm" className="bg-blue-600 hover:bg-blue-700 gap-2"><Search className="h-4 w-4" /> New Search</Button></Link>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {statCards.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <Card key={i} className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-500">{stat.label}</p>
                    <p className="text-2xl font-bold text-slate-900 dark:text-white mt-1">{stat.value}</p>
                  </div>
                  <div className={`p-3 rounded-lg ${stat.color}`}>
                    <Icon className="h-6 w-6" />
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold flex items-center gap-2">
                <Activity className="h-5 w-5 text-blue-600" /> Recent Activity
              </h2>
            </div>
            <div className="space-y-4">
              {stats.recentActivity.map(activity => (
                <div key={activity.id} className="flex items-start gap-3">
                  <div className={`p-2 rounded-lg ${
                    activity.type === 'search' ? 'bg-blue-50 text-blue-600' :
                    activity.type === 'bookmark' ? 'bg-purple-50 text-purple-600' :
                    activity.type === 'citation' ? 'bg-green-50 text-green-600' :
                    'bg-orange-50 text-orange-600'
                  }`}>
                    {activity.type === 'search' && <Search className="h-4 w-4" />}
                    {activity.type === 'bookmark' && <Bookmark className="h-4 w-4" />}
                    {activity.type === 'citation' && <Quote className="h-4 w-4" />}
                    {activity.type === 'download' && <Download className="h-4 w-4" />}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-slate-900 dark:text-white">{activity.description}</p>
                    <p className="text-xs text-slate-500">{formatDate(activity.createdAt)}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold flex items-center gap-2">
                <Bookmark className="h-5 w-5 text-blue-600" /> Recent Bookmarks
              </h2>
              <Link href="/bookmark"><Button variant="ghost" size="sm">View All <ArrowRight className="h-4 w-4 ml-1" /></Button></Link>
            </div>
            <div className="space-y-3">
              {mockBookmarks.slice(0, 4).map(bm => (
                <Link key={bm.id} href={`/article/${bm.article.id}`}>
                  <div className="p-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                    <p className="text-sm font-medium text-slate-900 dark:text-white line-clamp-1">{bm.article.title}</p>
                    <p className="text-xs text-slate-500 mt-1">{bm.article.authors.map(a => a.name).join(', ')}</p>
                  </div>
                </Link>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
