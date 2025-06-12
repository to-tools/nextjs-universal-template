// 支持的语言类型
export type SupportedLocale = 'zh-CN' | 'en-US' | 'ja-JP' | 'ko-KR' | 'fr-FR';

// URL路径类型
export type UrlPath = 'zh' | 'en' | 'ja' | 'ko' | 'fr';

// 语言信息接口
export interface LanguageInfo {
  code: SupportedLocale;
  name: string;
  nativeName: string;
  flag: string;
  rtl: boolean;
  path: UrlPath;
}

// 语言到路径的映射
export const LANGUAGE_PATH_MAP: Record<SupportedLocale, UrlPath> = {
  'zh-CN': 'zh',
  'en-US': 'en',
  'ja-JP': 'ja',
  'ko-KR': 'ko',
  'fr-FR': 'fr',
};

// 路径到语言的映射
export const PATH_LANGUAGE_MAP: Record<UrlPath, SupportedLocale> = {
  'zh': 'zh-CN',
  'en': 'en-US',
  'ja': 'ja-JP',
  'ko': 'ko-KR',
  'fr': 'fr-FR',
};

// 支持的语言配置
export const SUPPORTED_LANGUAGES: Record<SupportedLocale, LanguageInfo> = {
  'en-US': {
    code: 'en-US',
    name: 'English (US)',
    nativeName: 'English',
    flag: '🇺🇸',
    rtl: false,
    path: 'en',
  },
  'zh-CN': {
    code: 'zh-CN',
    name: 'Chinese (Simplified)',
    nativeName: '简体中文',
    flag: '🇨🇳',
    rtl: false,
    path: 'zh',
  },
  'ja-JP': {
    code: 'ja-JP',
    name: 'Japanese',
    nativeName: '日本語',
    flag: '🇯🇵',
    rtl: false,
    path: 'ja',
  },
  'ko-KR': {
    code: 'ko-KR',
    name: 'Korean',
    nativeName: '한국어',
    flag: '🇰🇷',
    rtl: false,
    path: 'ko',
  },
  'fr-FR': {
    code: 'fr-FR',
    name: 'French',
    nativeName: 'Français',
    flag: '🇫🇷',
    rtl: false,
    path: 'fr',
  },
};

// 默认语言
export const DEFAULT_LOCALE: SupportedLocale = 'zh-CN';

// 语言检测优先级
export const FALLBACK_LOCALE: SupportedLocale = 'en-US';

// 本地存储键名
export const LOCALE_STORAGE_KEY = 'preferred-locale';

// 翻译插值参数类型
export type TranslationParams = Record<string, string | number>;

// 嵌套翻译键类型（用于类型安全）
export type TranslationKey = string;

// 翻译函数接口
export interface TranslationFunction {
  (key: TranslationKey, params?: TranslationParams): string;
}

// 复数规则类型
export type PluralRule = 'zero' | 'one' | 'two' | 'few' | 'many' | 'other';

// 复数翻译接口
export interface PluralTranslation {
  zero?: string;
  one?: string;
  two?: string;
  few?: string;
  many?: string;
  other: string;
}

// 翻译内容类型（支持嵌套和复数）
export type TranslationValue = string | PluralTranslation | Record<string, unknown>;

// 翻译文件类型
export type TranslationFile = Record<string, TranslationValue>;

// 国际化上下文接口
export interface I18nContextType {
  locale: SupportedLocale;
  setLocale: (locale: SupportedLocale, redirect?: boolean) => void;
  t: TranslationFunction;
  languages: Record<SupportedLocale, LanguageInfo>;
  isLoading: boolean;
} 