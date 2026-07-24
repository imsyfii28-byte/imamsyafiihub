'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronRight, Home } from 'lucide-react';

const pageNames: Record<string, string> = {
  search: 'Search',
  article: 'Article',
  bookmark: 'Bookmarks',
  history: 'History',
  dashboard: 'Dashboard',
  profile: 'Profile',
  settings: 'Settings',
  login: 'Sign In',
  register: 'Sign Up',
  about: 'About',
  contact: 'Contact',
  privacy: 'Privacy Policy',
  terms: 'Terms of Service',
};

export function Breadcrumb() {
  const pathname = usePathname();
  if (pathname === '/') return null;

  const segments = pathname.split('/').filter(Boolean);

  return (
    <nav className="mx-auto max-w-7xl px-4 pt-4 sm:px-6 lg:px-8">
      <ol className="flex items-center gap-1.5 text-sm text-slate-500 dark:text-slate-400">
        <li>
          <Link href="/" className="flex items-center gap-1 hover:text-blue-600 transition-colors">
            <Home className="h-3.5 w-3.5" />
            <span>Home</span>
          </Link>
        </li>
        {segments.map((segment, index) => {
          const href = '/' + segments.slice(0, index + 1).join('/');
          const isLast = index === segments.length - 1;
          const label = pageNames[segment] || segment.charAt(0).toUpperCase() + segment.slice(1);

          return (
            <li key={href} className="flex items-center gap-1.5">
              <ChevronRight className="h-3.5 w-3.5" />
              {isLast ? (
                <span className="font-medium text-slate-900 dark:text-white">{label}</span>
              ) : (
                <Link href={href} className="hover:text-blue-600 transition-colors">{label}</Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
