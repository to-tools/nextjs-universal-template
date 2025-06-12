import { 
  SupportedLocale, 
  DEFAULT_LOCALE, 
  FALLBACK_LOCALE,
  SUPPORTED_LANGUAGES,
  TranslationParams,
  PluralTranslation,
  TranslationValue,
  TranslationFile
} from './i18n-config';

/**
 * 检测浏览器语言偏好
 */
export function detectBrowserLocale(): SupportedLocale {
  if (typeof window === 'undefined') {
    return DEFAULT_LOCALE;
  }

  const browserLang = navigator.language;
  const supportedLocales = Object.keys(SUPPORTED_LANGUAGES) as SupportedLocale[];
  
  // 精确匹配
  if (supportedLocales.includes(browserLang as SupportedLocale)) {
    return browserLang as SupportedLocale;
  }
  
  // 语言前缀匹配 (例如: 'zh' 匹配 'zh-CN')
  const langPrefix = browserLang.split('-')[0];
  const matchedLocale = supportedLocales.find(locale => 
    locale.startsWith(langPrefix + '-')
  );
  
  if (matchedLocale) {
    return matchedLocale;
  }
  
  return FALLBACK_LOCALE;
}

/**
 * 从对象中获取嵌套值
 */
export function getNestedValue(obj: Record<string, unknown>, path: string): unknown {
  return path.split('.').reduce((current, key) => {
    return current && typeof current === 'object' && current !== null && key in current 
      ? (current as Record<string, unknown>)[key] 
      : undefined;
  }, obj as unknown);
}

/**
 * 字符串插值替换
 */
export function interpolateString(template: string, params: TranslationParams = {}): string {
  return template.replace(/\{\{(\w+)\}\}/g, (match, key) => {
    const value = params[key];
    return value !== undefined ? String(value) : match;
  });
}

/**
 * 获取复数规则（简化版本）
 */
export function getPluralRule(count: number, locale: SupportedLocale): keyof PluralTranslation {
  // 简化的复数规则，可以根据需要扩展
  switch (locale) {
    case 'zh-CN':
    case 'ja-JP':
    case 'ko-KR':
      // 中文、日文、韩文通常不区分复数
      return 'other';
    
    case 'en-US':
    case 'fr-FR':
    default:
      if (count === 0) return 'zero';
      if (count === 1) return 'one';
      return 'other';
  }
}

/**
 * 处理复数翻译
 */
export function handlePluralTranslation(
  pluralObj: PluralTranslation, 
  count: number, 
  locale: SupportedLocale,
  params: TranslationParams = {}
): string {
  const rule = getPluralRule(count, locale);
  
  // 按优先级查找合适的复数形式
  const translation = pluralObj[rule] || 
                     pluralObj['other'] || 
                     Object.values(pluralObj)[0] || 
                     '';
  
  // 添加count参数
  const finalParams = { count, ...params };
  
  return interpolateString(translation, finalParams);
}

/**
 * 翻译函数实现
 */
export function createTranslationFunction(translations: Record<string, TranslationValue>, locale: SupportedLocale) {
  return function t(key: string, params: TranslationParams = {}): string {
    const value = getNestedValue(translations, key);
    
    // 未找到翻译
    if (value === undefined) {
      console.warn(`Missing translation for key: ${key} in locale: ${locale}`);
      return key;
    }
    
    // 字符串类型
    if (typeof value === 'string') {
      return interpolateString(value, params);
    }
    
    // 复数类型
    if (typeof value === 'object' && value !== null && ('other' in value || 'one' in value)) {
      const count = params.count;
      if (typeof count === 'number') {
        return handlePluralTranslation(value as PluralTranslation, count, locale, params);
      } else {
        // 如果没有提供count参数，使用other或第一个可用的
        const fallback = (value as PluralTranslation).other || 
                        Object.values(value as PluralTranslation)[0] || 
                        '';
        return interpolateString(fallback, params);
      }
    }
    
    // 其他情况，尝试转为字符串
    return String(value);
  };
}

/**
 * 验证翻译文件完整性
 */
export function validateTranslations(
  baseTranslations: Record<string, TranslationValue>,
  targetTranslations: Record<string, TranslationValue>,
  targetLocale: SupportedLocale
): string[] {
  const missingKeys: string[] = [];
  
  function checkKeys(baseObj: Record<string, unknown>, targetObj: Record<string, unknown>, prefix = '') {
    for (const key in baseObj) {
      const currentPath = prefix ? `${prefix}.${key}` : key;
      
      if (!(key in targetObj)) {
        missingKeys.push(currentPath);
      } else if (typeof baseObj[key] === 'object' && baseObj[key] !== null && 
                 typeof targetObj[key] === 'object' && targetObj[key] !== null) {
        checkKeys(
          baseObj[key] as Record<string, unknown>, 
          targetObj[key] as Record<string, unknown>, 
          currentPath
        );
      }
    }
  }
  
  checkKeys(baseTranslations, targetTranslations);
  
  if (missingKeys.length > 0) {
    console.warn(`Missing translations in ${targetLocale}:`, missingKeys);
  }
  
  return missingKeys;
}

/**
 * 获取语言方向
 */
export function getLanguageDirection(locale: SupportedLocale): 'ltr' | 'rtl' {
  return SUPPORTED_LANGUAGES[locale]?.rtl ? 'rtl' : 'ltr';
}

/**
 * 格式化日期
 */
export function formatDate(date: Date, locale: SupportedLocale, options?: Intl.DateTimeFormatOptions): string {
  try {
    return new Intl.DateTimeFormat(locale, options).format(date);
  } catch (error) {
    console.warn(`Date formatting failed for locale ${locale}:`, error);
    return date.toLocaleDateString();
  }
}

/**
 * 格式化数字
 */
export function formatNumber(number: number, locale: SupportedLocale, options?: Intl.NumberFormatOptions): string {
  try {
    return new Intl.NumberFormat(locale, options).format(number);
  } catch (error) {
    console.warn(`Number formatting failed for locale ${locale}:`, error);
    return number.toString();
  }
}

/**
 * 服务器端翻译加载 - 用于SSR
 */
export async function loadTranslationsForSSR(locale: SupportedLocale): Promise<TranslationFile> {
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
} 