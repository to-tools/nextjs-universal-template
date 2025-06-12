'use client';

import React from 'react';
import { useI18n } from '@/lib/i18n/i18n-context';
import { SupportedLocale } from '@/lib/i18n/i18n-config';

interface LanguageToggleProps {
  className?: string;
  showLabel?: boolean;
}

export function LanguageToggle({ className = '', showLabel = false }: LanguageToggleProps) {
  const { locale, setLocale, languages, t } = useI18n();

  const currentLanguage = languages[locale];
  
  const handleToggle = () => {
    // 简单的语言切换逻辑（循环切换）
    const locales = Object.keys(languages) as SupportedLocale[];
    const currentIndex = locales.indexOf(locale);
    const nextIndex = (currentIndex + 1) % locales.length;
    const nextLocale = locales[nextIndex];
    // 启用重定向，切换到新的语言路径
    setLocale(nextLocale, true);
  };

  return (
    <button
      onClick={handleToggle}
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
      title={t('language.switch')}
    >
      <span className="text-lg">{currentLanguage.flag}</span>
      {showLabel && (
        <span className="text-sm font-medium">
          {currentLanguage.nativeName}
        </span>
      )}
    </button>
  );
}

interface LanguageSelectProps {
  className?: string;
  variant?: 'compact' | 'full';
}

export function LanguageSelect({ className = '', variant = 'compact' }: LanguageSelectProps) {
  const { locale, setLocale, languages, isLoading, t } = useI18n();

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newLocale = event.target.value as SupportedLocale;
    // 启用重定向，切换到新的语言路径
    setLocale(newLocale, true);
  };

  if (isLoading) {
    return (
      <div className={`
        inline-flex items-center gap-2 px-3 py-2 rounded-lg
        bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 
        border border-gray-200 dark:border-gray-600
        ${className}
      `}>
        <span className="text-sm">{t('common.loading')}</span>
      </div>
    );
  }

  return (
    <select
      value={locale}
      onChange={handleChange}
      className={`
        px-3 py-2 rounded-lg
        bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300
        border border-gray-200 dark:border-gray-600
        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-50 dark:focus:ring-offset-gray-900
        hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-200
        ${className}
      `}
      title={t('language.select')}
    >
      {Object.entries(languages).map(([code, info]) => (
        <option 
          key={code} 
          value={code}
          className="bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300"
        >
          {variant === 'full' 
            ? `${info.flag} ${info.nativeName} (${info.name})`
            : `${info.flag} ${info.nativeName}`
          }
        </option>
      ))}
    </select>
  );
}

interface LanguageMenuProps {
  className?: string;
  onClose?: () => void;
}

export function LanguageMenu({ className = '', onClose }: LanguageMenuProps) {
  const { locale, setLocale, languages, t } = useI18n();

  const handleSelect = (newLocale: SupportedLocale) => {
    // 启用重定向，切换到新的语言路径
    setLocale(newLocale, true);
    onClose?.();
  };

  return (
    <div className={`
      bg-card border border-border rounded-lg shadow-lg p-2
      min-w-48
      ${className}
    `}>
      <div className="px-3 py-2 text-sm font-medium text-muted-foreground border-b border-border mb-2">
        {t('language.select')}
      </div>
      {Object.entries(languages).map(([code, info]) => (
        <button
          key={code}
          onClick={() => handleSelect(code as SupportedLocale)}
          className={`
            w-full flex items-center gap-3 px-3 py-2 rounded-md text-left
            hover:bg-accent hover:text-accent-foreground
            transition-colors duration-150
            ${locale === code ? 'bg-accent text-accent-foreground' : ''}
          `}
        >
          <span className="text-lg">{info.flag}</span>
          <div className="flex-1">
            <div className="font-medium">{info.nativeName}</div>
            <div className="text-xs text-muted-foreground">{info.name}</div>
          </div>
          {locale === code && (
            <span className="text-xs">✓</span>
          )}
        </button>
      ))}
    </div>
  );
}

// 高级语言切换器组件，支持多种交互方式
interface AdvancedLanguageSwitcherProps {
  className?: string;
  variant?: 'button' | 'select' | 'menu';
  showLabel?: boolean;
  showNativeNames?: boolean;
}

export function AdvancedLanguageSwitcher({ 
  className = '', 
  variant = 'select',
  showLabel = true,
  showNativeNames = true 
}: AdvancedLanguageSwitcherProps) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  if (variant === 'button') {
    return <LanguageToggle className={className} showLabel={showLabel} />;
  }

  if (variant === 'select') {
    return (
      <LanguageSelect 
        className={className} 
        variant={showNativeNames ? 'full' : 'compact'} 
      />
    );
  }

  if (variant === 'menu') {
    return (
      <div className="relative">
        <LanguageToggle 
          className={className} 
          showLabel={showLabel}
        />
        {isMenuOpen && (
          <>
            <div 
              className="fixed inset-0 z-10" 
              onClick={() => setIsMenuOpen(false)}
            />
            <div className="absolute top-full right-0 mt-2 z-20">
              <LanguageMenu onClose={() => setIsMenuOpen(false)} />
            </div>
          </>
        )}
      </div>
    );
  }

  return null;
}

export default AdvancedLanguageSwitcher; 