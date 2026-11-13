import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Bookmark, ArrowRight } from 'lucide-react';
import { articles } from '@/data/articles';
import { useBookmarks } from '@/hooks/useLocalStorage';
import ArticleCard from '@/components/ArticleCard';
import SectionLabel from '@/components/SectionLabel';

export default function BookmarksPage() {
  const { bookmarks } = useBookmarks();
  const saved = articles.filter((a) => bookmarks.includes(a.slug));

  return (
    <div className="bg-paper-50">
      <section className="mx-auto max-w-7xl px-6 lg:px-10 pt-12 lg:pt-16 pb-10">
        <SectionLabel className="mb-4">Your Library</SectionLabel>
        <div className="flex items-center gap-3">
          <Bookmark size={28} strokeWidth={1.5} className="text-terracotta-500" />
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-semibold text-ink-900 leading-[1.02]">
            Saved Articles
          </h1>
        </div>
        <p className="mt-6 text-lg text-ink-600 max-w-2xl leading-relaxed">
          {saved.length > 0
            ? `You have ${saved.length} ${saved.length === 1 ? 'article' : 'articles'} saved. They're stored on this device — no account needed.`
            : 'Articles you save will appear here, ready for when you have the time to read them.'}
        </p>
      </section>

      {saved.length > 0 ? (
        <section className="mx-auto max-w-7xl px-6 lg:px-10 py-8">
          <div className="grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {saved.map((article, i) => (
              <ArticleCard key={article.id} article={article} index={i % 3} />
            ))}
          </div>
        </section>
      ) : (
        <section className="mx-auto max-w-2xl px-6 py-20 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-20 h-20 mx-auto rounded-full bg-paper-200 flex items-center justify-center mb-6"
          >
            <Bookmark size={32} strokeWidth={1.2} className="text-ink-400" />
          </motion.div>
          <h2 className="font-display text-3xl text-ink-900 mb-3">Nothing saved yet.</h2>
          <p className="text-ink-600 mb-8">
            Tap the bookmark icon on any article to save it here for later reading.
          </p>
          <Link
            to="/discover"
            className="inline-flex items-center gap-2 text-[0.72rem] uppercase tracking-label font-medium text-ink-900 border-b border-terracotta-500 pb-1 hover:text-terracotta-600 transition-colors group"
          >
            Browse articles <ArrowRight size={14} strokeWidth={1.5} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </section>
      )}
    </div>
  );
}
