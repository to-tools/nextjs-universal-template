import { notFound } from 'next/navigation';
import { PATH_LANGUAGE_MAP, type UrlPath } from '@/lib/i18n/i18n-config';
import { loadTranslationsForSSR } from '@/lib/i18n/i18n-utils';
import PageTemplate from '@/components/layout/PageTemplate';
import { Metadata } from 'next';

// 配置 Edge Runtime 用于 Cloudflare Pages 部署
export const runtime = 'edge';

interface AboutPageProps {
  params: Promise<{ lang: string }>;
}

export default async function AboutPage({ params }: AboutPageProps) {
  const { lang } = await params;
  const locale = PATH_LANGUAGE_MAP[lang as UrlPath];

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
      title={t('pages.about.title')}
      description={t('pages.about.description')}
    >
      <div className="space-y-12">
        {/* 项目介绍 */}
        <section className="bg-card border border-border rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-6 text-foreground">
            {t('pages.about.sections.introduction')}
          </h2>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-muted-foreground leading-relaxed mb-4">
              {t('pages.about.description')}
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {t('pages.about.content')}
            </p>
          </div>
        </section>

        {/* 技术特性 */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-card border border-border rounded-lg p-6">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-xl font-bold mb-3 text-foreground">{t('pages.about.sections.techStack')}</h3>
            <ul className="text-muted-foreground space-y-2">
              <li>• Next.js 15+ App Router</li>
              <li>• TypeScript 5</li>
              <li>• Tailwind CSS 4</li>
              <li>• React 19</li>
              <li>• Edge Runtime</li>
            </ul>
          </div>

          <div className="bg-card border border-border rounded-lg p-6">
            <div className="text-4xl mb-4">🎨</div>
            <h3 className="text-xl font-bold mb-3 text-foreground">{t('pages.about.sections.features')}</h3>
            <ul className="text-muted-foreground space-y-2">
              <li>• {t('pages.about.sections.featureList.i18n')}</li>
              <li>• {t('pages.about.sections.featureList.theme')}</li>
              <li>• {t('pages.about.sections.featureList.seo')}</li>
              <li>• {t('pages.about.sections.featureList.responsive')}</li>
              <li>• {t('pages.about.sections.featureList.deployment')}</li>
            </ul>
          </div>
        </section>

        {/* 架构优势 */}
        <section className="bg-card border border-border rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-6 text-foreground">
            {t('pages.about.sections.architecture')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="font-semibold mb-2">{t('pages.about.sections.performance')}</h3>
              <p className="text-sm text-muted-foreground">
                {t('pages.about.sections.performanceDesc')}
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔧</span>
              </div>
              <h3 className="font-semibold mb-2">{t('pages.about.sections.extensible')}</h3>
              <p className="text-sm text-muted-foreground">
                {t('pages.about.sections.extensibleDesc')}
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🛡️</span>
              </div>
              <h3 className="font-semibold mb-2">{t('pages.about.sections.typeSafe')}</h3>
              <p className="text-sm text-muted-foreground">
                {t('pages.about.sections.typeSafeDesc')}
              </p>
            </div>
          </div>
        </section>

        {/* 快速开始 */}
        <section className="bg-muted/50 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-6 text-center">{t('pages.about.sections.quickStart')}</h2>
          <div className="space-y-4">
            <div className="bg-card border border-border rounded-lg p-4">
              <h3 className="font-semibold mb-2">1. {t('pages.about.sections.step1')}</h3>
              <code className="text-sm bg-muted p-2 rounded block">
                git clone &lt;repository-url&gt;
              </code>
            </div>
            
            <div className="bg-card border border-border rounded-lg p-4">
              <h3 className="font-semibold mb-2">2. {t('pages.about.sections.step2')}</h3>
              <code className="text-sm bg-muted p-2 rounded block">
                npm install
              </code>
            </div>
            
            <div className="bg-card border border-border rounded-lg p-4">
              <h3 className="font-semibold mb-2">3. {t('pages.about.sections.step3')}</h3>
              <code className="text-sm bg-muted p-2 rounded block">
                npm run dev
              </code>
            </div>
          </div>
        </section>
      </div>
    </PageTemplate>
  );
}

// 生成页面元数据
export async function generateMetadata({ params }: AboutPageProps): Promise<Metadata> {
  const { lang } = await params;
  const locale = PATH_LANGUAGE_MAP[lang as UrlPath];
  
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
  
  return {
    title: t('seo.pages.about.title'),
    description: t('seo.pages.about.description'),
    openGraph: {
      title: t('seo.pages.about.title'),
      description: t('seo.pages.about.description'),
      type: 'website',
      locale: locale,
    },
    twitter: {
      card: 'summary_large_image',
      title: t('seo.pages.about.title'),
      description: t('seo.pages.about.description'),
    },
  };
} 