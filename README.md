# Next.js 通用模板

🚀 一个功能完整的 Next.js 15+ 通用模板，包含国际化、主题系统、性能优化等现代化特性，帮助开发者快速启动新项目。

[![Next.js](https://img.shields.io/badge/Next.js-15.3.2-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4-38bdf8)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## ✨ 功能特性

### 🎯 核心功能
- **🚀 Next.js 15.3.2** - 使用最新的 App Router 和 Turbopack
- **⚡ TypeScript 5** - 完整的类型安全和开发体验
- **🎨 Tailwind CSS 4** - 现代化的原子样式框架
- **📱 响应式设计** - 移动端优先的响应式布局
- **🔍 SEO 优化** - 完整的元数据管理和搜索引擎优化

### 🌍 国际化系统
- **5种语言支持**：简体中文 🇨🇳、English 🇺🇸、日本語 🇯🇵、한국어 🇰🇷、Français 🇫🇷
- **SEO友好的URL**：`/zh/`, `/en/`, `/ja/`, `/ko/`, `/fr/`
- **智能语言检测**：自动检测用户浏览器语言偏好
- **类型安全的翻译**：完整的 TypeScript 支持
- **服务端/客户端兼容**：SSR 和 CSR 完全支持

### 🎭 主题系统
- **三种主题模式**：浅色、深色、跟随系统
- **动态主题切换**：基于 CSS 变量的实时切换
- **持久化存储**：用户偏好自动保存
- **SSR兼容**：避免主题切换闪烁

### 🚀 部署支持
- **Cloudflare Pages** - 边缘计算，全球加速
- **Vercel** - 原生 Next.js 部署平台
- **一键部署** - 简化的部署流程

## 📁 项目结构

```
nextjs-universal-template/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── [lang]/            # 国际化路由
│   │   │   ├── page.tsx       # 主页
│   │   │   ├── about/         # 关于页
│   │   │   ├── privacy/       # 隐私政策
│   │   │   └── terms/         # 服务条款
│   │   ├── globals.css        # 全局样式
│   │   ├── layout.tsx         # 根布局
│   │   ├── page.tsx          # 根页面重定向
│   │   ├── robots.ts         # SEO robots
│   │   └── sitemap.ts        # 站点地图
│   ├── components/            # 可复用组件
│   │   ├── layout/           # 布局组件 (Header, Footer)
│   │   ├── i18n/             # 国际化组件
│   │   └── theme/            # 主题切换组件
│   └── lib/                  # 核心模块
│       ├── i18n/            # 国际化系统
│       └── themes/          # 主题系统
├── public/                   # 静态资源
├── middleware.ts            # 路由中间件
├── next.config.ts          # Next.js 配置
├── tailwind.config.ts      # Tailwind 配置
├── wrangler.jsonc          # Cloudflare 配置
└── package.json            # 项目配置
```

## 🚀 快速开始

### 1. 创建项目

```bash
# 克隆模板
git clone https://github.com/to-tools/nextjs-universal-template.git my-project
cd my-project

# 安装依赖
npm install
```

### 2. 环境配置

```bash
# 复制环境变量文件 (如果需要)
cp .env.example .env.local
```

### 3. 启动开发服务器

```bash
npm run dev
```

🎉 访问 [http://localhost:3001](http://localhost:3001) 开始开发！

## 📚 使用指南

### 🌍 国际化使用

#### 服务端组件
```tsx
import { loadTranslationsForSSR } from '@/lib/i18n/i18n-utils';
import { mapPathToLocale } from '@/lib/i18n/url-utils';

export default async function Page({ params: { lang } }) {
  const locale = mapPathToLocale(lang);
  const translations = await loadTranslationsForSSR(locale);
  
  const t = (key: string) => {
    // 简单的翻译函数实现
    // 在实际使用中建议使用更完善的翻译函数
  };

  return <h1>{t('pages.home.title')}</h1>;
}
```

#### 客户端组件
```tsx
'use client';
import { useI18n, useTranslation } from '@/lib/i18n';

function MyComponent() {
  const { locale, setLocale } = useI18n();
  const { t } = useTranslation();
  
  return (
    <div>
      <h1>{t('common.welcome')}</h1>
      <button onClick={() => setLocale('en-US', true)}>
        Switch to English
      </button>
    </div>
  );
}
```

### 🎨 主题系统使用

#### 主题Provider设置
```tsx
import { ThemeProvider } from '@/lib/themes';

export default function RootLayout({ children }) {
  return (
    <ThemeProvider defaultMode="system" storageKey="app-theme">
      {children}
    </ThemeProvider>
  );
}
```

#### 主题切换
```tsx
'use client';
import { useTheme } from '@/lib/themes';

function ThemeToggle() {
  const { theme, mode, setTheme, toggleTheme } = useTheme();
  
  return (
    <button 
      onClick={toggleTheme}
      className="bg-background border border-border rounded-lg p-2"
    >
      {theme === 'dark' ? '🌙' : '☀️'}
    </button>
  );
}
```

### 📄 添加新页面

1. **创建页面文件**：
```bash
mkdir src/app/[lang]/your-page
touch src/app/[lang]/your-page/page.tsx
```

2. **添加翻译内容**：
```typescript
// src/lib/i18n/locales/zh-CN.ts
export const zhCN = {
  pages: {
    yourPage: {
      title: '您的页面标题',
      description: '页面描述'
    }
  }
};
```

3. **实现页面组件**：
```tsx
// src/app/[lang]/your-page/page.tsx
export default async function YourPage({ params: { lang } }) {
  // 页面实现
}
```

## 🛠️ 开发脚本

```bash
# 开发
npm run dev              # 启动开发服务器 (Turbopack)

# 构建
npm run build           # 构建生产版本
npm run start           # 启动生产服务器

# 部署
npm run preview         # Cloudflare Pages 本地预览
npm run deploy          # 部署到 Cloudflare Pages

# 工具
npm run lint            # 代码检查
npm run cf-typegen      # 生成 Cloudflare 类型定义
```

## 🌐 部署

### Cloudflare Pages

```bash
# 安装 Wrangler CLI
npm install -g wrangler

# 登录 Cloudflare
wrangler login

# 部署
npm run deploy
```

### Vercel

```bash
# 安装 Vercel CLI
npm install -g vercel

# 部署
vercel --prod
```

## ⚙️ 自定义配置

### 添加新语言

1. **更新配置文件**：
```typescript
// src/lib/i18n/i18n-config.ts
export const SUPPORTED_LOCALES = ['zh-CN', 'en-US', 'ja-JP', 'ko-KR', 'fr-FR', 'de-DE'] as const;
```

2. **创建翻译文件**：
```typescript
// src/lib/i18n/locales/de-DE.ts
export const deDE: TranslationFile = {
  // 德语翻译内容
};
```

3. **更新URL映射**：
```typescript
// src/lib/i18n/i18n-config.ts
export const PATH_LANGUAGE_MAP: Record<UrlPath, Locale> = {
  'de': 'de-DE',
  // ... 其他语言
};
```

### 修改主题颜色

编辑 `src/app/globals.css` 中的 CSS 变量：

```css
:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  --primary: 221.2 83.2% 53.3%;
  /* 更多颜色变量... */
}

.dark {
  --background: 222.2 84% 4.9%;
  --foreground: 210 40% 98%;
  /* 更多深色主题变量... */
}
```

## 📋 项目检查清单

### 🎯 项目初始化
- [ ] 修改 `package.json` 中的项目名称和描述
- [ ] 更新所有 MD 文件中的项目信息
- [ ] 配置环境变量和部署设置
- [ ] 修改网站元数据 (title, description, keywords)

### 🎨 品牌定制
- [ ] 替换 Logo 和 Favicon (`/public/logo-*.svg`)
- [ ] 更新网站标题和描述的翻译内容
- [ ] 自定义主题颜色和样式
- [ ] 修改 Footer 中的品牌信息

### 🚀 功能开发
- [ ] 添加项目特定的页面和路由
- [ ] 实现业务逻辑和组件
- [ ] 添加相应的翻译内容
- [ ] 测试所有语言版本的功能

### 🌐 部署准备
- [ ] 配置生产环境域名
- [ ] 设置环境变量和秘钥
- [ ] 验证所有页面正常访问
- [ ] 测试主题切换和语言切换

## 🤝 贡献

欢迎提交 Issues 和 Pull Requests 来改进这个模板！

## 📄 许可证

MIT License - 详见 [LICENSE](LICENSE) 文件

---

⭐ 如果这个模板对你有帮助，请给个 Star 支持一下！

🔗 [在线演示](https://nextjs-universal-template.to-tools.com) | [问题反馈](https://github.com/to-tools/nextjs-universal-template/issues) | [功能建议](https://github.com/to-tools/nextjs-universal-template/discussions)
