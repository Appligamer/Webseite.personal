import React, { createContext, useContext, useEffect, useState } from 'react';
import { Language, Theme } from '../types';

interface AppContextType {
  language: Language;
  theme: Theme;
  toggleLanguage: () => void;
  toggleTheme: () => void;
  setLanguage: (lang: Language) => void;
  setTheme: (theme: Theme) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

// Safe storage access helper for iframe and sandboxed environments
const getSafeStorage = (key: string): string | null => {
  try {
    if (typeof window !== 'undefined' && window.localStorage) {
      return localStorage.getItem(key);
    }
  } catch {
    // SecurityError / Storage blocked in sandbox
  }
  return null;
};

const setSafeStorage = (key: string, value: string) => {
  try {
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.setItem(key, value);
    }
  } catch {
    // SecurityError / Storage blocked in sandbox
  }
};

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = getSafeStorage('jg_lang');
    if (saved === 'de' || saved === 'en') return saved;
    return 'de';
  });

  const [theme, setThemeState] = useState<Theme>(() => {
    const saved = getSafeStorage('jg_theme');
    if (saved === 'dark' || saved === 'light') return saved;
    try {
      if (typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
        return 'light';
      }
    } catch {
      // Ignore matchMedia error
    }
    return 'dark';
  });

  useEffect(() => {
    try {
      const root = document.documentElement;
      if (theme === 'dark') {
        root.classList.add('dark');
        root.classList.remove('light');
      } else {
        root.classList.add('light');
        root.classList.remove('dark');
      }
      setSafeStorage('jg_theme', theme);
    } catch {
      // Ignore DOM exception
    }
  }, [theme]);

  useEffect(() => {
    try {
      document.documentElement.lang = language;
      setSafeStorage('jg_lang', language);
    } catch {
      // Ignore DOM exception
    }
  }, [language]);

  const toggleLanguage = () => {
    setLanguageState((prev) => (prev === 'de' ? 'en' : 'de'));
  };

  const toggleTheme = () => {
    setThemeState((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
  };

  return (
    <AppContext.Provider
      value={{
        language,
        theme,
        toggleLanguage,
        toggleTheme,
        setLanguage,
        setTheme,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = (): AppContextType => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
