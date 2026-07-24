'use client';

import { motion } from 'framer-motion';
import { BookOpen, Users, FileText, Building2 } from 'lucide-react';

const stats = [
  { icon: FileText, value: '150M+', label: 'Articles & Journals' },
  { icon: Users, value: '10M+', label: 'Active Researchers' },
  { icon: Building2, value: '50K+', label: 'Publishers' },
  { icon: BookOpen, value: '200+', label: 'Subjects Covered' },
];

export function Stats() {
  return (
    <section className="py-16 bg-blue-600 dark:bg-blue-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center text-center"
              >
                <Icon className="h-8 w-8 text-blue-200 mb-3" />
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-blue-200">{stat.label}</div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
