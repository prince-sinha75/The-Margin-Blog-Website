import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Search, X, ArrowRight } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import { articles } from '@/data/articles';
import { categories } from '@/data/siteConfig';

type SearchModalProps = {
  open: boolean;
  onClose: () => void;
};

export default function SearchModal({ open, onClose }: SearchModalProps) {
  const [query, setQuery] = useState('');

  useEffect(() => {
    if (!open) setQuery('');
  }, [open]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (open) window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [open, onClose]);

  const results = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    return articles
      .filter(
        (a) =>
          a.title.toLowerCase().includes(q) ||
          a.excerpt.toLowerCase().includes(q) ||
          a.category.toLowerCase().includes(q) ||
          a.author.name.toLowerCase().includes(q)
      )
      .slice(0, 6);
  }, [query]);

  const catMatches = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    return categories.filter((c) => c.name.toLowerCase().includes(q));
  }, [query]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[70] bg-ink-900/40 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto mt-[10vh] max-w-2xl bg-paper-50 border border-rule shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3 px-6 py-5 border-b border-rule">
              <Search size={20} strokeWidth={1.5} className="text-ink-500" />
              <input
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search articles, topics, authors…"
                className="flex-1 bg-transparent text-lg text-ink-900 placeholder:text-ink-400 focus:outline-none"
              />
              <button onClick={onClose} className="p-1 text-ink-500 hover:text-ink-900" aria-label="Close search">
                <X size={20} strokeWidth={1.5} />
              </button>
            </div>

            <div className="max-h-[50vh] overflow-y-auto">
              {query.trim() === '' && (
                <div className="px-6 py-8">
                  <p className="text-[0.7rem] uppercase tracking-label text-ink-400 mb-3">Try searching for</p>
                  <div className="flex flex-wrap gap-2">
                    {['design', 'craft', 'attention', 'light', 'travel'].map((term) => (
                      <button
                        key={term}
                        onClick={() => setQuery(term)}
                        className="px-3 py-1.5 text-xs text-ink-600 border border-rule hover:border-terracotta-400 hover:text-terracotta-500 transition-colors"
                      >
                        {term}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {query.trim() !== '' && results.length === 0 && catMatches.length === 0 && (
                <div className="px-6 py-12 text-center">
                  <p className="text-ink-500 text-sm">No results for "{query}".</p>
                </div>
              )}

              {catMatches.length > 0 && (
                <div className="px-6 py-4 border-b border-rule">
                  <p className="text-[0.7rem] uppercase tracking-label text-ink-400 mb-2">Categories</p>
                  {catMatches.map((cat) => (
                    <Link
                      key={cat.slug}
                      to={`/category/${cat.slug}`}
                      onClick={onClose}
                      className="flex items-center justify-between py-2 text-ink-800 hover:text-terracotta-500 transition-colors"
                    >
                      <span className="font-display text-xl">{cat.name}</span>
                      <ArrowRight size={16} strokeWidth={1.5} />
                    </Link>
                  ))}
                </div>
              )}

              {results.length > 0 && (
                <div className="px-6 py-2">
                  <p className="text-[0.7rem] uppercase tracking-label text-ink-400 mb-1 py-2">
                    Articles ({results.length})
                  </p>
                  {results.map((a) => (
                    <Link
                      key={a.id}
                      to={`/article/${a.slug}`}
                      onClick={onClose}
                      className="block py-3 border-t border-rule group"
                    >
                      <div className="flex items-baseline justify-between gap-4">
                        <div>
                          <p className="font-display text-lg text-ink-900 group-hover:text-terracotta-500 transition-colors leading-snug">
                            {a.title}
                          </p>
                          <p className="text-xs text-ink-500 mt-1">
                            {a.category} · {a.readTime} min read
                          </p>
                        </div>
                        <ArrowRight size={15} strokeWidth={1.5} className="text-ink-400 group-hover:text-terracotta-500 transition-colors shrink-0" />
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
