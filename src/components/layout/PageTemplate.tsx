import React from 'react';
import { Metadata } from 'next';

interface PageTemplateProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  className?: string;
  showHeader?: boolean;
}

/**
 * 通用页面模板组件
 * 提供一致的页面内容区域布局
 */
export default function PageTemplate({ 
  children, 
  title, 
  description, 
  className = '',
  showHeader = true
}: PageTemplateProps) {
  return (
    <div className={`container mx-auto px-4 py-8 ${className}`}>
      {showHeader && title && (
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            {title}
          </h1>
          {description && (
            <p className="text-muted-foreground text-xl">
              {description}
            </p>
          )}
        </div>
      )}
      
      <div className="max-w-6xl mx-auto">
        {children}
      </div>
    </div>
  );
}

/**
 * 生成通用页面元数据的辅助函数
 */
export function generatePageMetadata(
  title: string,
  description: string,
  siteName: string = 'Universal Template'
): Metadata {
  return {
    title: `${title} | ${siteName}`,
    description,
    openGraph: {
      title: `${title} | ${siteName}`,
      description,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | ${siteName}`,
      description,
    },
  };
} 