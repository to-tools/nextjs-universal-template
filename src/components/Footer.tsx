import React from 'react';
import { generateLocalizedUrl } from '@/lib/i18n/url-utils';
import { LogoMedium } from './Logo';
import Link from 'next/link';
import type { SupportedLocale } from '@/lib/i18n/i18n-config';

interface FooterProps {
  className?: string;
  translations: Record<string, unknown>;
  locale: SupportedLocale;
}

export default function Footer({ className = '', translations, locale }: FooterProps) {
  const t = (key: string): string => {
    const keys = key.split('.');
    let value: unknown = translations;
    for (const k of keys) {
      value = (value as Record<string, unknown>)?.[k];
    }
    return (value as string) || key;
  };

  // 生成本地化路径的辅助函数
  const getLocalizedPath = (path: string) => generateLocalizedUrl(path, locale);

  const features = [
    { icon: '🌍', title: t('footer.features.i18n.title'), desc: t('footer.features.i18n.desc') },
    { icon: '🎨', title: t('footer.features.theme.title'), desc: t('footer.features.theme.desc') },
    { icon: '⚡', title: t('footer.features.performance.title'), desc: t('footer.features.performance.desc') },
    { icon: '🚀', title: t('footer.features.deployment.title'), desc: t('footer.features.deployment.desc') },
    { icon: '🔧', title: t('footer.features.customizable.title'), desc: t('footer.features.customizable.desc') },
    { icon: '📱', title: t('footer.features.responsive.title'), desc: t('footer.features.responsive.desc') },
  ];

  return (
    <footer className={`bg-white dark:bg-gray-800 shadow-lg border-t border-gray-200 dark:border-gray-700 transition-all duration-200 backdrop-blur-sm ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* 功能特色展示 */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              ✨ {t('footer.features.title')}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 transition-colors duration-200">
              {t('footer.developmentDesc')}
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group text-center p-4 rounded-xl bg-white dark:bg-gray-800 shadow-sm hover:shadow-lg transition-all duration-200 hover:transform hover:-translate-y-1 border border-gray-100 dark:border-gray-700"
              >
                <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-200">{feature.icon}</div>
                <h4 className="font-semibold text-gray-900 dark:text-white text-sm mb-1 transition-colors duration-200">
                  {feature.title}
                </h4>
                <p className="text-xs text-gray-600 dark:text-gray-300 transition-colors duration-200">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 分隔线 */}
        <div className="border-t border-gray-200 dark:border-gray-700 pt-8 transition-colors duration-200">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* 产品介绍 */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <LogoMedium className="flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white transition-colors duration-200">
                    {t('seo.siteName')}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300 transition-colors duration-200">
                    {t('seo.siteDescription')}
                  </p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed transition-colors duration-200 mb-4">
                {t('footer.description')}
              </p>
              
              {/* 联系信息 */}
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-300">
                  <span>📧</span>
                  <span>{t('footer.contact.email')}</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-300">
                  <span>🌐</span>
                  <span>{t('footer.contact.website')}</span>
                </div>
              </div>
            </div>

            {/* 快速链接 */}
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4 transition-colors duration-200">
                🔗 {t('footer.quickLinks.title')}
              </h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link 
                    href={getLocalizedPath('/')}
                    className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                  >
                    {t('footer.quickLinks.links.home')}
                  </Link>
                </li>
                <li>
                  <Link 
                    href={getLocalizedPath('/about')}
                    className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                  >
                    {t('footer.quickLinks.links.about')}
                  </Link>
                </li>
                <li>
                  <Link 
                    href={getLocalizedPath('/privacy')}
                    className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                  >
                    {t('footer.quickLinks.links.privacy')}
                  </Link>
                </li>
                <li>
                  <Link 
                    href={getLocalizedPath('/terms')}
                    className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                  >
                    {t('footer.quickLinks.links.terms')}
                  </Link>
                </li>
              </ul>
            </div>

            {/* 技术特性 */}
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4 transition-colors duration-200">
                🚀 {t('footer.techFeatures.title')}
              </h4>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                <li className="flex items-center space-x-2 transition-colors duration-200">
                  <span className="w-1.5 h-1.5 bg-blue-500 dark:bg-blue-400 rounded-full transition-colors duration-200"></span>
                  <span>{t('footer.techFeatures.responsive')}</span>
                </li>
                <li className="flex items-center space-x-2 transition-colors duration-200">
                  <span className="w-1.5 h-1.5 bg-green-500 dark:bg-green-400 rounded-full transition-colors duration-200"></span>
                  <span>{t('footer.techFeatures.typescript')}</span>
                </li>
                <li className="flex items-center space-x-2 transition-colors duration-200">
                  <span className="w-1.5 h-1.5 bg-purple-500 dark:bg-purple-400 rounded-full transition-colors duration-200"></span>
                  <span>{t('footer.techFeatures.nextjs')}</span>
                </li>
                <li className="flex items-center space-x-2 transition-colors duration-200">
                  <span className="w-1.5 h-1.5 bg-yellow-500 dark:bg-yellow-400 rounded-full transition-colors duration-200"></span>
                  <span>{t('footer.techFeatures.tailwind')}</span>
                </li>
                <li className="flex items-center space-x-2 transition-colors duration-200">
                  <span className="w-1.5 h-1.5 bg-red-500 dark:bg-red-400 rounded-full transition-colors duration-200"></span>
                  <span>{t('footer.techFeatures.multiPlatform')}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* 版权信息 */}
        <div className="border-t border-gray-200 dark:border-gray-700 pt-6 mt-8 transition-colors duration-200">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-sm text-gray-600 dark:text-gray-300 transition-colors duration-200">
                {t('footer.copyright')}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400 transition-colors duration-200 mt-1">
                {t('footer.madeWith')} • {t('footer.poweredBy')}
              </p>
            </div>
            
            <div className="flex items-center space-x-6">
              <Link 
                href={getLocalizedPath('/privacy')}
                className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors duration-200"
              >
                {t('footer.legal.privacy')}
              </Link>
              <Link 
                href={getLocalizedPath('/terms')}
                className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors duration-200"
              >
                {t('footer.legal.terms')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 