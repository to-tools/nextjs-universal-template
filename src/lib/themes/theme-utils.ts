import { ThemeColors, themes, ThemeName, ThemeMode } from './theme-config';

/**
 * 获取主题颜色值
 */
export function getThemeColor(color: keyof ThemeColors, theme: ThemeName = 'light'): string {
  return themes[theme][color];
}

/**
 * 检测系统主题偏好
 */
export function getSystemTheme(): ThemeName {
  if (typeof window === 'undefined') return 'light';
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

/**
 * 将主题应用到DOM
 */
export function applyTheme(theme: ThemeName) {
  if (typeof document === 'undefined') return;

  const root = document.documentElement;
  const themeColors = themes[theme];

  // 移除旧的主题类
  root.classList.remove('light', 'dark');
  // 添加新的主题类
  root.classList.add(theme);

  // 设置CSS变量
  Object.entries(themeColors).forEach(([key, value]) => {
    root.style.setProperty(`--${key}`, value);
  });
}

/**
 * 创建CSS变量对象
 */
export function createCSSVariables(theme: ThemeName): Record<string, string> {
  const themeColors = themes[theme];
  const variables: Record<string, string> = {};

  Object.entries(themeColors).forEach(([key, value]) => {
    variables[`--${key}`] = value;
  });

  return variables;
}

/**
 * 生成Tailwind配置的颜色对象
 */
export function generateTailwindColors(): Record<string, string> {
  const colors: Record<string, string> = {};

  Object.keys(themes.light).forEach((key) => {
    colors[key] = `var(--${key})`;
  });

  return colors;
}

export interface ThemePreferences {
  theme: ThemeName;
  mode: ThemeMode;
}

/**
 * 获取存储的主题偏好
 */
export function getStoredThemePreferences(storageKey = 'theme-preferences'): ThemePreferences {
  const defaultPrefs: ThemePreferences = { theme: 'light', mode: 'system' };
  
  if (typeof window === 'undefined') {
    return defaultPrefs;
  }
  
  try {
    const stored = localStorage.getItem(storageKey);
    if (stored) {
      const parsed = JSON.parse(stored);
      return {
        theme: parsed.theme || defaultPrefs.theme,
        mode: parsed.mode || defaultPrefs.mode,
      };
    }
  } catch (error) {
    console.warn('Failed to parse stored theme preferences:', error);
  }
  
  return defaultPrefs;
}

/**
 * 根据模式和偏好获取当前应该使用的主题
 */
export function getCurrentTheme(preferences: ThemePreferences): ThemeName {
  if (preferences.mode === 'system') {
    if (typeof window !== 'undefined') {
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return 'light';
  }
  return preferences.theme;
}

/**
 * 立即应用主题到DOM（用于防止闪烁）
 */
export function applyThemeToDOM(theme: ThemeName): void {
  if (typeof document === 'undefined') return;
  
  const html = document.documentElement;
  const body = document.body;
  
  // 移除所有主题类
  html.classList.remove('light', 'dark');
  body?.classList.remove('light', 'dark');
  
  // 添加新主题类
  html.classList.add(theme);
  body?.classList.add(theme);
  
  // 设置属性
  html.setAttribute('data-theme', theme);
  html.style.colorScheme = theme;
  
  console.log('Theme applied to DOM:', theme);
}

/**
 * 生成防闪烁的内联脚本代码
 */
export function generateThemeScript(storageKey = 'theme-preferences'): string {
  return `
    (function() {
      try {
        let targetTheme = 'light';
        
        const stored = localStorage.getItem('${storageKey}');
        if (stored) {
          const { theme, mode } = JSON.parse(stored);
          if (mode === 'system') {
            targetTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
          } else {
            targetTheme = theme || 'light';
          }
        } else {
          targetTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        }
        
        const html = document.documentElement;
        html.classList.remove('light', 'dark');
        html.classList.add(targetTheme);
        html.setAttribute('data-theme', targetTheme);
        html.style.colorScheme = targetTheme;
        
        if (document.body) {
          document.body.classList.remove('light', 'dark');
          document.body.classList.add(targetTheme);
        }
        
        console.log('Theme initialized:', targetTheme);
      } catch (e) {
        console.warn('Theme initialization error:', e);
        document.documentElement.classList.add('light');
        document.documentElement.setAttribute('data-theme', 'light');
        document.documentElement.style.colorScheme = 'light';
      }
    })();
  `;
} 