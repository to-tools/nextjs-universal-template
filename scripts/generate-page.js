#!/usr/bin/env node

/**
 * 页面生成器脚本
 * 用于快速创建新的页面和对应的翻译
 * 
 * 使用方法:
 * node scripts/generate-page.js <page-name>
 * 
 * 例如:
 * node scripts/generate-page.js products
 */

const fs = require('fs');
const path = require('path');

// 获取命令行参数
const pageName = process.argv[2];

if (!pageName) {
  console.error('错误: 请提供页面名称');
  console.log('使用方法: node scripts/generate-page.js <page-name>');
  process.exit(1);
}

// 页面模板
const pageTemplate = `import { Metadata } from 'next';
import { loadTranslationsForSSR } from '@/lib/i18n/i18n-utils';
import { mapPathToLocale } from '@/lib/i18n/url-utils';
import PageTemplate from '@/components/layout/PageTemplate';

interface ${capitalize(pageName)}PageProps {
  params: { lang: string };
}

export async function generateMetadata({
  params: { lang }
}: ${capitalize(pageName)}PageProps): Promise<Metadata> {
  const locale = mapPathToLocale(lang);
  const translations = await loadTranslationsForSSR(locale);
  
  return {
    title: translations.seo.pages.${pageName}.title,
    description: translations.seo.pages.${pageName}.description,
  };
}

export default async function ${capitalize(pageName)}Page({ params: { lang } }: ${capitalize(pageName)}PageProps) {
  const locale = mapPathToLocale(lang);
  const translations = await loadTranslationsForSSR(locale);

  return (
    <PageTemplate
      title={translations.pages.${pageName}.title}
      description={translations.pages.${pageName}.description}
    >
      <div className="max-w-4xl mx-auto">
        <div className="prose prose-lg dark:prose-invert">
          <p>{translations.pages.${pageName}.content}</p>
        </div>
      </div>
    </PageTemplate>
  );
}
`;

// 翻译键模板
const translationKeys = {
  seo: {
    pages: {
      [pageName]: {
        title: `${capitalize(pageName)} Page`,
        description: `Description for ${pageName} page`
      }
    }
  },
  pages: {
    [pageName]: {
      title: `${capitalize(pageName)}`,
      description: `Welcome to ${pageName} page`,
      content: `This is the ${pageName} page content.`
    }
  }
};

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function createPageDirectory() {
  const pagePath = path.join(process.cwd(), 'src', 'app', '[lang]', pageName);
  
  if (fs.existsSync(pagePath)) {
    console.error(`错误: 页面目录已存在: ${pagePath}`);
    return false;
  }

  fs.mkdirSync(pagePath, { recursive: true });
  
  // 创建页面文件
  const pageFilePath = path.join(pagePath, 'page.tsx');
  fs.writeFileSync(pageFilePath, pageTemplate);
  
  console.log(`✅ 创建页面: ${pageFilePath}`);
  return true;
}

function updateTranslationFiles() {
  const localesPath = path.join(process.cwd(), 'src', 'lib', 'i18n', 'locales');
  const localeFiles = fs.readdirSync(localesPath).filter(file => file.endsWith('.ts'));
  
  localeFiles.forEach(file => {
    const filePath = path.join(localesPath, file);
    const content = fs.readFileSync(filePath, 'utf8');
    
    // 这里应该智能更新翻译文件，实际项目中可以使用AST解析
    console.log(`⚠️  请手动更新翻译文件: ${filePath}`);
    console.log('添加以下翻译键:');
    console.log(JSON.stringify(translationKeys, null, 2));
  });
}

function main() {
  console.log(`🚀 正在生成页面: ${pageName}`);
  
  if (createPageDirectory()) {
    updateTranslationFiles();
    
    console.log(`\n✅ 页面生成完成!`);
    console.log(`📁 页面路径: src/app/[lang]/${pageName}/page.tsx`);
    console.log(`🔗 URL路径: /zh/${pageName}, /en/${pageName}, etc.`);
    console.log('\n📝 下一步:');
    console.log('1. 更新所有语言的翻译文件');
    console.log('2. 在导航菜单中添加链接');
    console.log('3. 自定义页面内容和样式');
  }
}

main(); 