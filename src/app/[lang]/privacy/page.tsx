import { notFound } from 'next/navigation';
import { PATH_LANGUAGE_MAP, type UrlPath } from '@/lib/i18n/i18n-config';
import { loadTranslationsForSSR } from '@/lib/i18n/i18n-utils';
import PageTemplate from '@/components/layout/PageTemplate';
import { Metadata } from 'next';

// 配置 Edge Runtime 用于 Cloudflare Pages 部署
export const runtime = 'edge';

interface PrivacyPageProps {
  params: Promise<{ lang: string }>;
}

export default async function PrivacyPage({ params }: PrivacyPageProps) {
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
      title={t('pages.privacy.title')}
      description={t('seo.pages.privacy.description')}
    >
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="prose prose-lg dark:prose-invert max-w-none">
          {/* 生效日期 */}
          <section className="mb-8">
            <p className="text-sm text-muted-foreground mb-4">
              {t('pages.privacy.lastUpdated')}：{new Date().toLocaleDateString(locale)}
            </p>
            <p className="text-muted-foreground leading-relaxed">
              {t('pages.privacy.sections.introduction')}
            </p>
          </section>

          {/* 信息收集 */}
          <section className="bg-card border border-border rounded-lg p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">{t('pages.privacy.sections.dataCollection')}</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                {t('pages.privacy.sections.collectionDesc')}
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>{t('pages.privacy.sections.items.technicalInfo')}</li>
                <li>{t('pages.privacy.sections.items.providedInfo')}</li>
                <li>{t('pages.privacy.sections.items.cookieInfo')}</li>
              </ul>
            </div>
          </section>

          {/* 信息使用 */}
          <section className="bg-card border border-border rounded-lg p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">{t('pages.privacy.sections.dataUsage')}</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                {t('pages.privacy.sections.usageDesc')}
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>{t('pages.privacy.sections.items.improveService')}</li>
                <li>{t('pages.privacy.sections.items.analytics')}</li>
                <li>{t('pages.privacy.sections.items.notifications')}</li>
                <li>{t('pages.privacy.sections.items.security')}</li>
              </ul>
            </div>
          </section>

          {/* 信息保护 */}
          <section className="bg-card border border-border rounded-lg p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">{t('pages.privacy.sections.dataSecurity')}</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                {t('pages.privacy.sections.securityDesc')}
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>{t('pages.privacy.sections.items.httpsEncryption')}</li>
                <li>{t('pages.privacy.sections.items.securityReview')}</li>
                <li>{t('pages.privacy.sections.items.accessControl')}</li>
                <li>{t('pages.privacy.sections.items.dataBackup')}</li>
              </ul>
            </div>
          </section>

          {/* Cookie使用 */}
          <section className="bg-card border border-border rounded-lg p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">{t('pages.privacy.sections.cookies')}</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                {t('pages.privacy.sections.cookiesDesc')}
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>{t('pages.privacy.sections.items.preferences')}</li>
                <li>{t('pages.privacy.sections.items.traffic')}</li>
                <li>{t('pages.privacy.sections.items.personalization')}</li>
              </ul>
              <p>
                {t('common.settings')}.
              </p>
            </div>
          </section>

          {/* 第三方服务 */}
          <section className="bg-card border border-border rounded-lg p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">{t('pages.privacy.sections.thirdParty')}</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                {t('pages.privacy.sections.thirdPartyDesc')}
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>{t('pages.privacy.sections.items.hosting')}</li>
                <li>{t('pages.privacy.sections.items.cdn')}</li>
                <li>{t('pages.privacy.sections.items.analyticsTools')}</li>
              </ul>
            </div>
          </section>

          {/* 联系我们 */}
          <section className="bg-muted/50 rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">{t('pages.privacy.sections.contact')}</h2>
            <p className="text-muted-foreground">
              {t('pages.privacy.sections.contactDesc')}
            </p>
            <div className="mt-4 space-y-2 text-muted-foreground">
              <p>{t('footer.contact.email')}：privacy@example.com</p>
              <p>{t('footer.contact.website')}</p>
            </div>
          </section>
        </div>
      </div>
    </PageTemplate>
  );
}

// 生成页面元数据
export async function generateMetadata({ params }: PrivacyPageProps): Promise<Metadata> {
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
    title: t('seo.pages.privacy.title'),
    description: t('seo.pages.privacy.description'),
    openGraph: {
      title: t('seo.pages.privacy.title'),
      description: t('seo.pages.privacy.description'),
      type: 'website',
      locale: locale,
    },
    twitter: {
      card: 'summary_large_image',
      title: t('seo.pages.privacy.title'),
      description: t('seo.pages.privacy.description'),
    },
  };
} 