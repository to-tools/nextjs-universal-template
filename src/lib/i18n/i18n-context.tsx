'use client';

import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import {
  SupportedLocale,
  DEFAULT_LOCALE,
  LOCALE_STORAGE_KEY,
  SUPPORTED_LANGUAGES,
  I18nContextType,
  TranslationFile,
  TranslationValue,
} from './i18n-config';
import {
  detectBrowserLocale,
  createTranslationFunction,
  validateTranslations,
} from './i18n-utils';
import {
  getLocaleFromPath,
  generateLocalizedUrl,
  removeLocaleFromPath,
} from './url-utils';

// 动态导入翻译文件
const loadTranslations = async (locale: SupportedLocale): Promise<TranslationFile> => {
  try {
    switch (locale) {
      case 'zh-CN':
        const { zhCN } = await import('./locales/zh-CN');
        return zhCN;
      case 'en-US':
        const { enUS } = await import('./locales/en-US');
        return enUS;
      case 'ja-JP':
        const { jaJP } = await import('./locales/ja-JP');
        return jaJP;
      case 'ko-KR':
        const { koKR } = await import('./locales/ko-KR');
        return koKR;
      case 'fr-FR':
        const { frFR } = await import('./locales/fr-FR');
        return frFR;
      default:
        // 默认回退到英语
        const { enUS: fallback } = await import('./locales/en-US');
        return fallback;
    }
  } catch (error) {
    console.error(`Failed to load translations for locale: ${locale}`, error);
    // 紧急回退
    const { enUS } = await import('./locales/en-US');
    return enUS;
  }
};

// 创建上下文
const I18nContext = createContext<I18nContextType | undefined>(undefined);

// Provider Props
interface I18nProviderProps {
  children: ReactNode;
  defaultLocale?: SupportedLocale;
}

export function I18nProvider({ children, defaultLocale }: I18nProviderProps) {
  const router = useRouter();
  const pathname = usePathname();
  
  // 从URL路径获取当前语言
  const currentLocaleFromPath = getLocaleFromPath(pathname);
  const [locale, setLocaleState] = useState<SupportedLocale>(
    currentLocaleFromPath || defaultLocale || DEFAULT_LOCALE
  );
  const [translations, setTranslations] = useState<Record<string, TranslationValue>>({});
  const [isLoading, setIsLoading] = useState(true);

  // 加载翻译文件
  const loadTranslationsForLocale = async (targetLocale: SupportedLocale) => {
    try {
      setIsLoading(true);
      const translationData = await loadTranslations(targetLocale);
      
      // 在开发模式下验证翻译完整性
      if (process.env.NODE_ENV === 'development' && targetLocale !== DEFAULT_LOCALE) {
        const baseTranslations = await loadTranslations(DEFAULT_LOCALE);
        validateTranslations(baseTranslations, translationData, targetLocale);
      }
      
      setTranslations(translationData);
    } catch (error) {
      console.error('Failed to load translations:', error);
      // 回退到默认语言
      if (targetLocale !== DEFAULT_LOCALE) {
        const fallbackTranslations = await loadTranslations(DEFAULT_LOCALE);
        setTranslations(fallbackTranslations);
      }
    } finally {
      setIsLoading(false);
    }
  };

  // 设置语言并导航到新的URL
  const setLocale = async (newLocale: SupportedLocale, redirect: boolean = true) => {
    if (newLocale === locale) return;
    
    try {
      // 保存到本地存储和cookie
      if (typeof window !== 'undefined') {
        localStorage.setItem(LOCALE_STORAGE_KEY, newLocale);
        // 设置cookie，供中间件使用
        document.cookie = `preferred-language=${newLocale}; path=/; max-age=31536000; SameSite=Lax`;
      }
      
      // 更新状态
      setLocaleState(newLocale);
      
      // 如果需要重定向，导航到新的语言路径
      if (redirect) {
        const newUrl = generateLocalizedUrl(pathname, newLocale);
        router.push(newUrl);
      } else {
        // 仅加载翻译，不重定向
        await loadTranslationsForLocale(newLocale);
      }
      
      // 更新document语言属性
      if (typeof document !== 'undefined') {
        document.documentElement.lang = newLocale;
        document.documentElement.dir = SUPPORTED_LANGUAGES[newLocale]?.rtl ? 'rtl' : 'ltr';
      }
    } catch (error) {
      console.error('Failed to set locale:', error);
    }
  };

  // 监听路径变化，更新语言状态
  useEffect(() => {
    const pathLocale = getLocaleFromPath(pathname);
    if (pathLocale && pathLocale !== locale) {
      setLocaleState(pathLocale);
      loadTranslationsForLocale(pathLocale);
      
      // 保存到本地存储
      if (typeof window !== 'undefined') {
        localStorage.setItem(LOCALE_STORAGE_KEY, pathLocale);
        document.cookie = `preferred-language=${pathLocale}; path=/; max-age=31536000; SameSite=Lax`;
      }
    }
  }, [pathname, locale]);

  // 初始化
  useEffect(() => {
    const initializeLocale = async () => {
      let initialLocale = currentLocaleFromPath || defaultLocale || DEFAULT_LOCALE;
      
      // 如果URL中没有语言路径，使用保存的偏好或检测浏览器语言
      if (!currentLocaleFromPath && typeof window !== 'undefined') {
        const savedLocale = localStorage.getItem(LOCALE_STORAGE_KEY) as SupportedLocale;
        if (savedLocale && Object.keys(SUPPORTED_LANGUAGES).includes(savedLocale)) {
          initialLocale = savedLocale;
        } else {
          const detectedLocale = detectBrowserLocale();
          initialLocale = detectedLocale;
          localStorage.setItem(LOCALE_STORAGE_KEY, detectedLocale);
        }
      }
      
      setLocaleState(initialLocale);
      await loadTranslationsForLocale(initialLocale);
      
      // 设置document属性
      if (typeof document !== 'undefined') {
        document.documentElement.lang = initialLocale;
        document.documentElement.dir = SUPPORTED_LANGUAGES[initialLocale]?.rtl ? 'rtl' : 'ltr';
      }
    };

    initializeLocale();
  }, [currentLocaleFromPath, defaultLocale]);

  // 创建翻译函数
  const t = createTranslationFunction(translations, locale);

  const contextValue: I18nContextType = {
    locale,
    setLocale,
    t,
    languages: SUPPORTED_LANGUAGES,
    isLoading,
  };

  return (
    <I18nContext.Provider value={contextValue}>
      {children}
    </I18nContext.Provider>
  );
}

// Hook
export function useI18n(): I18nContextType {
  const context = useContext(I18nContext);
  if (context === undefined) {
    throw new Error('useI18n must be used within an I18nProvider');
  }
  return context;
}

// 便捷Hook：仅获取翻译函数
export function useTranslation() {
  const { t, locale, isLoading } = useI18n();
  return { t, locale, isLoading };
}

// 便捷Hook：仅获取语言切换功能
export function useLanguage() {
  const { locale, setLocale, languages, isLoading } = useI18n();
  return { locale, setLocale, languages, isLoading };
}

// 新增Hook：获取当前路径（不含语言前缀）
export function useLocalizedPath() {
  const pathname = usePathname();
  return removeLocaleFromPath(pathname);
} 