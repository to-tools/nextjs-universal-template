import { 
  SupportedLocale, 
  LANGUAGE_PATH_MAP,
  PATH_LANGUAGE_MAP,
  UrlPath
} from './i18n-config';

/**
 * 从URL路径获取当前语言
 */
export function getLocaleFromPath(pathname: string): SupportedLocale | null {
  const segments = pathname.split('/');
  const pathLang = segments[1] as UrlPath;
  return PATH_LANGUAGE_MAP[pathLang] || null;
}

/**
 * 获取语言对应的URL路径
 */
export function getPathFromLocale(locale: SupportedLocale): UrlPath {
  return LANGUAGE_PATH_MAP[locale];
}

/**
 * 生成语言切换的URL
 */
export function generateLocalizedUrl(
  pathname: string, 
  targetLocale: SupportedLocale,
  baseUrl?: string
): string {
  const currentLocale = getLocaleFromPath(pathname);
  const targetPath = getPathFromLocale(targetLocale);
  
  let newPath: string;
  
  if (currentLocale) {
    // 替换现有的语言路径
    const segments = pathname.split('/');
    segments[1] = targetPath;
    newPath = segments.join('/');
  } else {
    // 添加语言路径
    newPath = `/${targetPath}${pathname}`;
  }
  
  return baseUrl ? `${baseUrl}${newPath}` : newPath;
}

/**
 * 清理路径中的语言前缀
 */
export function removeLocaleFromPath(pathname: string): string {
  const segments = pathname.split('/');
  const firstSegment = segments[1] as UrlPath;
  
  if (PATH_LANGUAGE_MAP[firstSegment]) {
    segments.splice(1, 1);
    return segments.join('/') || '/';
  }
  
  return pathname;
}

/**
 * 检查路径是否包含语言前缀
 */
export function hasLocalePrefix(pathname: string): boolean {
  const segments = pathname.split('/');
  const firstSegment = segments[1] as UrlPath;
  return !!PATH_LANGUAGE_MAP[firstSegment];
} 

/**
 * 将URL路径参数映射为locale
 */
export function mapPathToLocale(langPath: string): SupportedLocale {
  return PATH_LANGUAGE_MAP[langPath as UrlPath] || 'zh-CN';
} 