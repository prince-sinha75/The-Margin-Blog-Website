import { useCallback, useEffect, useState } from 'react';

export function useLocalStorage<T>(key: string, initial: T) {
  const [value, setValue] = useState<T>(() => {
    try {
      const stored = window.localStorage.getItem(key);
      return stored ? (JSON.parse(stored) as T) : initial;
    } catch {
      return initial;
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch {
      /* storage may be unavailable; ignore */
    }
  }, [key, value]);

  return [value, setValue] as const;
}

export function useBookmarks() {
  const [bookmarks, setBookmarks] = useLocalStorage<string[]>('margin:bookmarks', []);

  const isBookmarked = useCallback(
    (slug: string) => bookmarks.includes(slug),
    [bookmarks]
  );

  const toggleBookmark = useCallback(
    (slug: string) => {
      setBookmarks((prev) =>
        prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug]
      );
    },
    [setBookmarks]
  );

  return { bookmarks, isBookmarked, toggleBookmark };
}

export type ReadingPrefs = {
  fontSize: 'sm' | 'base' | 'lg';
  theme: 'paper' | 'sepia' | 'dark';
};

const defaultPrefs: ReadingPrefs = { fontSize: 'base', theme: 'paper' };

export function useReadingPrefs() {
  const [prefs, setPrefs] = useLocalStorage<ReadingPrefs>('margin:prefs', defaultPrefs);

  const setFontSize = useCallback(
    (fontSize: ReadingPrefs['fontSize']) => setPrefs((p) => ({ ...p, fontSize })),
    [setPrefs]
  );

  const setTheme = useCallback(
    (theme: ReadingPrefs['theme']) => setPrefs((p) => ({ ...p, theme })),
    [setPrefs]
  );

  return { prefs, setFontSize, setTheme };
}
