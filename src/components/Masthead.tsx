import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Menu, X, Bookmark } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';

type MastheadProps = {
  onOpenSearch: () => void;
};

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/discover', label: 'Discover' },
  { to: '/categories', label: 'Categories' },
  { to: '/about', label: 'About' },
];

export default function Masthead({ onOpenSearch }: MastheadProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    handler();
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-paper-50/95 backdrop-blur-sm border-b border-rule'
            : 'bg-paper-50 border-b border-transparent'
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          {/* Top bar with issue label */}
          <div
            className={`overflow-hidden transition-all duration-500 ${
              scrolled ? 'max-h-0 opacity-0' : 'max-h-10 opacity-100'
            }`}
          >
            <div className="flex items-center justify-between py-2.5 text-[0.7rem] uppercase tracking-label text-ink-500">
              <span>{siteConfig.issue}</span>
              <span className="hidden sm:block">{siteConfig.tagline}</span>
              <span>Autumn 2026</span>
            </div>
          </div>

          <div
            className={`border-rule transition-all duration-500 ${
              scrolled ? 'border-t pt-3 pb-3' : 'border-t pt-4 pb-5'
            }`}
          >
            {/* Wordmark + actions */}
            <div className="flex items-center justify-between gap-4">
              <button
                className="lg:hidden -ml-1 p-1 text-ink-800"
                onClick={() => setMobileOpen(true)}
                aria-label="Open menu"
              >
                <Menu size={22} strokeWidth={1.5} />
              </button>

              <Link
                to="/"
                className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-ink-900 leading-none"
              >
                {siteConfig.name}
                <span className="text-terracotta-500">.</span>
              </Link>

              <div className="flex items-center gap-1 sm:gap-2">
                <button
                  onClick={onOpenSearch}
                  className="p-2 text-ink-700 hover:text-terracotta-500 transition-colors"
                  aria-label="Search"
                >
                  <Search size={19} strokeWidth={1.5} />
                </button>
                <Link
                  to="/bookmarks"
                  className="p-2 text-ink-700 hover:text-terracotta-500 transition-colors hidden sm:inline-flex"
                  aria-label="Bookmarks"
                >
                  <Bookmark size={19} strokeWidth={1.5} />
                </Link>
                <Link
                  to="/subscribe"
                  className="ml-1 hidden sm:inline-flex items-center px-4 py-2 text-[0.7rem] uppercase tracking-label font-medium text-paper-50 bg-ink-900 hover:bg-terracotta-600 transition-colors duration-300"
                >
                  Subscribe
                </Link>
              </div>
            </div>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-8 mt-4">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === '/'}
                  className={({ isActive }) =>
                    `relative text-[0.72rem] uppercase tracking-label font-medium transition-colors duration-300 ${
                      isActive ? 'text-ink-900' : 'text-ink-500 hover:text-ink-900'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {item.label}
                      {isActive && (
                        <motion.span
                          layoutId="nav-underline"
                          className="absolute -bottom-1.5 left-0 right-0 h-px bg-terracotta-500"
                          transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                        />
                      )}
                    </>
                  )}
                </NavLink>
              ))}
              <div className="ml-auto flex items-center gap-4">
                <Link
                  to="/bookmarks"
                  className="text-[0.72rem] uppercase tracking-label font-medium text-ink-500 hover:text-ink-900 transition-colors"
                >
                  Saved
                </Link>
                <Link
                  to="/subscribe"
                  className="text-[0.72rem] uppercase tracking-label font-medium text-terracotta-500 hover:text-terracotta-600 transition-colors"
                >
                  Subscribe
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[60] lg:hidden bg-paper-50"
          >
            <div className="flex items-center justify-between px-6 py-5 border-b border-rule">
              <span className="font-display text-3xl font-semibold text-ink-900">
                {siteConfig.name}
                <span className="text-terracotta-500">.</span>
              </span>
              <button
                onClick={() => setMobileOpen(false)}
                className="p-1 text-ink-800"
                aria-label="Close menu"
              >
                <X size={24} strokeWidth={1.5} />
              </button>
            </div>
            <nav className="flex flex-col px-6 py-8">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.to}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i + 0.1 }}
                >
                  <NavLink
                    to={item.to}
                    end={item.to === '/'}
                    className={({ isActive }) =>
                      `block py-4 font-display text-3xl border-b border-rule transition-colors ${
                        isActive ? 'text-terracotta-500' : 'text-ink-900'
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="flex items-center gap-6 pt-8"
              >
                <Link
                  to="/bookmarks"
                  className="flex items-center gap-2 text-[0.72rem] uppercase tracking-label font-medium text-ink-600"
                >
                  <Bookmark size={16} strokeWidth={1.5} /> Saved
                </Link>
                <Link
                  to="/subscribe"
                  className="flex-1 text-center py-3 text-[0.72rem] uppercase tracking-label font-medium text-paper-50 bg-ink-900"
                >
                  Subscribe
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
