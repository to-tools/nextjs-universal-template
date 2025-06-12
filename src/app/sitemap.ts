import { MetadataRoute } from 'next';

const baseUrl = 'https://nextjs-universal-template.to-tools.com';
const languages = ['zh', 'en', 'ja', 'ko', 'fr'];
const pages = ['', 'about', 'privacy', 'terms'];

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: MetadataRoute.Sitemap = [];

  // 为每种语言和每个页面生成URL
  languages.forEach(lang => {
    pages.forEach(page => {
      const url = page ? `${baseUrl}/${lang}/${page}` : `${baseUrl}/${lang}`;
      
      routes.push({
        url,
        lastModified: new Date(),
        changeFrequency: page === '' ? 'daily' : 'weekly',
        priority: page === '' ? 1 : 0.8,
      });
    });
  });

  // 添加根路径重定向
  routes.push({
    url: baseUrl,
    lastModified: new Date(),
    changeFrequency: 'daily',
    priority: 1,
  });

  return routes;
} 