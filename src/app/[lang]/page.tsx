import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { 
  PATH_LANGUAGE_MAP, 
  UrlPath
} from '@/lib/i18n/i18n-config';
import { loadTranslationsForSSR } from '@/lib/i18n/i18n-utils';
import PageTemplate from '@/components/layout/PageTemplate';

interface PageProps {
  params: Promise<{ lang: UrlPath }>;
}

export default async function HomePage({ params }: PageProps) {
  const { lang } = await params;
  const locale = PATH_LANGUAGE_MAP[lang];

  if (!locale) {
    notFound();
  }

  const translations = await loadTranslationsForSSR(locale);

  const t = (key: string): string => {
    const keys = key.split('.');
    let value: unknown = translations;
    for (const k of keys) {
      value = (value as Record<string, unknown>)?.[k];
    }
    return (value as string) || key;
  };

  return (
    <PageTemplate
      title={t('pages.home.title')}
      description={t('pages.home.subtitle')}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-6 text-foreground">
            {t('pages.home.description')}
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-lg font-semibold mb-2">{t('pages.home.features.i18n.title')}</h3>
              <p className="text-muted-foreground text-sm">
                {t('pages.home.features.i18n.description')}
              </p>
            </div>
            
            <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-lg font-semibold mb-2">{t('pages.home.features.theme.title')}</h3>
              <p className="text-muted-foreground text-sm">
                {t('pages.home.features.theme.description')}
              </p>
            </div>
            
            <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-lg font-semibold mb-2">{t('pages.home.features.performance.title')}</h3>
              <p className="text-muted-foreground text-sm">
                {t('pages.home.features.performance.description')}
              </p>
            </div>
            
            <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-lg font-semibold mb-2">{t('pages.home.features.deployment.title')}</h3>
              <p className="text-muted-foreground text-sm">
                {t('pages.home.features.deployment.description')}
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-muted/50 rounded-lg p-8 mt-12">
          <h3 className="text-2xl font-semibold mb-6 text-center">{t('pages.home.quickStart.title')}</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold">1</span>
              </div>
              <h4 className="font-semibold mb-2">{t('pages.home.quickStart.step1.title')}</h4>
              <p className="text-sm text-muted-foreground">
                {t('pages.home.quickStart.step1.description')}
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold">2</span>
              </div>
              <h4 className="font-semibold mb-2">{t('pages.home.quickStart.step2.title')}</h4>
              <p className="text-sm text-muted-foreground">
                {t('pages.home.quickStart.step2.description')}
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold">3</span>
              </div>
              <h4 className="font-semibold mb-2">{t('pages.home.quickStart.step3.title')}</h4>
              <p className="text-sm text-muted-foreground">
                {t('pages.home.quickStart.step3.description')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
}

// 生成页面元数据
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang } = await params;
  const locale = PATH_LANGUAGE_MAP[lang];
  
  if (!locale) {
    return {};
  }

  const translations = await loadTranslationsForSSR(locale);
  
  const t = (key: string): string => {
    const keys = key.split('.');
    let value: unknown = translations;
    for (const k of keys) {
      value = (value as Record<string, unknown>)?.[k];
    }
    return (value as string) || key;
  };
  
  const baseUrl = 'https://nextjs-universal-template.to-tools.com';
  const logoUrl = `${baseUrl}/logo-128.svg`;
  
  return {
    title: t('seo.pages.home.title'),
    description: t('seo.pages.home.description'),
    authors: [{ name: 'Universal Template Team' }],
    openGraph: {
      title: t('seo.pages.home.title'),
      description: t('seo.pages.home.description'),
      url: `${baseUrl}/${lang}`,
      siteName: t('seo.siteName'),
      type: 'website',
      locale: locale,
      images: [
        {
          url: logoUrl,
          width: 128,
          height: 128,
          alt: 'Universal Template Logo',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: t('seo.pages.home.title'),
      description: t('seo.pages.home.description'),
      images: [logoUrl],
    },
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: `${baseUrl}/${lang}`,
      languages: {
        'zh-CN': `${baseUrl}/zh`,
        'en-US': `${baseUrl}/en`,
        'ja-JP': `${baseUrl}/ja`,
        'ko-KR': `${baseUrl}/ko`,
        'fr-FR': `${baseUrl}/fr`,
        'x-default': baseUrl,
      },
    },
    icons: {
      icon: '/logo-32.svg',
      apple: '/logo-128.svg',
    },
  };
} 