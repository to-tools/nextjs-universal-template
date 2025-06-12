import { notFound } from 'next/navigation';
import { PATH_LANGUAGE_MAP, type UrlPath } from '@/lib/i18n/i18n-config';
import { loadTranslationsForSSR } from '@/lib/i18n/i18n-utils';
import PageTemplate from '@/components/layout/PageTemplate';
import { Metadata } from 'next';

// 配置 Edge Runtime 用于 Cloudflare Pages 部署
export const runtime = 'edge';

interface TermsPageProps {
  params: Promise<{ lang: string }>;
}

export default async function TermsPage({ params }: TermsPageProps) {
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
      title={t('pages.terms.title')}
      description={t('seo.pages.terms.description')}
    >
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="prose prose-lg dark:prose-invert max-w-none">
          {/* 生效日期 */}
          <section className="mb-8">
            <p className="text-sm text-muted-foreground mb-4">
              {t('pages.terms.lastUpdated')}：{new Date().toLocaleDateString(locale)}
            </p>
            <p className="text-muted-foreground leading-relaxed">
              {t('pages.terms.sections.introduction')}
            </p>
          </section>

          {/* 接受条款 */}
          <section className="bg-card border border-border rounded-lg p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">{t('pages.terms.sections.terms')}</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                {t('pages.terms.sections.introduction')}
              </p>
              <p>
                {t('pages.terms.sections.modificationsDesc')}
              </p>
            </div>
          </section>

          {/* 服务描述 */}
          <section className="bg-card border border-border rounded-lg p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">{t('seo.siteDescription')}</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                {t('seo.siteDescription')}：
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>{t('pages.about.sections.featureList.i18n')}</li>
                <li>{t('theme.toggle')}</li>
                <li>{t('pages.about.sections.featureList.responsive')}</li>
                <li>{t('common.settings')}</li>
              </ul>
            </div>
          </section>

          {/* 使用许可 */}
          <section className="bg-card border border-border rounded-lg p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">{t('pages.terms.sections.usage')}</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                {t('pages.terms.sections.usageDesc')}
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>{t('pages.terms.sections.items.followLaws')}</li>
                <li>{t('pages.terms.sections.items.legalUse')}</li>
                <li>{t('pages.terms.sections.items.noHarm')}</li>
                <li>{t('pages.terms.sections.items.respectRights')}</li>
              </ul>
            </div>
          </section>

          {/* 用户责任 */}
          <section className="bg-card border border-border rounded-lg p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">{t('common.settings')}</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                {t('pages.terms.sections.usageDesc')}
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>{t('common.settings')}</li>
                <li>{t('common.settings')}</li>
                <li>{t('common.settings')}</li>
                <li>{t('pages.terms.sections.items.userContent')}</li>
              </ul>
            </div>
          </section>

          {/* 知识产权 */}
          <section className="bg-card border border-border rounded-lg p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">{t('pages.terms.sections.contact')}</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                {t('seo.siteDescription')}：
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>{t('common.settings')}</li>
                <li>{t('common.settings')}</li>
                <li>{t('common.settings')}</li>
                <li>{t('common.settings')}</li>
              </ul>
              <p>
                {t('pages.terms.sections.items.respectRights')}
              </p>
            </div>
          </section>

          {/* 免责声明 */}
          <section className="bg-card border border-border rounded-lg p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">{t('pages.terms.sections.limitations')}</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                {t('pages.terms.sections.items.noWarranty')}：
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>{t('pages.terms.sections.items.serviceAvailability')}</li>
                <li>{t('pages.terms.sections.items.contentAccuracy')}</li>
                <li>{t('common.settings')}</li>
                <li>{t('common.error')}</li>
              </ul>
            </div>
          </section>

          {/* 责任限制 */}
          <section className="bg-card border border-border rounded-lg p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">{t('pages.terms.sections.limitations')}</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                {t('pages.terms.sections.limitationsDesc')}
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>{t('common.error')}</li>
                <li>{t('common.error')}</li>
                <li>{t('common.error')}</li>
                <li>{t('common.error')}</li>
              </ul>
            </div>
          </section>

          {/* 服务终止 */}
          <section className="bg-card border border-border rounded-lg p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">{t('common.settings')}</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                {t('pages.terms.sections.modificationsDesc')}
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>{t('pages.terms.sections.items.followLaws')}</li>
                <li>{t('pages.terms.sections.items.noHarm')}</li>
                <li>{t('common.settings')}</li>
                <li>{t('common.settings')}</li>
              </ul>
            </div>
          </section>

          {/* 争议解决 */}
          <section className="bg-muted/50 rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">{t('pages.terms.sections.contact')}</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                {t('pages.terms.sections.contactDesc')}
              </p>
              <div className="mt-4 space-y-2">
                <p>{t('footer.contact.email')}：legal@example.com</p>
                <p>{t('common.settings')}</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </PageTemplate>
  );
}

// 生成页面元数据
export async function generateMetadata({ params }: TermsPageProps): Promise<Metadata> {
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
    title: t('seo.pages.terms.title'),
    description: t('seo.pages.terms.description'),
    openGraph: {
      title: t('seo.pages.terms.title'),
      description: t('seo.pages.terms.description'),
      type: 'website',
      locale: locale,
    },
    twitter: {
      card: 'summary_large_image',
      title: t('seo.pages.terms.title'),
      description: t('seo.pages.terms.description'),
    },
  };
} 