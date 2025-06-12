import React from 'react';
import Image from 'next/image';

interface LogoProps {
  size?: 'small' | 'medium' | 'large' | 'icon';
  className?: string;
  showText?: boolean;
}

const sizeMap = {
  icon: { width: 32, height: 32, src: '/logo-32.svg' },
  small: { width: 48, height: 48, src: '/logo-icon.svg' },
  medium: { width: 64, height: 64, src: '/logo.svg' },
  large: { width: 128, height: 128, src: '/logo-128.svg' },
};

export default function Logo({ 
  size = 'medium', 
  className = '', 
  showText = false
}: LogoProps) {
  const logoConfig = sizeMap[size];
  
  const logoElement = (
    <Image
      src={logoConfig.src}
      alt="Next.js Universal Template Logo"
      width={logoConfig.width}
      height={logoConfig.height}
      className={`logo-${size} ${className}`}
      priority={size === 'medium' || size === 'large'}
    />
  );

  if (showText) {
    return (
      <div className={`flex items-center space-x-3 ${className}`}>
        {logoElement}
        {size !== 'icon' && (
          <div className="flex flex-col">
            <span className={`font-bold ${
              size === 'large' ? 'text-2xl' : 
              size === 'medium' ? 'text-xl' : 'text-lg'
            } bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent`}>
              Next.js Template
            </span>
            <span className={`${
              size === 'large' ? 'text-sm' : 'text-xs'
            } text-gray-500 dark:text-gray-400`}>
              Universal template with i18n & themes
            </span>
          </div>
        )}
      </div>
    );
  }

  return logoElement;
}

// 导出不同尺寸的快捷组件
export const LogoIcon = (props: Omit<LogoProps, 'size'>) => <Logo size="icon" {...props} />;
export const LogoSmall = (props: Omit<LogoProps, 'size'>) => <Logo size="small" {...props} />;
export const LogoMedium = (props: Omit<LogoProps, 'size'>) => <Logo size="medium" {...props} />;
export const LogoLarge = (props: Omit<LogoProps, 'size'>) => <Logo size="large" {...props} />;
export const LogoWithText = (props: Omit<LogoProps, 'showText'>) => <Logo showText={true} {...props} />; 