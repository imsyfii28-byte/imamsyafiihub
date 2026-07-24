import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatCitationCount(count: number): string {
  if (count >= 1000) return `${(count / 1000).toFixed(1)}k`;
  if (count >= 1000000) return `${(count / 1000000).toFixed(1)}M`;
  return count.toString();
}

export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trimEnd() + '...';
}

export function formatDate(date: string): string {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export function getYearOptions(): number[] {
  const currentYear = new Date().getFullYear();
  const years: number[] = [];
  for (let i = currentYear; i >= 1950; i--) {
    years.push(i);
  }
  return years;
}

export function getLanguageOptions(): { value: string; label: string }[] {
  return [
    { value: 'en', label: 'English' },
    { value: 'id', label: 'Indonesian' },
    { value: 'ar', label: 'Arabic' },
    { value: 'zh', label: 'Chinese' },
    { value: 'fr', label: 'French' },
    { value: 'de', label: 'German' },
    { value: 'ja', label: 'Japanese' },
    { value: 'ko', label: 'Korean' },
    { value: 'pt', label: 'Portuguese' },
    { value: 'ru', label: 'Russian' },
    { value: 'es', label: 'Spanish' },
  ];
}

export function getSubjectOptions(): { value: string; label: string }[] {
  return [
    { value: 'computer-science', label: 'Computer Science' },
    { value: 'artificial-intelligence', label: 'Artificial Intelligence' },
    { value: 'education', label: 'Education' },
    { value: 'medicine', label: 'Medicine' },
    { value: 'engineering', label: 'Engineering' },
    { value: 'law', label: 'Law' },
    { value: 'economics', label: 'Economics' },
    { value: 'mathematics', label: 'Mathematics' },
    { value: 'physics', label: 'Physics' },
    { value: 'chemistry', label: 'Chemistry' },
    { value: 'biology', label: 'Biology' },
    { value: 'psychology', label: 'Psychology' },
    { value: 'sociology', label: 'Sociology' },
    { value: 'philosophy', label: 'Philosophy' },
    { value: 'history', label: 'History' },
    { value: 'linguistics', label: 'Linguistics' },
    { value: 'environmental-science', label: 'Environmental Science' },
    { value: 'materials-science', label: 'Materials Science' },
    { value: 'neuroscience', label: 'Neuroscience' },
    { value: 'public-health', label: 'Public Health' },
  ];
}

export function getQuartileOptions(): { value: string; label: string; color: string }[] {
  return [
    { value: 'q1', label: 'Q1', color: 'text-green-600 bg-green-50' },
    { value: 'q2', label: 'Q2', color: 'text-blue-600 bg-blue-50' },
    { value: 'q3', label: 'Q3', color: 'text-yellow-600 bg-yellow-50' },
    { value: 'q4', label: 'Q4', color: 'text-red-600 bg-red-50' },
  ];
}

export function getArticleTypeColor(type: string): string {
  const colors: Record<string, string> = {
    journal: 'bg-blue-100 text-blue-700',
    conference: 'bg-purple-100 text-purple-700',
    thesis: 'bg-green-100 text-green-700',
    dissertation: 'bg-orange-100 text-orange-700',
    book: 'bg-indigo-100 text-indigo-700',
    article: 'bg-gray-100 text-gray-700',
  };
  return colors[type] || 'bg-gray-100 text-gray-700';
}

export function generateDoiUrl(doi: string): string {
  return `https://doi.org/${doi}`;
}
