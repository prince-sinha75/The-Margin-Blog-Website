import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { articles } from '@/data/articles';
import { categories } from '@/data/siteConfig';
import ArticleCard from '@/components/ArticleCard';
import SectionLabel from '@/components/SectionLabel';

type SortKey = 'recent' | 'shortest' | 'longest';

export default function DiscoverPage() {
  const [activeCat, setActiveCat] = useState<string>('all');
  const [sort, setSort] = useState<SortKey>('recent');

  const filtered = useMemo(() => {
    const list = activeCat === 'all' ? [...articles] : articles.filter((a) => a.category === activeCat);
    if (sort === 'recent') {
      list.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    } else if (sort === 'shortest') {
      list.sort((a, b) => a.readTime - b.readTime);
    } else {
      list.sort((a, b) => b.readTime - a.readTime);
    }
    return list;
  }, [activeCat, sort]);

  return (
    <div className="bg-paper-50">
      {/* Page header */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 pt-12 lg:pt-16 pb-10">
        <SectionLabel className="mb-4">The Archive</SectionLabel>
        <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-semibold text-ink-900 leading-[1.02]">
          Discover
        </h1>
        <p className="mt-6 text-lg text-ink-600 max-w-2xl leading-relaxed">
          Every essay we've published, gathered in one place. Filter by theme, sort by
          length, and find something worth your evening.
        </p>
      </section>

      {/* Filters */}
      <div className="mx-auto max-w-7xl px-6 lg:px-10 sticky top-[72px] z-30 bg-paper-50/95 backdrop-blur-sm py-4 border-y border-rule">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => setActiveCat('all')}
              className={`px-3 py-1.5 text-[0.68rem] uppercase tracking-label font-medium transition-colors ${
                activeCat === 'all'
                  ? 'text-terracotta-500 border-b border-terracotta-500'
                  : 'text-ink-500 hover:text-ink-900'
              }`}
            >
              All
            </button>
            {categories.map((cat) => (
              <button
                key={cat.slug}
                onClick={() => setActiveCat(cat.slug)}
                className={`px-3 py-1.5 text-[0.68rem] uppercase tracking-label font-medium transition-colors ${
                  activeCat === cat.slug
                    ? 'text-terracotta-500 border-b border-terracotta-500'
                    : 'text-ink-500 hover:text-ink-900'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <span className="text-[0.68rem] uppercase tracking-label text-ink-400">Sort</span>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as SortKey)}
              className="bg-transparent text-xs text-ink-700 border border-rule px-3 py-1.5 focus:outline-none focus:border-terracotta-400 cursor-pointer"
            >
              <option value="recent">Most Recent</option>
              <option value="shortest">Shortest First</option>
              <option value="longest">Longest First</option>
            </select>
          </div>
        </div>
      </div>

      {/* Results */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-12">
        <p className="text-sm text-ink-500 mb-8">
          {filtered.length} {filtered.length === 1 ? 'article' : 'articles'}
        </p>
        <motion.div
          layout
          className="grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3"
        >
          {filtered.map((article, i) => (
            <ArticleCard key={article.id} article={article} index={i % 3} />
          ))}
        </motion.div>
        {filtered.length === 0 && (
          <div className="py-20 text-center">
            <p className="font-display text-2xl text-ink-500">No articles in this category yet.</p>
          </div>
        )}
      </section>
    </div>
  );
}
