import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Breadcrumb } from '@/components/shared/Breadcrumb';
import { Footer } from '@/components/layout/Footer';
import { Providers } from '@/components/layout/Providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'ImamSyafiiHub - Academic Research Search Engine',
    template: '%s | ImamSyafiiHub',
  },
  description: 'Find millions of academic papers, journals, theses, and scholarly publications from trusted sources worldwide.',
  keywords: ['academic search', 'research papers', 'journals', 'scholarly articles', 'scientific publications', 'paper search'],
  authors: [{ name: 'ImamSyafiiHub' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://imamsyafiihub.ai',
    siteName: 'ImamSyafiiHub',
    title: 'ImamSyafiiHub - Academic Research Search Engine',
    description: 'Find millions of academic papers, journals, theses, and scholarly publications from trusted sources worldwide.',
    images: [{ url: '/images/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ImamSyafiiHub - Academic Research Search Engine',
    description: 'Find millions of academic papers, journals, theses, and scholarly publications.',
    images: ['/images/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'ImamSyafiiHub',
              url: 'https://imamsyafiihub.ai',
              description: 'Academic Research Search Engine',
              potentialAction: {
                '@type': 'SearchAction',
                target: {
                  '@type': 'EntryPoint',
                  urlTemplate: 'https://imamsyafiihub.ai/search?q={search_term_string}',
                },
                'query-input': 'required name=search_term_string',
              },
            }),
          }}
        />
      </head>
      <body className={`${inter.className} min-h-screen bg-white text-slate-900 antialiased dark:bg-slate-950 dark:text-slate-50`}>
        <Providers>
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <Breadcrumb />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
