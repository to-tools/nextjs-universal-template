'use client';

import React from 'react';
import { useTheme } from '@/lib/themes/theme-context';
import { ThemeMode } from '@/lib/themes/theme-config';
import { useI18n } from '@/lib/i18n/i18n-context';

interface ThemeToggleProps {
  className?: string;
  showLabel?: boolean;
}

export function ThemeToggle({ className = '', showLabel = false }: ThemeToggleProps) {
  const { theme, mode, toggleTheme, mounted } = useTheme();
  const { t } = useI18n();

  // 避免SSR不匹配问题
  if (!mounted) {
    return (
      <button 
        className={`inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 ${className}`}
        disabled
      >
        <span className="text-lg">🌓</span>
        {showLabel && <span className="text-sm">...</span>}
      </button>
    );
  }

  const getIcon = () => {
    if (mode === 'system') {
      return '🖥️';
    }
    return theme === 'dark' ? '🌙' : '☀️';
  };

  const getLabel = () => {
    if (mode === 'system') {
      return t('theme.system');
    }
    return theme === 'dark' ? t('theme.dark') : t('theme.light');
  };

  const getToggleTitle = () => {
    const nextMode = theme === 'dark' ? t('theme.light') : t('theme.dark');
    return `${t('theme.toggle')} - ${nextMode}`;
  };

  return (
    <button
      onClick={toggleTheme}
      className={`
        inline-flex items-center gap-2 px-3 py-2 rounded-lg
        bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300
        hover:bg-gray-50 dark:hover:bg-gray-700
        border border-gray-200 dark:border-gray-600
        transition-all duration-200 transform hover:scale-105 active:scale-95
        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-50 dark:focus:ring-offset-gray-900
        shadow-sm hover:shadow-md
        ${className}
      `}
      title={getToggleTitle()}
    >
      <span className="text-lg">{getIcon()}</span>
      {showLabel && (
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
          {getLabel()}
        </span>
      )}
    </button>
  );
}

interface ThemeSelectProps {
  className?: string;
}

export function ThemeSelect({ className = '' }: ThemeSelectProps) {
  const { mode, setMode, mounted } = useTheme();
  const { t } = useI18n();

  // 避免SSR不匹配问题
  if (!mounted) {
    return (
      <select 
        className={`px-3 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 ${className}`}
        disabled
      >
        <option>...</option>
      </select>
    );
  }

  return (
    <select
      value={mode}
      onChange={(e) => setMode(e.target.value as ThemeMode)}
      className={`
        px-3 py-2 rounded-lg
        bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300
        border border-gray-200 dark:border-gray-600
        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-50 dark:focus:ring-offset-gray-900
        hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-200
        ${className}
      `}
      title={t('theme.description')}
    >
      <option value="light" className="bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300">
        {t('theme.light')}
      </option>
      <option value="dark" className="bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300">
        {t('theme.dark')}
      </option>
      <option value="system" className="bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300">
        {t('theme.system')}
      </option>
    </select>
  );
} 