/**
 * 通用模板配置文件
 * 用于自定义项目基础信息和功能模块
 */

export interface TemplateConfig {
  // 项目基础信息
  project: {
    name: string;
    description: string;
    author?: string;
    version?: string;
    homepage?: string;
  };

  // 功能模块开关
  features: {
    i18n: boolean;           // 国际化
    themes: boolean;         // 主题系统
    seo: boolean;           // SEO优化
    pwa?: boolean;          // PWA功能
    analytics?: boolean;    // 分析统计
  };

  // 国际化配置
  i18n?: {
    defaultLocale: string;
    supportedLocales: string[];
    fallbackLocale: string;
  };

  // 主题配置
  themes?: {
    defaultMode: 'light' | 'dark' | 'system';
    storageKey: string;
  };

  // 部署配置
  deployment?: {
    platform: 'cloudflare' | 'vercel' | 'both';
    domain?: string;
  };
}

// 默认配置
export const defaultConfig: TemplateConfig = {
  project: {
    name: 'Next.js Universal Template',
    description: '基于 Next.js 15+ 的通用模板项目',
    version: '1.0.0',
  },

  features: {
    i18n: true,
    themes: true,
    seo: true,
    pwa: false,
    analytics: false,
  },

  i18n: {
    defaultLocale: 'zh-CN',
    supportedLocales: ['zh-CN', 'en-US', 'ja-JP', 'ko-KR', 'fr-FR'],
    fallbackLocale: 'en-US',
  },

  themes: {
    defaultMode: 'system',
    storageKey: 'app-theme',
  },

  deployment: {
    platform: 'both',
  },
};

// 获取当前项目配置
export function getTemplateConfig(): TemplateConfig {
  // 这里可以从环境变量或配置文件读取
  return defaultConfig;
} 