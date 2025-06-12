import React from 'react';
import { generateLocalizedUrl } from '@/lib/i18n/url-utils';
import { HeaderControls } from './client-components';
import { MobileMenuButton } from './client-components';
import { LogoMedium } from './Logo';
import Link from 'next/link';
import type { SupportedLocale } from '@/lib/i18n/i18n-config';

interface HeaderProps {
  className?: string;
  translations: Record<string, unknown>;
  locale: SupportedLocale;
}

export default function Header({ className = '', translations, locale }: HeaderProps) {
  const t = (key: string): string => {
    const keys = key.split('.');
    let value: unknown = translations;
    for (const k of keys) {
      value = (value as Record<string, unknown>)?.[k];
    }
    return (value as string) || key;
  };

  // 生成本地化路径的辅助函数
  const getLocalizedPath = (path: string) => generateLocalizedUrl(path, locale);

  return (
    <header className={`bg-white dark:bg-gray-800 shadow-lg border-b border-gray-200 dark:border-gray-700 transition-all duration-200 backdrop-blur-sm ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo区域 */}
          <div className="flex items-center space-x-3">
            <div className="flex-shrink-0">
              <Link href={getLocalizedPath('/')}>
                <LogoMedium className="hover:scale-105 transition-transform duration-200 cursor-pointer" />
              </Link>
            </div>
            <div className="hidden sm:block">
              <Link href={getLocalizedPath('/')}>
                <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent cursor-pointer hover:opacity-80 transition-opacity">
                  {t('seo.siteName')}
                </h1>
              </Link>
              <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400 mt-0.5">
                {t('seo.siteDescription')}
              </p>
            </div>
          </div>

          {/* 桌面端导航和控制按钮 */}
          <div className="hidden md:flex items-center space-x-6">
            <nav className="flex items-center space-x-6">
              <Link 
                href={getLocalizedPath('/about')}
                className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200 font-medium hover:bg-gray-100 dark:hover:bg-gray-700/50 px-3 py-2 rounded-lg"
              >
                {t('navigation.about')}
              </Link>
              <Link 
                href={getLocalizedPath('/privacy')}
                className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200 font-medium hover:bg-gray-100 dark:hover:bg-gray-700/50 px-3 py-2 rounded-lg"
              >
                {t('navigation.privacy')}
              </Link>
              <Link 
                href={getLocalizedPath('/terms')}
                className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200 font-medium hover:bg-gray-100 dark:hover:bg-gray-700/50 px-3 py-2 rounded-lg"
              >
                {t('navigation.terms')}
              </Link>
            </nav>
            <div className="w-px h-6 bg-gray-300 dark:bg-gray-600"></div>
            <HeaderControls translations={translations} locale={locale} />
          </div>

          {/* 移动端菜单按钮 */}
          <div className="md:hidden flex items-center space-x-3">
            <HeaderControls translations={translations} locale={locale} />
            <MobileMenuButton 
              translations={translations} 
              locale={locale}
              aboutPath={getLocalizedPath('/about')}
              privacyPath={getLocalizedPath('/privacy')}
              termsPath={getLocalizedPath('/terms')}
            />
          </div>
        </div>
      </div>
    </header>
  );
} 