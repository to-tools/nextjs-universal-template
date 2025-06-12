import { I18nProvider } from "@/lib/i18n/i18n-context";
import { 
  PATH_LANGUAGE_MAP,
  UrlPath,
  SupportedLocale
} from "@/lib/i18n/i18n-config";
import { loadTranslationsForSSR } from "@/lib/i18n/i18n-utils";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface LayoutParams {
  lang: UrlPath;
}

interface LayoutProps {
  children: React.ReactNode;
  params: Promise<LayoutParams>;
}

// 生成静态参数（用于静态生成）
export async function generateStaticParams(): Promise<LayoutParams[]> {
  return Object.keys(PATH_LANGUAGE_MAP).map((lang) => ({
    lang: lang as UrlPath,
  }));
}

export default async function LocaleLayout({ children, params }: LayoutProps) {
  const { lang } = await params;
  const locale = PATH_LANGUAGE_MAP[lang];

  // 如果语言不支持，返回404
  if (!locale) {
    notFound();
  }

  // 加载翻译文件
  const translations = await loadTranslationsForSSR(locale);

  return (
    <I18nProvider defaultLocale={locale as SupportedLocale}>
      <div className="min-h-screen flex flex-col bg-background text-foreground">
        {/* Header导航 */}
        <Header 
          translations={translations} 
          locale={locale as SupportedLocale} 
        />
        
        {/* 主要内容区域 */}
        <main className="flex-1">
          {children}
        </main>
        
        {/* Footer */}
        <Footer 
          translations={translations} 
          locale={locale as SupportedLocale} 
        />
      </div>
    </I18nProvider>
  );
} 