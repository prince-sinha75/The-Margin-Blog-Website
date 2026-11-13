import { useEffect, useMemo, useRef, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Clock, Calendar, Bookmark, Share2, ArrowLeft, ArrowRight, Type } from 'lucide-react';
import { getArticleBySlug, articles } from '@/data/articles';
import { categories } from '@/data/siteConfig';
import { useBookmarks, useReadingPrefs, type ReadingPrefs } from '@/hooks/useLocalStorage';
import SectionLabel from '@/components/SectionLabel';

const categoryLabels: Record<string, string> = {
  design: 'Design',
  craft: 'Craft',
  culture: 'Culture',
  essay: 'Essays',
  travel: 'Travel',
};

const themeStyles: Record<ReadingPrefs['theme'], { bg: string; text: string; sub: string; blockquote: string }> = {
  paper: { bg: 'bg-paper-50', text: 'text-ink-900', sub: 'text-ink-600', blockquote: 'text-terracotta-500' },
  sepia: { bg: 'bg-[#F0E6D2]', text: 'text-[#3D2F1E]', sub: 'text-[#6B5A42]', blockquote: 'text-[#8C4A33]' },
  dark: { bg: 'bg-[#1C1917]', text: 'text-[#E7E0D5]', sub: 'text-[#A8A29E]', blockquote: 'text-[#C0785C]' },
};

const fontSizes: Record<ReadingPrefs['fontSize'], string> = {
  sm: 'text-lg',
  base: 'text-xl',
  lg: 'text-2xl',
};

function renderBody(body: string[], prefs: ReadingPrefs) {
  const styles = themeStyles[prefs.theme];
  const size = fontSizes[prefs.fontSize];

  return body.map((block, i) => {
    if (block.startsWith('## ')) {
      return (
        <h2 key={i} className={`font-display text-2xl sm:text-3xl font-semibold mt-12 mb-4 leading-tight ${styles.text}`}>
          {block.slice(3)}
        </h2>
      );
    }
    if (block.startsWith('> ')) {
      return (
        <blockquote
          key={i}
          className={`my-8 border-l-2 border-terracotta-500 pl-6 font-display text-2xl sm:text-3xl italic leading-snug ${styles.blockquote}`}
        >
          {block.slice(2)}
        </blockquote>
      );
    }
    if (block.startsWith('*') && block.endsWith('*')) {
      const inner = block.slice(1, -1);
      return (
        <p key={i} className={`my-5 font-display ${size} leading-relaxed ${styles.text}`}>
          {inner.split(/(\*[^*]+\*)/g).map((part, j) =>
            part.startsWith('*') ? (
              <em key={j} className="italic">
                {part.slice(1, -1)}
              </em>
            ) : (
              <span key={j}>{part}</span>
            )
          )}
        </p>
      );
    }
    return (
      <p key={i} className={`my-5 font-display ${size} leading-relaxed ${styles.text}`}>
        {block.split(/(\*[^*]+\*)/g).map((part, j) =>
          part.startsWith('*') ? (
            <em key={j} className="italic">
              {part.slice(1, -1)}
            </em>
          ) : (
            <span key={j}>{part}</span>
          )
        )}
      </p>
    );
  });
}

