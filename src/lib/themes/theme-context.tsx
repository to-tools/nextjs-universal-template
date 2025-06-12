'use client';

import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';
import { ThemeMode, ThemeName, themes } from './theme-config';
import { 
  getStoredThemePreferences, 
  getCurrentTheme as getTheme, 
  applyThemeToDOM
} from './theme-utils';

interface ThemeContextType {
  theme: ThemeName;
  mode: ThemeMode;
  setTheme: (theme: ThemeName) => void;
  setMode: (mode: ThemeMode) => void;
  toggleTheme: () => void;
  mounted: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

interface ThemeProviderProps {
  children: React.ReactNode;
  defaultTheme?: ThemeName;
  defaultMode?: ThemeMode;
  storageKey?: string;
}

export function ThemeProvider({
  children,
  defaultTheme = 'light',
  defaultMode = 'system',
  storageKey = 'theme-preferences',
}: ThemeProviderProps) {
  const [theme, setThemeState] = useState<ThemeName>(defaultTheme);
  const [mode, setModeState] = useState<ThemeMode>(defaultMode);
  const [mounted, setMounted] = useState(false);

  // 应用主题到DOM的函数（增强版，包含CSS变量）
  const applyTheme = useCallback((targetTheme: ThemeName) => {
    if (typeof document === 'undefined') return;
    
    // 使用通用的DOM应用函数
    applyThemeToDOM(targetTheme);
    
    // 额外设置CSS变量
    const root = document.documentElement;
    const body = document.body;
    const themeColors = themes[targetTheme];
    
    if (themeColors) {
      Object.entries(themeColors).forEach(([key, value]) => {
        root.style.setProperty(`--${key}`, value);
      });
    }
    
    // 设置data属性到body
    body.setAttribute('data-theme', targetTheme);
    
    console.log(`Enhanced theme applied: ${targetTheme}`, {
      htmlClass: root.className,
      bodyClass: body.className,
      dataTheme: root.getAttribute('data-theme')
    });
  }, []);

  // 初始化主题设置
  useEffect(() => {
    const preferences = getStoredThemePreferences(storageKey);
    setThemeState(preferences.theme);
    setModeState(preferences.mode);
    setMounted(true);
  }, [storageKey]);

  // 保存主题设置
  useEffect(() => {
    if (mounted) {
      try {
        localStorage.setItem(storageKey, JSON.stringify({ theme, mode }));
        console.log('Saved theme to localStorage:', { theme, mode });
      } catch (error) {
        console.warn('Failed to save theme to localStorage:', error);
      }
    }
  }, [theme, mode, mounted, storageKey]);

  // 应用主题（不依赖getCurrentTheme函数）
  useEffect(() => {
    if (!mounted) return;

    const currentTheme = getTheme({ theme, mode });
    console.log('Applying theme effect:', { currentTheme, theme, mode });

    // 使用setTimeout确保DOM更新
    setTimeout(() => {
      applyTheme(currentTheme);
    }, 0);
  }, [theme, mode, mounted, applyTheme]);

  // 监听系统主题变化
  useEffect(() => {
    if (!mounted || mode !== 'system') return;

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleChange = (e: MediaQueryListEvent) => {
      const systemTheme = e.matches ? 'dark' : 'light';
      console.log('System theme changed:', systemTheme);
      applyTheme(systemTheme);
    };

    mediaQuery.addEventListener('change', handleChange);
    
    // 立即应用当前系统主题
    const systemTheme = mediaQuery.matches ? 'dark' : 'light';
    applyTheme(systemTheme);
    
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [mode, mounted, applyTheme]);

  const setTheme = useCallback((newTheme: ThemeName) => {
    console.log('Setting theme:', newTheme);
    setThemeState(newTheme);
    if (mode !== 'system') {
      setModeState(newTheme);
    }
  }, [mode]);

  const setMode = useCallback((newMode: ThemeMode) => {
    console.log('Setting mode:', newMode);
    setModeState(newMode);
    if (newMode !== 'system') {
      setThemeState(newMode as ThemeName);
    }
  }, []);

  const toggleTheme = useCallback(() => {
    console.log('Toggling theme, current:', { theme, mode });

    if (mode === 'system') {
      const systemTheme = typeof window !== 'undefined' 
        ? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
        : 'light';
      const newTheme = systemTheme === 'dark' ? 'light' : 'dark';
      console.log('Switching from system mode to:', newTheme);
      setTheme(newTheme);
      setModeState(newTheme);
    } else {
      const newTheme = theme === 'dark' ? 'light' : 'dark';
      console.log('Switching theme to:', newTheme);
      setTheme(newTheme);
    }
  }, [mode, theme, setTheme]);

  const value: ThemeContextType = {
    theme,
    mode,
    setTheme,
    setMode,
    toggleTheme,
    mounted,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
} 