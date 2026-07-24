import { SearchFilters, SearchResult, Article, TrendingKeyword, Citation, User, UserBookmark, UserHistory, DashboardStats } from '@/types';

const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api';

class ApiService {
  private baseUrl: string;

  constructor() {
    this.baseUrl = API_BASE;
  }

  private async fetch<T>(endpoint: string, options?: RequestInit): Promise<T> {
    const res = await fetch(`${this.baseUrl}${endpoint}`, {
      headers: {
        'Content-Type': 'application/json',
        ...options?.headers,
      },
      ...options,
    });
    if (!res.ok) throw new Error(`API Error: ${res.statusText}`);
    return res.json();
  }

  async search(filters: SearchFilters): Promise<SearchResult> {
    const params = new URLSearchParams();
    Object.entries(filters).forEach(([key, value]) => {
      if (value !== undefined && value !== null && value !== '') {
        params.append(key, String(value));
      }
    });
    return this.fetch<SearchResult>(`/search?${params}`);
  }

  async getArticle(id: string): Promise<Article> {
    return this.fetch<Article>(`/articles/${id}`);
  }

  async getTrendingKeywords(): Promise<TrendingKeyword[]> {
    return this.fetch<TrendingKeyword[]>('/trending');
  }

  async getRelatedArticles(articleId: string): Promise<Article[]> {
    return this.fetch<Article[]>(`/articles/${articleId}/related`);
  }

  async getCitations(articleId: string): Promise<Citation> {
    return this.fetch<Citation>(`/articles/${articleId}/citations`);
  }

  async login(email: string, password: string): Promise<{ user: User; token: string }> {
    return this.fetch('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });
  }

  async register(data: { name: string; email: string; password: string }): Promise<{ user: User; token: string }> {
    return this.fetch('/auth/register', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  async getProfile(): Promise<User> {
    return this.fetch<User>('/auth/profile', {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    });
  }

  async getBookmarks(): Promise<UserBookmark[]> {
    return this.fetch<UserBookmark[]>('/bookmarks', {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    });
  }

  async addBookmark(articleId: string, folder?: string): Promise<UserBookmark> {
    return this.fetch<UserBookmark>('/bookmarks', {
      method: 'POST',
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      body: JSON.stringify({ articleId, folder }),
    });
  }

  async removeBookmark(id: string): Promise<void> {
    return this.fetch(`/bookmarks/${id}`, {
      method: 'DELETE',
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    });
  }

  async getHistory(): Promise<UserHistory[]> {
    return this.fetch<UserHistory[]>('/history', {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    });
  }

  async getDashboardStats(): Promise<DashboardStats> {
    return this.fetch<DashboardStats>('/dashboard/stats', {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    });
  }

  async aiAssist(data: { type: string; articleIds?: string[]; query?: string }): Promise<{ content: string }> {
    return this.fetch<{ content: string }>('/ai/assist', {
      method: 'POST',
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      body: JSON.stringify(data),
    });
  }
}

export const api = new ApiService();
