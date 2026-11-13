import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { categories, siteConfig } from '@/data/siteConfig';
import { articles } from '@/data/articles';
import SectionLabel from '@/components/SectionLabel';

export default function CategoriesPage() {
  return (
    <div className="bg-paper-50">
      <section className="mx-auto max-w-7xl px-6 lg:px-10 pt-12 lg:pt-16 pb-10">
        <SectionLabel className="mb-4">Themes</SectionLabel>
        <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-semibold text-ink-900 leading-[1.02]">
          Categories
        </h1>
        <p className="mt-6 text-lg text-ink-600 max-w-2xl leading-relaxed">
          Five currents run through {siteConfig.name}. Each gathers writing that shares
          a temper of mind — follow the one that interests you, or wander among them all.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-8">
        <div className="space-y-0">
          {categories.map((cat, i) => {
            const catArticles = articles.filter((a) => a.category === cat.slug);
            const cover = catArticles[0];
            return (
              <motion.div
                key={cat.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
              >
                <Link
                  to={`/category/${cat.slug}`}
                  className="group grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 py-12 border-t border-rule items-center"
                >
                  {/* Image */}
                  <div className="lg:col-span-5 overflow-hidden">
                    {cover && (
                      <img
                        src={cover.image}
                        alt={cover.imageAlt}
                        loading="lazy"
                        className="w-full aspect-[16/10] object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    )}
                  </div>

                  {/* Text */}
                  <div className="lg:col-span-7">
                    <div className="flex items-baseline gap-4 mb-3">
                      <span className="font-display text-6xl text-terracotta-500/30 leading-none">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <h2 className="font-display text-4xl sm:text-5xl text-ink-900 group-hover:text-terracotta-600 transition-colors">
                        {cat.name}
                      </h2>
                    </div>
                    <p className="text-ink-600 text-lg leading-relaxed max-w-lg">
                      {cat.description}
                    </p>
                    <div className="mt-5 flex items-center gap-4">
                      <span className="text-xs uppercase tracking-label text-ink-500">
                        {catArticles.length} {catArticles.length === 1 ? 'article' : 'articles'}
                      </span>
                      <span className="inline-flex items-center gap-2 text-[0.72rem] uppercase tracking-label font-medium text-ink-900 group-hover:text-terracotta-500 transition-colors">
                        Explore <ArrowRight size={14} strokeWidth={1.5} className="group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
        <div className="border-t border-rule" />
      </section>
    </div>
  );
}
