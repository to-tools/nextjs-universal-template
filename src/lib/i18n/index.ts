// 国际化配置和类型
export {
  type SupportedLocale,
  type UrlPath,
  type LanguageInfo,
  type TranslationFile,
  type TranslationFunction,
  type I18nContextType,
  SUPPORTED_LANGUAGES,
  DEFAULT_LOCALE,
  FALLBACK_LOCALE,
  LOCALE_STORAGE_KEY,
  LANGUAGE_PATH_MAP,
  PATH_LANGUAGE_MAP,
} from './i18n-config';

// 翻译工具函数
export {
  detectBrowserLocale,
  getNestedValue,
  interpolateString,
  getPluralRule,
  handlePluralTranslation,
  createTranslationFunction,
  validateTranslations,
  getLanguageDirection,
  formatDate,
  formatNumber,
  loadTranslationsForSSR,
} from './i18n-utils';

// URL工具函数
export {
  getLocaleFromPath,
  getPathFromLocale,
  generateLocalizedUrl,
  removeLocaleFromPath,
  hasLocalePrefix,
} from './url-utils';

// 国际化上下文
export { I18nProvider, useI18n } from './i18n-context'; 