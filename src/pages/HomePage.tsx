import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Clock } from 'lucide-react';
import { getFeaturedArticle, getRecentArticles, articles } from '@/data/articles';
import { categories, siteConfig } from '@/data/siteConfig';
import ArticleCard from '@/components/ArticleCard';
import SectionLabel from '@/components/SectionLabel';

export default function HomePage() {
  const featured = getFeaturedArticle();
  const recent = getRecentArticles().filter((a) => a.id !== featured.id);
  const editorPicks = recent.slice(0, 2);
  const grid = recent.slice(2, 6);
  const minimal = recent.slice(6);

  return (
    <div className="bg-paper-50">
      {/* Hero — asymmetric editorial */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 pt-10 lg:pt-16 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Text column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 lg:order-1 order-2"
          >
            <SectionLabel className="mb-6">The Featured Essay</SectionLabel>
            <h1 className="font-display fluid-hero font-semibold text-ink-900">
              {featured.title}
            </h1>
            <p className="mt-6 text-lg text-ink-600 leading-relaxed max-w-md font-display italic">
              {featured.subtitle}
            </p>
            <p className="mt-6 text-ink-600 leading-relaxed max-w-md">
              {featured.excerpt}
            </p>
            <div className="mt-8 flex items-center gap-5 text-xs text-ink-500">
              <span className="uppercase tracking-label font-medium text-ink-700">
                {featured.author.name}
              </span>
              <span className="flex items-center gap-1">
                <Clock size={13} strokeWidth={1.5} /> {featured.readTime} min read
              </span>
            </div>
            <Link
              to={`/article/${featured.slug}`}
              className="mt-8 inline-flex items-center gap-2 text-[0.72rem] uppercase tracking-label font-medium text-ink-900 border-b border-terracotta-500 pb-1 hover:text-terracotta-600 transition-colors group"
            >
              Read the essay
              <ArrowRight size={15} strokeWidth={1.5} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Image column */}
          <motion.div
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 lg:order-2 order-1"
          >
            <Link to={`/article/${featured.slug}`} className="block overflow-hidden">
              <img
                src={featured.image}
                alt={featured.imageAlt}
                className="w-full aspect-[5/4] lg:aspect-[6/5] object-cover"
              />
            </Link>
            <p className="mt-3 text-xs text-ink-400 italic">
              {featured.imageAlt}. Photograph for {siteConfig.name}.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="border-t border-rule" />
      </div>

      {/* Editor's picks — two large horizontal cards */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-16">
        <div className="flex items-baseline justify-between mb-10">
          <div>
            <SectionLabel className="mb-3">From the Editors</SectionLabel>
            <h2 className="font-display fluid-section text-ink-900">This Week's Reading</h2>
          </div>
          <Link
            to="/discover"
            className="hidden sm:inline-flex items-center gap-2 text-[0.72rem] uppercase tracking-label font-medium text-ink-600 hover:text-terracotta-500 transition-colors"
          >
            All articles <ArrowRight size={14} strokeWidth={1.5} />
          </Link>
        </div>
        <div className="grid gap-12 lg:gap-16">
          {editorPicks.map((article, i) => (
            <ArticleCard key={article.id} article={article} variant="horizontal" index={i} />
          ))}
        </div>
      </section>

      {/* Full-bleed pull quote / interlude */}
      <section className="bg-paper-200 py-20 my-8">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <motion.blockquote
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-display text-3xl sm:text-4xl lg:text-5xl italic text-ink-900 leading-snug"
          >
            "We are not what we read. We are how we read — the attention we are willing to give,
            the patience we are willing to practice, the silence we are willing to keep."
          </motion.blockquote>
          <p className="mt-8 text-[0.7rem] uppercase tracking-label text-ink-500 font-medium">
            — From the Editor's Letter, {siteConfig.issue}
          </p>
        </div>
      </section>

      {/* Grid of recent articles */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-16">
        <div className="mb-10">
          <SectionLabel className="mb-3">Recent Dispatches</SectionLabel>
          <h2 className="font-display fluid-section text-ink-900">The Latest</h2>
        </div>
        <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2">
          {grid.map((article, i) => (
            <ArticleCard key={article.id} article={article} index={i} />
          ))}
        </div>
      </section>

      {/* Categories section with overlay cards */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-16">
        <div className="mb-10">
          <SectionLabel className="mb-3">Browse by Theme</SectionLabel>
          <h2 className="font-display fluid-section text-ink-900">Categories</h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {categories.slice(0, 4).map((cat, i) => {
            const catArticle = articles.find((a) => a.category === cat.slug);
            if (!catArticle) return null;
            return (
              <motion.div
                key={cat.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <Link to={`/category/${cat.slug}`} className="group relative block overflow-hidden">
                  <img
                    src={catArticle.image}
                    alt={catArticle.imageAlt}
                    loading="lazy"
                    className="w-full aspect-[3/4] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-900/85 via-ink-900/25 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <h3 className="font-display text-2xl text-paper-50 leading-tight">{cat.name}</h3>
                    <p className="mt-1.5 text-xs text-paper-200 line-clamp-2 leading-relaxed">{cat.description}</p>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
        <div className="mt-8 text-center">
          <Link
            to="/categories"
            className="inline-flex items-center gap-2 text-[0.72rem] uppercase tracking-label font-medium text-ink-700 hover:text-terracotta-500 transition-colors"
          >
            View all categories <ArrowRight size={14} strokeWidth={1.5} />
          </Link>
        </div>
      </section>

      {/* Minimal list — more reading */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-16">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionLabel className="mb-6">More to Read</SectionLabel>
            <div className="space-y-5">
              {minimal.slice(0, 3).map((article, i) => (
                <ArticleCard key={article.id} article={article} variant="minimal" index={i} />
              ))}
            </div>
          </div>
          {/* Decorative oversized typography */}
          <div className="hidden lg:flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <p className="font-display text-[10rem] leading-none text-terracotta-500/15 select-none">
                {siteConfig.name.charAt(0)}
              </p>
              <p className="font-display text-2xl italic text-ink-600 -mt-8">
                {siteConfig.tagline}
              </p>
              <Link
                to="/about"
                className="mt-6 inline-flex items-center gap-2 text-[0.72rem] uppercase tracking-label font-medium text-ink-700 hover:text-terracotta-500 transition-colors"
              >
                About the journal <ArrowRight size={14} strokeWidth={1.5} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
