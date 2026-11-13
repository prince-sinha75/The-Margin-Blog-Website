import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Clock, Bookmark } from 'lucide-react';
import type { Article } from '@/data/articles';
import { useBookmarks } from '@/hooks/useLocalStorage';

type Variant = 'default' | 'horizontal' | 'minimal' | 'overlay';

type ArticleCardProps = {
  article: Article;
  variant?: Variant;
  index?: number;
};

const categoryLabels: Record<string, string> = {
  design: 'Design',
  craft: 'Craft',
  culture: 'Culture',
  essay: 'Essays',
  travel: 'Travel',
};

export default function ArticleCard({ article, variant = 'default', index = 0 }: ArticleCardProps) {
  const { isBookmarked, toggleBookmark } = useBookmarks();
  const saved = isBookmarked(article.slug);

  if (variant === 'horizontal') {
    return (
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.5, delay: index * 0.08 }}
        className="group grid grid-cols-1 sm:grid-cols-[1fr_1.3fr] gap-6 items-center"
      >
        <Link to={`/article/${article.slug}`} className="overflow-hidden block">
          <img
            src={article.image}
            alt={article.imageAlt}
            loading="lazy"
            className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </Link>
        <div>
          <p className="text-[0.7rem] uppercase tracking-label text-terracotta-500 font-medium mb-2">
            {categoryLabels[article.category]}
          </p>
          <Link to={`/article/${article.slug}`}>
            <h3 className="font-display text-2xl sm:text-3xl text-ink-900 leading-tight group-hover:text-terracotta-600 transition-colors">
              {article.title}
            </h3>
          </Link>
          <p className="mt-3 text-ink-600 text-sm leading-relaxed line-clamp-3">{article.excerpt}</p>
          <div className="mt-4 flex items-center gap-4 text-xs text-ink-500">
            <span>{article.author.name}</span>
            <span className="flex items-center gap-1">
              <Clock size={12} strokeWidth={1.5} /> {article.readTime} min
            </span>
            <button
              onClick={() => toggleBookmark(article.slug)}
              className="ml-auto p-1 text-ink-400 hover:text-terracotta-500 transition-colors"
              aria-label={saved ? 'Remove bookmark' : 'Save article'}
            >
              <Bookmark size={15} strokeWidth={1.5} fill={saved ? 'currentColor' : 'none'} className={saved ? 'text-terracotta-500' : ''} />
            </button>
          </div>
        </div>
      </motion.article>
    );
  }

  if (variant === 'minimal') {
    return (
      <motion.article
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.45, delay: index * 0.06 }}
        className="group border-t border-rule pt-5"
      >
        <p className="text-[0.68rem] uppercase tracking-label text-terracotta-500 font-medium mb-2">
          {categoryLabels[article.category]}
        </p>
        <Link to={`/article/${article.slug}`}>
          <h3 className="font-display text-xl sm:text-2xl text-ink-900 leading-snug group-hover:text-terracotta-600 transition-colors">
            {article.title}
          </h3>
        </Link>
        <div className="mt-3 flex items-center gap-3 text-xs text-ink-500">
          <span>{article.author.name}</span>
          <span>·</span>
          <span className="flex items-center gap-1">
            <Clock size={12} strokeWidth={1.5} /> {article.readTime} min
          </span>
        </div>
      </motion.article>
    );
  }

  if (variant === 'overlay') {
    return (
      <motion.article
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.55, delay: index * 0.1 }}
        className="group relative overflow-hidden"
      >
        <Link to={`/article/${article.slug}`} className="block">
          <img
            src={article.image}
            alt={article.imageAlt}
            loading="lazy"
            className="w-full aspect-[3/4] object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-900/80 via-ink-900/20 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-6">
            <p className="text-[0.68rem] uppercase tracking-label text-paper-200 font-medium mb-2">
              {categoryLabels[article.category]}
            </p>
            <h3 className="font-display text-2xl text-paper-50 leading-tight">{article.title}</h3>
            <p className="mt-2 text-sm text-paper-200 line-clamp-2">{article.excerpt}</p>
          </div>
        </Link>
      </motion.article>
    );
  }

  // default — vertical card with image on top
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.55, delay: index * 0.1 }}
      className="group flex flex-col"
    >
      <Link to={`/article/${article.slug}`} className="overflow-hidden block">
        <img
          src={article.image}
          alt={article.imageAlt}
          loading="lazy"
          className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </Link>
      <div className="pt-5 flex flex-col flex-1">
        <p className="text-[0.68rem] uppercase tracking-label text-terracotta-500 font-medium mb-2">
          {categoryLabels[article.category]}
        </p>
        <Link to={`/article/${article.slug}`}>
          <h3 className="font-display text-2xl text-ink-900 leading-tight group-hover:text-terracotta-600 transition-colors">
            {article.title}
          </h3>
        </Link>
        <p className="mt-3 text-ink-600 text-sm leading-relaxed line-clamp-3">{article.excerpt}</p>
        <div className="mt-4 flex items-center gap-3 text-xs text-ink-500 pt-3 border-t border-rule">
          <span>{article.author.name}</span>
          <span>·</span>
          <span className="flex items-center gap-1">
            <Clock size={12} strokeWidth={1.5} /> {article.readTime} min
          </span>
          <button
            onClick={() => toggleBookmark(article.slug)}
            className="ml-auto p-1 text-ink-400 hover:text-terracotta-500 transition-colors"
            aria-label={saved ? 'Remove bookmark' : 'Save article'}
          >
            <Bookmark size={15} strokeWidth={1.5} fill={saved ? 'currentColor' : 'none'} className={saved ? 'text-terracotta-500' : ''} />
          </button>
        </div>
      </div>
    </motion.article>
  );
}
