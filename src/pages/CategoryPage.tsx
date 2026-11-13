import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { categories } from '@/data/siteConfig';
import { getArticlesByCategory } from '@/data/articles';
import ArticleCard from '@/components/ArticleCard';
import SectionLabel from '@/components/SectionLabel';

export default function CategoryPage() {
  const { slug } = useParams<{ slug: string }>();
  const category = categories.find((c) => c.slug === slug);
  const catArticles = slug ? getArticlesByCategory(slug) : [];

  if (!category) {
    return (
      <div className="mx-auto max-w-2xl px-6 py-32 text-center">
        <p className="text-[0.7rem] uppercase tracking-label text-terracotta-500 mb-4">Not Found</p>
        <h1 className="font-display text-4xl text-ink-900 mb-4">We don't have that category.</h1>
        <Link to="/categories" className="text-ink-600 hover:text-terracotta-500 underline">
          Browse all categories
        </Link>
      </div>
    );
  }

  const [lead, ...rest] = catArticles;

  return (
    <div className="bg-paper-50">
      {/* Header */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 pt-12 lg:pt-16 pb-10">
        <Link
          to="/categories"
          className="inline-flex items-center gap-2 text-[0.7rem] uppercase tracking-label text-ink-500 hover:text-terracotta-500 transition-colors mb-6"
        >
          All Categories
        </Link>
        <SectionLabel className="mb-4">Category</SectionLabel>
        <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-semibold text-ink-900 leading-[1.02]">
          {category.name}
        </h1>
        <p className="mt-6 text-lg text-ink-600 max-w-2xl leading-relaxed">
          {category.description}
        </p>
        <p className="mt-4 text-sm text-ink-500">
          {catArticles.length} {catArticles.length === 1 ? 'article' : 'articles'} in this section
        </p>
      </section>

      {lead && (
        <section className="mx-auto max-w-7xl px-6 lg:px-10 py-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center border-y border-rule py-10"
          >
            <Link to={`/article/${lead.slug}`} className="lg:col-span-7 overflow-hidden block">
              <img
                src={lead.image}
                alt={lead.imageAlt}
                className="w-full aspect-[16/10] object-cover transition-transform duration-700 hover:scale-105"
              />
            </Link>
            <div className="lg:col-span-5">
              <p className="text-[0.7rem] uppercase tracking-label text-terracotta-500 font-medium mb-3">
                Featured in {category.name}
              </p>
              <Link to={`/article/${lead.slug}`}>
                <h2 className="font-display text-3xl sm:text-4xl text-ink-900 leading-tight hover:text-terracotta-600 transition-colors">
                  {lead.title}
                </h2>
              </Link>
              <p className="mt-4 text-ink-600 leading-relaxed">{lead.excerpt}</p>
              <Link
                to={`/article/${lead.slug}`}
                className="mt-6 inline-flex items-center gap-2 text-[0.72rem] uppercase tracking-label font-medium text-ink-900 border-b border-terracotta-500 pb-1 hover:text-terracotta-600 transition-colors group"
              >
                Read <ArrowRight size={14} strokeWidth={1.5} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </section>
      )}

      {/* Rest of articles */}
      {rest.length > 0 && (
        <section className="mx-auto max-w-7xl px-6 lg:px-10 py-12">
          <div className="grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((article, i) => (
              <ArticleCard key={article.id} article={article} index={i % 3} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
