import { redirect } from 'next/navigation';

export default function RootPage() {
  // 重定向到默认语言页面
  redirect('/zh');
}

import { Metadata } from 'next';

// 根路径SEO元数据
export const metadata: Metadata = {
  metadataBase: new URL('https://nextjs-universal-template.to-tools.com'),
  title: 'Next.js Universal Template - Modern Web Development Starter',
  description: 'A feature-complete Next.js template with internationalization, theme system, performance optimization and modern development tools. Start your project quickly with this production-ready template.',
  keywords: 'nextjs,template,starter,i18n,internationalization,theme system,typescript,tailwind css,web development,react',
  authors: [{ name: 'Universal Template Team' }],
  creator: 'Universal Template Team',
  publisher: 'Universal Template Team',
  openGraph: {
    type: 'website',
    siteName: 'Next.js Universal Template',
    title: 'Next.js Universal Template - Modern Web Development Starter',
    description: 'A feature-complete Next.js template with internationalization, theme system, and modern development tools.',
    url: 'https://nextjs-universal-template.to-tools.com',
    locale: 'en_US',
    images: [
      {
        url: 'https://nextjs-universal-template.to-tools.com/logo-128.svg',
        width: 128,
        height: 128,
        alt: 'Universal Template Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Next.js Universal Template - Modern Web Development Starter',
    description: 'A feature-complete Next.js template with internationalization, theme system, and modern development tools.',
    images: ['https://nextjs-universal-template.to-tools.com/logo-128.svg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://nextjs-universal-template.to-tools.com',
    languages: {
      'zh-CN': 'https://nextjs-universal-template.to-tools.com/zh',
      'en-US': 'https://nextjs-universal-template.to-tools.com/en',
      'ja-JP': 'https://nextjs-universal-template.to-tools.com/ja',
      'ko-KR': 'https://nextjs-universal-template.to-tools.com/ko',
      'fr-FR': 'https://nextjs-universal-template.to-tools.com/fr',
      'x-default': 'https://nextjs-universal-template.to-tools.com',
    },
  },
  icons: {
    icon: '/logo-32.svg',
    apple: '/logo-128.svg',
  },
};
