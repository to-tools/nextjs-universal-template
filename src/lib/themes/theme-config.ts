export type ThemeMode = 'light' | 'dark' | 'system';

export interface ThemeColors {
  // 基础颜色
  background: string;
  foreground: string;
  card: string;
  'card-foreground': string;
  
  // 主要颜色
  primary: string;
  'primary-foreground': string;
  secondary: string;
  'secondary-foreground': string;
  
  // 状态颜色
  destructive: string;
  'destructive-foreground': string;
  success: string;
  'success-foreground': string;
  warning: string;
  'warning-foreground': string;
  
  // UI元素颜色
  muted: string;
  'muted-foreground': string;
  accent: string;
  'accent-foreground': string;
  border: string;
  input: string;
  ring: string;
}

export const lightTheme: ThemeColors = {
  background: '#ffffff',
  foreground: '#0a0a0a',
  card: '#ffffff',
  'card-foreground': '#0a0a0a',
  
  primary: '#18181b',
  'primary-foreground': '#fafafa',
  secondary: '#f4f4f5',
  'secondary-foreground': '#18181b',
  
  destructive: '#ef4444',
  'destructive-foreground': '#fafafa',
  success: '#22c55e',
  'success-foreground': '#fafafa',
  warning: '#f59e0b',
  'warning-foreground': '#fafafa',
  
  muted: '#f4f4f5',
  'muted-foreground': '#71717a',
  accent: '#f4f4f5',
  'accent-foreground': '#18181b',
  border: '#e4e4e7',
  input: '#e4e4e7',
  ring: '#18181b',
};

export const darkTheme: ThemeColors = {
  background: '#111827',
  foreground: '#f9fafb',
  card: '#1f2937',
  'card-foreground': '#f9fafb',
  
  primary: '#3b82f6',
  'primary-foreground': '#ffffff',
  secondary: '#374151',
  'secondary-foreground': '#f9fafb',
  
  destructive: '#ef4444',
  'destructive-foreground': '#ffffff',
  success: '#10b981',
  'success-foreground': '#ffffff',
  warning: '#f59e0b',
  'warning-foreground': '#ffffff',
  
  muted: '#374151',
  'muted-foreground': '#9ca3af',
  accent: '#4b5563',
  'accent-foreground': '#f9fafb',
  border: '#4b5563',
  input: '#374151',
  ring: '#3b82f6',
};

export const themes = {
  light: lightTheme,
  dark: darkTheme,
} as const;

export type ThemeName = keyof typeof themes; 