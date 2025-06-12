import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { generateThemeScript } from '@/lib/themes/theme-utils';
import { ThemeProvider } from '@/lib/themes/theme-context';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://nextjs-universal-template.com'),
  title: {
    template: '%s | Universal Template',
    default: 'Universal Template - Next.js Starter',
  },
  description: 'A universal Next.js template with i18n, theme system, and modern development tools',
  keywords: 'nextjs,template,typescript,tailwindcss,i18n,theme,universal',
  authors: [{ name: 'Universal Template Team' }],
  creator: 'Universal Template Team',
  publisher: 'Universal Template Team',
  icons: {
    icon: [
      { url: '/logo-32.svg', sizes: '32x32', type: 'image/svg+xml' },
      { url: '/logo-128.svg', sizes: '128x128', type: 'image/svg+xml' },
    ],
    apple: '/logo-128.svg',
    shortcut: '/logo-32.svg',
  },
  openGraph: {
    type: 'website',
    siteName: 'Universal Template',
    title: 'Universal Template - Next.js Starter',
    description: 'A universal Next.js template with i18n, theme system, and modern development tools',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Universal Template - Next.js Starter',
    description: 'A universal Next.js template with i18n, theme system, and modern development tools',
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* 主题初始化脚本 - 防止闪烁 */}
        <script dangerouslySetInnerHTML={{ __html: generateThemeScript() }} />
      </head>
      <body className={inter.className} suppressHydrationWarning>
        <ThemeProvider defaultMode="system" defaultTheme="light">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
