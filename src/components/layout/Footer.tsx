'use client';

import Link from 'next/link';
import { BookOpen, GitBranch, X, Mail } from 'lucide-react';

const footerLinks = {
  Product: [
    { label: 'Search', href: '/search' },
    { label: 'Trending', href: '/search?trending=true' },
    { label: 'API', href: '/about' },
    { label: 'Privacy', href: '/privacy' },
    { label: 'Terms', href: '/terms' },
  ],
  Resources: [
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
    { label: 'Documentation', href: '/about' },
    { label: 'Status', href: '/about' },
  ],
  Subjects: [
    { label: 'Computer Science', href: '/search?subject=computer-science' },
    { label: 'Medicine', href: '/search?subject=medicine' },
    { label: 'Engineering', href: '/search?subject=engineering' },
    { label: 'Education', href: '/search?subject=education' },
    { label: 'Economics', href: '/search?subject=economics' },
  ],
  Developer: [
    { label: 'Imam Syafii', href: '#' },
    { label: 'UINS Samarinda', href: '#' },
    { label: 'Ilmu Al-Qur\'an & Tafsir', href: '#' },
    { label: 'imsyfii28@email.com', href: 'mailto:imsyfii28@email.com' },
  ],
};

export function Footer() {
  return (
    <footer className="border-t bg-slate-50 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-5">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600">
                <BookOpen className="h-4 w-4 text-white" />
              </div>
              <span className="text-lg font-bold text-slate-900 dark:text-white">ImamSyafiiHub</span>
            </Link>
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
              Your gateway to millions of academic research papers, journals, and scholarly publications.
            </p>
            <div className="flex gap-3">
              <Link href="https://github.com" className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-300">
                <GitBranch className="h-5 w-5" />
              </Link>
              <Link href="https://x.com" className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-300">
                <X className="h-5 w-5" />
              </Link>
              <Link href="mailto:imsyfii28@email.com" className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-300">
                <Mail className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-sm font-semibold text-slate-900 dark:text-white mb-3">{title}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-sm text-slate-600 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-8 border-t pt-8">
          <p className="text-center text-sm text-slate-500 dark:text-slate-400">
            &copy; {new Date().getFullYear()} ImamSyafiiHub. All rights reserved. Data sourced from Crossref, OpenAlex, Semantic Scholar, and other open academic databases.
          </p>
        </div>
      </div>
    </footer>
  );
}
