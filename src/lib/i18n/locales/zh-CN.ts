import { TranslationFile } from '../i18n-config';

export const zhCN: TranslationFile = {
  // SEO 元数据
  seo: {
    siteName: '通用模板项目',
    siteDescription: '基于 Next.js 15+ 的通用模板项目，支持国际化和主题系统',
    pages: {
      home: {
        title: '首页 - 通用模板项目',
        description: '欢迎使用基于 Next.js 15+ 的通用模板项目，支持国际化和主题系统'
      },
      about: {
        title: '关于我们 - 通用模板项目',
        description: '了解更多关于我们的通用模板项目'
      },
      privacy: {
        title: '隐私政策 - 通用模板项目',
        description: '查看我们的隐私政策'
      },
      terms: {
        title: '服务条款 - 通用模板项目',
        description: '查看我们的服务条款'
      }
    }
  },

  // 通用UI文本
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

  // 导航菜单
  navigation: {
    home: '首页',
    about: '关于',
    contact: '联系',
    privacy: '隐私',
    terms: '条款'
  },

  // 主题系统
  theme: {
    light: '浅色',
    dark: '深色',
    system: '跟随系统',
    toggle: '切换主题'
  },

  // 语言切换
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

  // Footer内容
  footer: {
    copyright: '© 2024 通用模板项目。保留所有权利。',
    madeWith: '用 ❤️ 制作',
    poweredBy: '基于 Next.js 构建',
    description: '这是一个功能完整的 Next.js 模板，包含国际化、主题系统、性能优化等现代化特性，帮助开发者快速启动新项目。',
    developmentDesc: '现代化的开发模板，助力快速构建优质应用',
    features: {
      title: '核心特性',
      i18n: {
        title: '国际化支持',
        desc: '支持5种语言的完整i18n解决方案'
      },
      theme: {
        title: '主题系统',
        desc: '浅色/深色主题自由切换'
      },
      performance: {
        title: '性能优化',
        desc: '基于 Next.js 15+ 的现代化架构'
      },
      deployment: {
        title: '快速部署',
        desc: '支持多平台部署'
      },
      customizable: {
        title: '高度可定制',
        desc: '灵活的配置和扩展能力'
      },
      responsive: {
        title: '响应式设计',
        desc: '完美适配各种设备'
      }
    },
    techFeatures: {
      title: '技术特性',
      responsive: '响应式设计',
      typescript: 'TypeScript 支持',
      nextjs: 'Next.js 框架',
      tailwind: 'Tailwind CSS',
      multiPlatform: '多平台部署'
    },
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
    },
    legal: {
      privacy: '隐私政策',
      terms: '服务条款'
    }
  },

  // 错误页面
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

  // 基础页面内容
  pages: {
    home: {
      title: '欢迎使用通用模板',
      subtitle: '快速构建现代化的 Web 应用',
      description: '这是一个功能完整的 Next.js 模板，包含国际化、主题系统等功能。',
      features: {
        i18n: {
          title: '国际化支持',
          description: '支持5种语言的完整i18n解决方案，SEO友好的URL路由'
        },
        theme: {
          title: '主题系统',
          description: '浅色/深色主题自由切换，跟随系统设置'
        },
        performance: {
          title: '性能优化',
          description: '基于 Next.js 15+ 的现代化架构，Turbopack 加速构建'
        },
        deployment: {
          title: '快速部署',
          description: '支持 Cloudflare Pages 和 Vercel 多平台部署'
        }
      },
      quickStart: {
        title: '快速开始',
        step1: {
          title: '克隆模板',
          description: '从GitHub克隆这个通用模板到本地'
        },
        step2: {
          title: '自定义配置',
          description: '运行初始化脚本，配置项目信息'
        },
        step3: {
          title: '开始开发',
          description: '安装依赖，启动开发服务器，开始构建'
        }
      }
    },
    about: {
      title: '关于我们',
      description: '我们致力于提供优质的开发工具和模板。',
      content: '这个项目是一个通用的 Next.js 模板，可以帮助开发者快速启动新项目。',
      sections: {
        introduction: '项目介绍',
        features: '核心功能',
        techStack: '技术栈',
        architecture: '架构优势',
        quickStart: '快速开始',
        performance: '高性能',
        extensible: '易扩展',
        typeSafe: '类型安全',
        performanceDesc: '基于 Next.js 的静态生成和边缘运行时',
        extensibleDesc: '模块化架构，支持快速功能扩展',
        typeSafeDesc: '完整的 TypeScript 支持和类型检查',
        step1: '克隆项目',
        step2: '安装依赖',
        step3: '启动开发',
        featureList: {
          i18n: '5语言国际化支持',
          theme: '浅色/深色主题切换',
          seo: 'SEO友好的URL结构',
          responsive: '响应式设计',
          deployment: '多平台部署支持'
        }
      }
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
      },
      sections: {
        dataCollection: '信息收集',
        dataUsage: '信息使用',
        dataSecurity: '信息保护',
        cookies: 'Cookie使用',
        thirdParty: '第三方服务',
        contact: '联系我们',
        introduction: '我们承诺保护您的隐私权。本隐私政策说明了我们如何收集、使用和保护您的信息。',
        collectionDesc: '我们可能收集以下类型的信息：',
        usageDesc: '我们使用收集的信息来：',
        securityDesc: '我们采取适当的安全措施来保护您的个人信息，包括：',
        cookiesDesc: '我们使用Cookie来：',
        thirdPartyDesc: '我们可能使用第三方服务来提供某些功能，这些服务有自己的隐私政策：',
        contactDesc: '如果您对本隐私政策有任何疑问或建议，请通过以下方式联系我们：',
        items: {
          technicalInfo: '访问我们网站时自动收集的技术信息（如IP地址、浏览器类型、访问时间）',
          providedInfo: '您主动提供的信息（如联系表单中的信息）',
          cookieInfo: 'Cookie和类似技术收集的信息',
          improveService: '提供和改进我们的服务',
          analytics: '分析网站使用情况',
          notifications: '发送重要通知',
          security: '确保网站安全',
          httpsEncryption: '使用HTTPS加密传输数据',
          securityReview: '定期审查安全措施',
          accessControl: '限制对个人信息的访问',
          dataBackup: '定期备份和安全存储数据',
          preferences: '记住您的偏好设置（如主题和语言选择）',
          traffic: '分析网站流量和使用模式',
          personalization: '提供个性化体验',
          hosting: '网站托管服务',
          cdn: '内容分发网络（CDN）',
          analyticsTools: '分析工具'
        }
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
      },
      sections: {
        terms: '服务条款',
        usage: '使用规则',
        limitations: '责任限制',
        modifications: '条款变更',
        contact: '联系我们',
        introduction: '欢迎使用我们的服务。通过访问和使用本网站，您同意遵守并受以下服务条款的约束。',
        usageDesc: '您同意按照以下规则使用我们的服务：',
        limitationsDesc: '在法律允许的最大范围内，我们的责任受到以下限制：',
        modificationsDesc: '我们保留随时修改这些条款的权利：',
        contactDesc: '如果您对这些服务条款有任何疑问，请联系我们：',
        items: {
          legalUse: '仅将服务用于合法目的',
          noHarm: '不得进行任何可能损害服务或其他用户的活动',
          respectRights: '尊重他人的知识产权和隐私权',
          followLaws: '遵守适用的法律法规',
          serviceAvailability: '我们不保证服务的持续可用性',
          contentAccuracy: '我们不对内容的准确性承担责任',
          userContent: '您对自己提供的内容承担责任',
          noWarranty: '服务按"现状"提供，不提供任何形式的保证',
          notification: '修改后的条款将在网站上公布',
          continuedUse: '继续使用服务表示您接受修改后的条款',
          effectiveDate: '新条款自公布之日起生效'
        }
      }
    }
  }
}; 