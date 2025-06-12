/**
 * 通用翻译模板
 * 包含所有项目都需要的基础翻译键
 */

export interface TranslationTemplate {
  // SEO 和元数据
  seo: {
    siteName: string;
    siteDescription: string;
    pages: {
      home: {
        title: string;
        description: string;
      };
      about: {
        title: string;
        description: string;
      };
      privacy: {
        title: string;
        description: string;
      };
      terms: {
        title: string;
        description: string;
      };
    };
  };

  // 通用UI文本
  common: {
    loading: string;
    error: string;
    success: string;
    warning: string;
    info: string;
    confirm: string;
    cancel: string;
    save: string;
    edit: string;
    delete: string;
    submit: string;
    reset: string;
    search: string;
    filter: string;
    sort: string;
    close: string;
    open: string;
    next: string;
    previous: string;
    home: string;
    back: string;
    language: string;
    theme: string;
    settings: string;
  };

  // 导航菜单
  navigation: {
    home: string;
    about: string;
    contact: string;
    privacy: string;
    terms: string;
  };

  // 主题系统
  theme: {
    light: string;
    dark: string;
    system: string;
    toggle: string;
  };

  // 语言切换
  language: {
    current: string;
    select: string;
    languages: {
      'zh-CN': string;
      'en-US': string;
      'ja-JP': string;
      'ko-KR': string;
      'fr-FR': string;
    };
  };

  // Footer内容
  footer: {
    copyright: string;
    madeWith: string;
    poweredBy: string;
    quickLinks: {
      title: string;
      links: {
        home: string;
        about: string;
        privacy: string;
        terms: string;
      };
    };
    contact: {
      title: string;
      email: string;
      website: string;
    };
  };

  // 错误页面
  errors: {
    notFound: {
      title: string;
      description: string;
      backHome: string;
    };
    serverError: {
      title: string;
      description: string;
      retry: string;
    };
  };

  // 基础页面内容
  pages: {
    home: {
      title: string;
      subtitle: string;
      description: string;
    };
    about: {
      title: string;
      description: string;
      content: string;
    };
    privacy: {
      title: string;
      lastUpdated: string;
      content: {
        introduction: string;
        dataCollection: string;
        dataUsage: string;
        dataSecurity: string;
        contact: string;
      };
    };
    terms: {
      title: string;
      lastUpdated: string;
      content: {
        introduction: string;
        usage: string;
        limitations: string;
        changes: string;
        contact: string;
      };
    };
  };
}

// 中文模板
export const zhCNTemplate: TranslationTemplate = {
  seo: {
    siteName: '通用模板项目',
    siteDescription: '基于 Next.js 15+ 的通用模板项目，支持国际化和主题系统',
    pages: {
      home: {
        title: '首页',
        description: '欢迎使用通用模板项目'
      },
      about: {
        title: '关于我们',
        description: '了解更多关于我们的信息'
      },
      privacy: {
        title: '隐私政策',
        description: '查看我们的隐私政策'
      },
      terms: {
        title: '服务条款',
        description: '查看我们的服务条款'
      }
    }
  },

  common: {
    loading: '加载中...',
    error: '错误',
    success: '成功',
    warning: '警告',
    info: '信息',
    confirm: '确认',
    cancel: '取消',
    save: '保存',
    edit: '编辑',
    delete: '删除',
    submit: '提交',
    reset: '重置',
    search: '搜索',
    filter: '筛选',
    sort: '排序',
    close: '关闭',
    open: '打开',
    next: '下一个',
    previous: '上一个',
    home: '首页',
    back: '返回',
    language: '语言',
    theme: '主题',
    settings: '设置'
  },

  navigation: {
    home: '首页',
    about: '关于',
    contact: '联系',
    privacy: '隐私',
    terms: '条款'
  },

  theme: {
    light: '浅色',
    dark: '深色',
    system: '跟随系统',
    toggle: '切换主题'
  },

  language: {
    current: '当前语言',
    select: '选择语言',
    languages: {
      'zh-CN': '简体中文',
      'en-US': 'English',
      'ja-JP': '日本語',
      'ko-KR': '한국어',
      'fr-FR': 'Français'
    }
  },

  footer: {
    copyright: '© 2024 通用模板项目。保留所有权利。',
    madeWith: '用 ❤️ 制作',
    poweredBy: '基于 Next.js 构建',
    quickLinks: {
      title: '快速链接',
      links: {
        home: '首页',
        about: '关于',
        privacy: '隐私政策',
        terms: '服务条款'
      }
    },
    contact: {
      title: '联系我们',
      email: '邮箱',
      website: '网站'
    }
  },

  errors: {
    notFound: {
      title: '页面未找到',
      description: '抱歉，您访问的页面不存在。',
      backHome: '返回首页'
    },
    serverError: {
      title: '服务器错误',
      description: '服务器出现了一些问题，请稍后重试。',
      retry: '重试'
    }
  },

  pages: {
    home: {
      title: '欢迎使用通用模板',
      subtitle: '快速构建现代化的 Web 应用',
      description: '这是一个功能完整的 Next.js 模板，包含国际化、主题系统等功能。'
    },
    about: {
      title: '关于我们',
      description: '我们致力于提供优质的开发工具和模板。',
      content: '这个项目是一个通用的 Next.js 模板，可以帮助开发者快速启动新项目。'
    },
    privacy: {
      title: '隐私政策',
      lastUpdated: '最后更新',
      content: {
        introduction: '我们重视您的隐私权，并致力于保护您的个人信息。',
        dataCollection: '我们收集的信息类型和收集方式。',
        dataUsage: '我们如何使用您的个人信息。',
        dataSecurity: '我们如何保护您的信息安全。',
        contact: '如有疑问，请联系我们。'
      }
    },
    terms: {
      title: '服务条款',
      lastUpdated: '最后更新',
      content: {
        introduction: '使用我们的服务即表示您同意以下条款。',
        usage: '服务的使用规则和限制。',
        limitations: '我们的责任限制。',
        changes: '条款变更通知。',
        contact: '如有疑问，请联系我们。'
      }
    }
  }
}; 