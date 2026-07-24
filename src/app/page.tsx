'use client';

import { motion } from 'framer-motion';
import { SearchBox } from '@/components/shared/SearchBox';
import { Stats } from '@/components/shared/Stats';
import { TrendingKeywords } from '@/components/shared/TrendingKeywords';
import { CTA } from '@/components/shared/CTA';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-950 dark:via-slate-900 dark:to-blue-950">
        <div className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-800 [mask-image:radial-gradient(ellipse_at_center,white,transparent_70%)]" />
        <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-blue-400/10 blur-3xl" />
        <div className="absolute bottom-20 right-10 h-72 w-72 rounded-full bg-indigo-400/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl md:text-6xl lg:text-7xl"
            >
              Temukan Referensi
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                Penelitian Terbaik
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mx-auto mt-6 max-w-2xl text-lg text-slate-600 dark:text-slate-400 sm:text-xl"
            >
              Cari jutaan jurnal, artikel ilmiah, prosiding, tesis, dan buku akademik
              dari berbagai sumber terpercaya dalam satu tempat.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mx-auto mt-10 max-w-3xl"
            >
              <SearchBox large placeholder="Search articles, authors, keywords, DOI..." />
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-8 flex flex-wrap items-center justify-center gap-3 text-sm text-slate-500 dark:text-slate-400"
            >
              <span>Popular:</span>
              {['Machine Learning', 'Pendidikan Indonesia', 'UMKM Digital', 'Merdeka Belajar'].map((keyword) => (
                <a
                  key={keyword}
                  href={`/search?q=${encodeURIComponent(keyword)}`}
                  className="rounded-full bg-slate-100 px-3 py-1 hover:bg-blue-100 hover:text-blue-700 transition-colors dark:bg-slate-800 dark:hover:bg-blue-900 dark:hover:text-blue-300"
                >
                  {keyword}
                </a>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Stats />
      <TrendingKeywords />
      <CTA />
    </div>
  );
}