export default function ArticlePage() {
  const { slug } = useParams<{ slug: string }>();
  const article = slug ? getArticleBySlug(slug) : undefined;
  const { isBookmarked, toggleBookmark } = useBookmarks();
  const { prefs, setFontSize, setTheme } = useReadingPrefs();
  const [showSettings, setShowSettings] = useState(false);
  const articleRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  const related = useMemo(() => {
    if (!article) return [];
    return articles
      .filter((a) => a.category === article.category && a.id !== article.id)
      .slice(0, 2);
  }, [article]);

  if (!article) {
    return (
      <div className="mx-auto max-w-2xl px-6 py-32 text-center">
        <p className="text-[0.7rem] uppercase tracking-label text-terracotta-500 mb-4">Not Found</p>
        <h1 className="font-display text-4xl text-ink-900 mb-4">This article has wandered off.</h1>
        <Link to="/" className="text-ink-600 hover:text-terracotta-500 underline">
          Return to the homepage
        </Link>
      </div>
    );
  }

  const saved = isBookmarked(article.slug);
  const cat = categories.find((c) => c.slug === article.category);
  const styles = themeStyles[prefs.theme];

  return (
    <article ref={articleRef} className={`${styles.bg} transition-colors duration-500`}>
      {/* Reading progress bar */}
      <motion.div
        style={{ scaleX: progress }}
        className="fixed top-0 left-0 right-0 h-0.5 bg-terracotta-500 origin-left z-[55]"
      />

      {/* Article header */}
      <header className="mx-auto max-w-3xl px-6 pt-12 lg:pt-20 pb-10">
        <Link
          to={`/category/${article.category}`}
          className="inline-flex items-center gap-2 text-[0.7rem] uppercase tracking-label text-terracotta-500 font-medium hover:text-terracotta-600 transition-colors mb-8"
        >
          <ArrowLeft size={14} strokeWidth={1.5} />
          {categoryLabels[article.category]}
        </Link>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={`font-display text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.05] ${styles.text}`}
        >
          {article.title}
        </motion.h1>

        <p className={`mt-6 font-display text-xl sm:text-2xl italic leading-snug ${styles.sub}`}>
          {article.subtitle}
        </p>

        <div className={`mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs ${styles.sub}`}>
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-full bg-terracotta-500/15 flex items-center justify-center font-display text-base text-terracotta-600">
              {article.author.name.charAt(0)}
            </div>
            <div>
              <p className={`font-medium ${styles.text}`}>{article.author.name}</p>
              <p>{article.author.role}</p>
            </div>
          </div>
          <span className="flex items-center gap-1.5">
            <Calendar size={13} strokeWidth={1.5} /> {article.date}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock size={13} strokeWidth={1.5} /> {article.readTime} min read
          </span>
        </div>
      </header>

      {/* Hero image */}
      <div className="mx-auto max-w-5xl px-6">
        <motion.img
          initial={{ opacity: 0, scale: 1.03 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          src={article.image}
          alt={article.imageAlt}
          className="w-full aspect-[16/9] object-cover"
        />
        <p className={`mt-3 text-xs italic ${styles.sub}`}>{article.imageAlt}</p>
      </div>

      {/* Reading toolbar */}
      <div className="mx-auto max-w-3xl px-6 mt-8 flex items-center justify-between border-y border-rule py-3">
        <div className="flex items-center gap-2">
          <button
            onClick={() => toggleBookmark(article.slug)}
            className={`flex items-center gap-2 text-xs uppercase tracking-label font-medium transition-colors ${
              saved ? 'text-terracotta-500' : 'text-ink-500 hover:text-ink-900'
            }`}
          >
            <Bookmark size={15} strokeWidth={1.5} fill={saved ? 'currentColor' : 'none'} />
            {saved ? 'Saved' : 'Save'}
          </button>
          <button
            onClick={() => {
              if (navigator.share) {
                navigator.share({ title: article.title, url: window.location.href }).catch(() => {});
              } else if (navigator.clipboard) {
                navigator.clipboard.writeText(window.location.href);
              }
            }}
            className="flex items-center gap-2 text-xs uppercase tracking-label font-medium text-ink-500 hover:text-ink-900 transition-colors"
          >
            <Share2 size={15} strokeWidth={1.5} /> Share
          </button>
        </div>
        <div className="relative">
          <button
            onClick={() => setShowSettings((s) => !s)}
            className="flex items-center gap-2 text-xs uppercase tracking-label font-medium text-ink-500 hover:text-ink-900 transition-colors"
          >
            <Type size={15} strokeWidth={1.5} /> Reading
          </button>
          {showSettings && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute right-0 top-full mt-2 w-56 bg-paper-50 border border-rule shadow-xl p-4 z-20"
            >
              <p className="text-[0.65rem] uppercase tracking-label text-ink-400 mb-2">Text size</p>
              <div className="flex gap-2 mb-4">
                {(['sm', 'base', 'lg'] as const).map((sz) => (
                  <button
                    key={sz}
                    onClick={() => setFontSize(sz)}
                    className={`flex-1 py-1.5 text-xs font-medium border transition-colors ${
                      prefs.fontSize === sz
                        ? 'border-terracotta-500 text-terracotta-500 bg-terracotta-500/5'
                        : 'border-rule text-ink-500 hover:border-ink-400'
                    }`}
                  >
                    {sz === 'sm' ? 'A' : sz === 'base' ? 'Aa' : 'Aaa'}
                  </button>
                ))}
              </div>
              <p className="text-[0.65rem] uppercase tracking-label text-ink-400 mb-2">Theme</p>
              <div className="flex gap-2">
                {(['paper', 'sepia', 'dark'] as const).map((th) => (
                  <button
                    key={th}
                    onClick={() => setTheme(th)}
                    className={`flex-1 py-1.5 text-xs font-medium capitalize border transition-colors ${
                      prefs.theme === th
                        ? 'border-terracotta-500 text-terracotta-500 bg-terracotta-500/5'
                        : 'border-rule text-ink-500 hover:border-ink-400'
                    }`}
                  >
                    {th}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </div>

      {/* Article body */}
      <div className="mx-auto max-w-3xl px-6 py-12">
        {/* Lead paragraph */}
        <p className={`font-display text-2xl leading-relaxed ${styles.text} mb-8`}>
          {article.excerpt}
        </p>

        <div className="serif-prose">
          {renderBody(article.body, prefs)}
        </div>

        {/* Article footer */}
        <div className={`mt-16 pt-8 border-t border-rule ${styles.text}`}>
          <p className="text-[0.7rem] uppercase tracking-label text-terracotta-500 font-medium mb-2">
            Filed under
          </p>
          <Link
            to={`/category/${article.category}`}
            className={`font-display text-2xl ${styles.text} hover:text-terracotta-500 transition-colors`}
          >
            {cat?.name}
          </Link>
        </div>
      </div>

      {/* Related articles */}
      {related.length > 0 && (
        <section className="bg-paper-100 py-16 mt-8">
          <div className="mx-auto max-w-5xl px-6">
            <SectionLabel className="mb-3">Continue Reading</SectionLabel>
            <h2 className="font-display text-3xl text-ink-900 mb-10">More from {categoryLabels[article.category]}</h2>
            <div className="grid gap-8 sm:grid-cols-2">
              {related.map((rel) => (
                <Link key={rel.id} to={`/article/${rel.slug}`} className="group">
                  <img
                    src={rel.image}
                    alt={rel.imageAlt}
                    loading="lazy"
                    className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <p className="mt-4 text-[0.68rem] uppercase tracking-label text-terracotta-500 font-medium mb-1">
                    {categoryLabels[rel.category]}
                  </p>
                  <h3 className="font-display text-2xl text-ink-900 leading-tight group-hover:text-terracotta-600 transition-colors">
                    {rel.title}
                  </h3>
                  <p className="mt-2 text-sm text-ink-600 line-clamp-2">{rel.excerpt}</p>
                  <span className="mt-3 inline-flex items-center gap-1.5 text-xs text-ink-500">
                    <Clock size={12} strokeWidth={1.5} /> {rel.readTime} min
                  </span>
                </Link>
              ))}
            </div>
            <div className="mt-10 text-center">
              <Link
                to="/discover"
                className="inline-flex items-center gap-2 text-[0.72rem] uppercase tracking-label font-medium text-ink-700 hover:text-terracotta-500 transition-colors"
              >
                Explore all articles <ArrowRight size={14} strokeWidth={1.5} />
              </Link>
            </div>
          </div>
        </section>
      )}
    </article>
  );
}
