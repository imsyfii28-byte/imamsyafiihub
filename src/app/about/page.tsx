import { BookOpen, Globe, Shield, Zap, TrendingUp, Users } from 'lucide-react';
import { Card } from '@/components/ui/card';

const features = [
  { icon: Globe, title: 'Global Coverage', description: 'Access millions of papers from thousands of publishers worldwide' },
  { icon: Zap, title: 'Smart Search', description: 'AI-powered search that understands your research intent' },
  { icon: Shield, title: 'Verified Sources', description: 'All papers indexed from trusted academic databases' },
  { icon: TrendingUp, title: 'Real-time Updates', description: 'Stay current with the latest research publications' },
  { icon: Users, title: 'Collaborative', description: 'Share, save, and organize research with your team' },
  { icon: BookOpen, title: 'Open Access', description: 'Discover freely available research from around the globe' },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">About ImamSyafiiHub</h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            ImamSyafiiHub is a powerful academic search engine designed to help researchers, students, and academics discover and access scholarly publications from around the world.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <Card key={i} className="p-6 text-center hover:shadow-md transition-shadow">
                <div className="inline-flex p-3 rounded-xl bg-blue-50 dark:bg-blue-900/20 mb-4">
                  <Icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-slate-900 dark:text-white mb-2">{feature.title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">{feature.description}</p>
              </Card>
            );
          })}
        </div>

        <div className="prose prose-slate dark:prose-invert max-w-none">
          <h2>Our Mission</h2>
          <p>
            At ImamSyafiiHub, we believe that knowledge should be accessible to everyone. Our mission is to democratize access to academic research by providing a powerful, intuitive search engine that aggregates papers from multiple trusted sources.
          </p>
          <h2>How It Works</h2>
          <p>
            ImamSyafiiHub indexes millions of papers from leading academic databases including Crossref, OpenAlex, Semantic Scholar, CORE, PubMed, and more. Our intelligent search algorithms help you find the most relevant research quickly, while our AI assistant helps you understand and analyze papers.
          </p>
          <h2>Data Sources</h2>
          <p>
            We aggregate data from: Crossref, OpenAlex, Semantic Scholar, CORE, DOAJ, PubMed, arXiv, Zenodo, BASE Search, Springer Nature, and Elsevier APIs.
          </p>
        </div>
      </div>
    </div>
  );
}
