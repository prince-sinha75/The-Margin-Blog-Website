import { Link } from 'react-router-dom';
import { Instagram, Twitter, Rss, ArrowRight } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';
import { categories } from '@/data/siteConfig';

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-rule bg-paper-100">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16">
        {/* Newsletter band */}
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16 pb-16 border-b border-rule">
          <div>
            <p className="text-[0.7rem] uppercase tracking-label text-terracotta-500 font-medium mb-3">
              The Newsletter
            </p>
            <h2 className="font-display text-3xl sm:text-4xl text-ink-900 leading-tight">
              A weekly letter for slow readers and careful makers.
            </h2>
          </div>
          <div className="flex flex-col justify-center gap-4">
            <p className="text-ink-600 text-sm leading-relaxed max-w-md">
              One thoughtful essay each week, delivered on Sunday mornings. No noise,
              no tracking, no haste. Unsubscribe whenever you like.
            </p>
            <form
              className="flex flex-col sm:flex-row gap-3"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 bg-paper-50 border border-rule px-4 py-3 text-sm text-ink-900 placeholder:text-ink-400 focus:outline-none focus:border-terracotta-400 transition-colors"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-[0.72rem] uppercase tracking-label font-medium text-paper-50 bg-ink-900 hover:bg-terracotta-600 transition-colors duration-300"
              >
                Subscribe <ArrowRight size={15} strokeWidth={1.5} />
              </button>
            </form>
          </div>
        </div>

        {/* Link columns */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 py-16">
          <div>
            <Link
              to="/"
              className="font-display text-3xl font-semibold text-ink-900"
            >
              {siteConfig.name}
              <span className="text-terracotta-500">.</span>
            </Link>
            <p className="mt-4 text-sm text-ink-600 leading-relaxed max-w-xs">
              {siteConfig.description}
            </p>
          </div>

          <div>
            <h3 className="text-[0.7rem] uppercase tracking-label text-ink-500 font-medium mb-4">
              Sections
            </h3>
            <ul className="space-y-2.5">
              {categories.map((cat) => (
                <li key={cat.slug}>
                  <Link
                    to={`/category/${cat.slug}`}
                    className="text-sm text-ink-700 hover:text-terracotta-500 transition-colors"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[0.7rem] uppercase tracking-label text-ink-500 font-medium mb-4">
              Pages
            </h3>
            <ul className="space-y-2.5">
              <li>
                <Link to="/discover" className="text-sm text-ink-700 hover:text-terracotta-500 transition-colors">
                  Discover
                </Link>
              </li>
              <li>
                <Link to="/categories" className="text-sm text-ink-700 hover:text-terracotta-500 transition-colors">
                  All Categories
                </Link>
              </li>
              <li>
                <Link to="/bookmarks" className="text-sm text-ink-700 hover:text-terracotta-500 transition-colors">
                  Saved Articles
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-ink-700 hover:text-terracotta-500 transition-colors">
                  About
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-[0.7rem] uppercase tracking-label text-ink-500 font-medium mb-4">
              Elsewhere
            </h3>
            <div className="flex items-center gap-4">
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink-600 hover:text-terracotta-500 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} strokeWidth={1.5} />
              </a>
              <a
                href={siteConfig.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink-600 hover:text-terracotta-500 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} strokeWidth={1.5} />
              </a>
              <a
                href={siteConfig.social.rss}
                className="text-ink-600 hover:text-terracotta-500 transition-colors"
                aria-label="RSS feed"
              >
                <Rss size={20} strokeWidth={1.5} />
              </a>
            </div>
            <p className="mt-6 text-xs text-ink-400">
              Founded in {siteConfig.foundedYear}.
              <br />
              Read quietly, anywhere.
            </p>
          </div>
        </div>

        {/* Bottom strip */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-8 border-t border-rule">
          <p className="text-xs text-ink-400">
            © {new Date().getFullYear()} {siteConfig.name}. An independent publication.
          </p>
          <p className="text-xs text-ink-400">
            Set in Cormorant Garamond & Inter.
          </p>
        </div>
      </div>
    </footer>
  );
}
