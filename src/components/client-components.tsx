'use client';

import React, { useState } from 'react';
import { LanguageSelect } from '@/components/i18n/language-toggle';
import { ThemeToggle } from '@/components/theme/theme-toggle';
import Link from 'next/link';
import type { SupportedLocale } from '@/lib/i18n/i18n-config';

interface HeaderControlsProps {
  className?: string;
  translations: Record<string, unknown>;
  locale: SupportedLocale;
}

export function HeaderControls({ className = '' }: HeaderControlsProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <LanguageSelect />
      <ThemeToggle />
    </div>
  );
}

interface MobileMenuButtonProps {
  translations: Record<string, unknown>;
  locale: SupportedLocale;
  aboutPath: string;
  privacyPath: string;
  termsPath: string;
}

export function MobileMenuButton({ translations, aboutPath, privacyPath, termsPath }: MobileMenuButtonProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const t = (key: string): string => {
    const keys = key.split('.');
    let value: unknown = translations;
    for (const k of keys) {
      value = (value as Record<string, unknown>)?.[k];
    }
    return (value as string) || key;
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700/50 transition-colors duration-200"
        aria-label="Navigation menu"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {isMenuOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>
      
      {/* 移动端导航菜单 */}
      {isMenuOpen && (
        <div className="absolute top-full right-0 mt-2 w-48 md:hidden border border-gray-200 dark:border-gray-700 py-4 animate-fade-in bg-white dark:bg-gray-800 backdrop-blur-sm z-50 rounded-lg shadow-lg">
          <nav className="flex flex-col space-y-3 px-4">
            <Link 
              href={aboutPath}
              className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200 font-medium py-2 px-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700/50"
              onClick={() => setIsMenuOpen(false)}
            >
              📄 {t('navigation.about')}
            </Link>
            <Link 
              href={privacyPath}
              className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200 font-medium py-2 px-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700/50"
              onClick={() => setIsMenuOpen(false)}
            >
              🔒 {t('navigation.privacy')}
            </Link>
            <Link 
              href={termsPath}
              className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200 font-medium py-2 px-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700/50"
              onClick={() => setIsMenuOpen(false)}
            >
              📋 {t('navigation.terms')}
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
} 