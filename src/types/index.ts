export interface Article {
  id: string;
  title: string;
  authors: Author[];
  year: number;
  publisher: string;
  journal: string;
  volume?: string;
  issue?: string;
  pages?: string;
  doi?: string;
  citationCount: number;
  abstract: string;
  keywords: string[];
  openAccess: boolean;
  pdfUrl?: string;
  contentType?: 'pdf' | 'html';
  language: string;
  quartile?: string;
  type: ArticleType;
  subject?: string;
  university?: string;
  url?: string;
  references?: string[];
  source: string;
  createdAt: string;
}

export interface Author {
  name: string;
  affiliation?: string;
  orcid?: string;
}

export type ArticleType = 'journal' | 'conference' | 'thesis' | 'dissertation' | 'book' | 'article';

export interface SearchFilters {
  query: string;
  yearFrom?: number;
  yearTo?: number;
  language?: string;
  publisher?: string;
  type?: ArticleType;
  openAccess?: boolean;
  citationMin?: number;
  quartile?: string;
  subject?: string;
  page: number;
  perPage: number;
  sortBy: 'relevance' | 'date' | 'citations' | 'title';
}

export interface SearchResult {
  articles: Article[];
  total: number;
  page: number;
  perPage: number;
  totalPages: number;
  facets?: Facets;
}

export interface Facets {
  years: FacetItem[];
  languages: FacetItem[];
  publishers: FacetItem[];
  types: FacetItem[];
  subjects: FacetItem[];
}

export interface FacetItem {
  value: string;
  count: number;
}

export interface TrendingKeyword {
  keyword: string;
  count: number;
  trend: 'up' | 'down' | 'stable';
}

export interface Citation {
  apa: string;
  mla: string;
  ieee: string;
  chicago: string;
  harvard: string;
  bibtex: string;
  ris: string;
}

export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  role: 'user' | 'admin';
  createdAt: string;
}

export interface UserBookmark {
  id: string;
  articleId: string;
  article: Article;
  folder?: string;
  note?: string;
  createdAt: string;
}

export interface UserHistory {
  id: string;
  query: string;
  filters?: SearchFilters;
  articles?: Article[];
  createdAt: string;
}

export interface AIAssistantRequest {
  type: 'summarize' | 'explain' | 'keypoints' | 'gap' | 'novelty' | 'researchQuestion' | 'methodology' | 'literatureReview' | 'compare' | 'recommend';
  articleIds?: string[];
  article?: Article;
  articles?: Article[];
  query?: string;
}

export interface AIAssistantResponse {
  content: string;
  loading: boolean;
  error?: string;
}

export interface DashboardStats {
  totalBookmarks: number;
  totalSearches: number;
  totalCitations: number;
  recentActivity: ActivityItem[];
}

export interface ActivityItem {
  id: string;
  type: 'search' | 'bookmark' | 'citation' | 'download';
  description: string;
  createdAt: string;
}

export interface CitationStyle {
  id: string;
  name: string;
  format: string;
}
