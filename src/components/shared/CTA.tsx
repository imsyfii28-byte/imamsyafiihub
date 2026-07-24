'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';

export function CTA() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 p-12 text-center">
          <div className="absolute top-0 right-0 -mt-10 -mr-10 h-40 w-40 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute bottom-0 left-0 -mb-10 -ml-10 h-40 w-40 rounded-full bg-white/10 blur-3xl" />
          <div className="relative">
            <Sparkles className="h-10 w-10 text-blue-200 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-white mb-4">Start Your Research Journey</h2>
            <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
              Join millions of researchers worldwide. Access the largest collection of academic papers, collaborate with peers, and accelerate your discoveries.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/register">
                <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50 gap-2">
                  Get Started Free <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/search">
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                  Explore Research
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
