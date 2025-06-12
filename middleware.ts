import { NextRequest, NextResponse } from 'next/server';

// 从 i18n 配置导入支持的语言
const SUPPORTED_LANGUAGES = ['zh-CN', 'en-US', 'ja-JP', 'ko-KR', 'fr-FR'] as const;
const DEFAULT_LANGUAGE = 'zh-CN';

// 将语言代码映射到URL段
const LANGUAGE_PATH_MAP: Record<string, string> = {
  'zh-CN': 'zh',
  'en-US': 'en',
  'ja-JP': 'ja',
  'ko-KR': 'ko',
  'fr-FR': 'fr',
};

// 反向映射：从URL段到语言代码
const PATH_LANGUAGE_MAP: Record<string, string> = Object.fromEntries(
  Object.entries(LANGUAGE_PATH_MAP).map(([lang, path]) => [path, lang])
);

function getLocaleFromPath(pathname: string): string | null {
  const segments = pathname.split('/');
  const pathLang = segments[1];
  return PATH_LANGUAGE_MAP[pathLang] || null;
}

function getPreferredLocale(request: NextRequest): string {
  // 1. 检查cookies中保存的语言偏好
  const cookieLocale = request.cookies.get('preferred-language')?.value;
  if (cookieLocale && SUPPORTED_LANGUAGES.includes(cookieLocale as any)) {
    return cookieLocale;
  }

  // 2. 检查Accept-Language header
  const acceptLanguage = request.headers.get('accept-language');
  if (acceptLanguage) {
    // 简单的语言检测逻辑
    for (const lang of SUPPORTED_LANGUAGES) {
      if (acceptLanguage.includes(lang.split('-')[0])) {
        return lang;
      }
    }
  }

  // 3. 返回默认语言
  return DEFAULT_LANGUAGE;
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // 跳过静态文件和API路由
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.includes('.') ||
    pathname === '/favicon.ico'
  ) {
    return NextResponse.next();
  }

  const localeFromPath = getLocaleFromPath(pathname);
  
  // 如果路径中已经包含有效的语言代码，继续处理
  if (localeFromPath) {
    const response = NextResponse.next();
    // 设置当前语言到响应头，供组件使用
    response.headers.set('x-current-locale', localeFromPath);
    return response;
  }

  // 如果路径中没有语言代码，重定向到带语言的路径
  const preferredLocale = getPreferredLocale(request);
  const localePrefix = LANGUAGE_PATH_MAP[preferredLocale];
  
  // 构建新的URL
  const newUrl = new URL(`/${localePrefix}${pathname}`, request.url);
  
  // 保留查询参数
  newUrl.search = request.nextUrl.search;
  
  return NextResponse.redirect(newUrl);
}

export const config = {
  matcher: [
    // 匹配所有路径，除了以下几种:
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}; 