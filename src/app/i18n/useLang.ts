import { useState, useEffect } from 'react';
import type { Language } from './translations';

const LANGUAGE_KEY = 'portfolio_lang';
const DEFAULT_LANGUAGE: Language = 'en';

export function useLang() {
  const [lang, setLang] = useState<Language>(DEFAULT_LANGUAGE);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load language from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem(LANGUAGE_KEY) as Language | null;
    if (saved && (saved === 'en' || saved === 'fr')) {
      setLang(saved);
      document.documentElement.lang = saved;
    } else {
      document.documentElement.lang = DEFAULT_LANGUAGE;
    }
    setIsLoaded(true);
  }, []);

  // Update localStorage and document lang when language changes
  useEffect(() => {
    if (!isLoaded) return;
    localStorage.setItem(LANGUAGE_KEY, lang);
    document.documentElement.lang = lang;
  }, [lang, isLoaded]);

  const toggleLang = () => {
    setLang((prev) => (prev === 'en' ? 'fr' : 'en'));
  };

  return { lang, toggleLang, isLoaded };
}
