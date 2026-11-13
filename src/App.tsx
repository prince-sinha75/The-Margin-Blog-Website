import { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Masthead from '@/components/Masthead';
import Footer from '@/components/Footer';
import SearchModal from '@/components/SearchModal';
import HomePage from '@/pages/HomePage';
import DiscoverPage from '@/pages/DiscoverPage';
import CategoriesPage from '@/pages/CategoriesPage';
import CategoryPage from '@/pages/CategoryPage';
import ArticlePage from '@/pages/ArticlePage';
import AboutPage from '@/pages/AboutPage';
import BookmarksPage from '@/pages/BookmarksPage';
import SubscribePage from '@/pages/SubscribePage';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-paper-50">
      <ScrollToTop />
      <Masthead onOpenSearch={() => setSearchOpen(true)} />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/discover" element={<DiscoverPage />} />
          <Route path="/categories" element={<CategoriesPage />} />
          <Route path="/category/:slug" element={<CategoryPage />} />
          <Route path="/article/:slug" element={<ArticlePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/bookmarks" element={<BookmarksPage />} />
          <Route path="/subscribe" element={<SubscribePage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </main>
      <Footer />
      <SearchModal open={searchOpen} onClose={() => setSearchOpen(false)} />
    </div>
  );
}
