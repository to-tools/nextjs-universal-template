import { TranslationFile } from '../i18n-config';

export const enUS: TranslationFile = {
  // SEO Metadata
  seo: {
    siteName: 'Universal Template',
    siteDescription: 'Universal Next.js 15+ template with i18n and theme system',
    pages: {
      home: {
        title: 'Home - Universal Template',
        description: 'Welcome to the Universal Next.js 15+ template with i18n and theme system'
      },
      about: {
        title: 'About Us - Universal Template',
        description: 'Learn more about our universal template project'
      },
      privacy: {
        title: 'Privacy Policy - Universal Template',
        description: 'View our privacy policy'
      },
      terms: {
        title: 'Terms of Service - Universal Template',
        description: 'View our terms of service'
      }
    }
  },

  // Common UI Text
  common: {
    loading: 'Loading...',
    error: 'Error',
    success: 'Success',
    warning: 'Warning',
    info: 'Info',
    confirm: 'Confirm',
    cancel: 'Cancel',
    save: 'Save',
    edit: 'Edit',
    delete: 'Delete',
    submit: 'Submit',
    reset: 'Reset',
    search: 'Search',
    filter: 'Filter',
    sort: 'Sort',
    close: 'Close',
    open: 'Open',
    next: 'Next',
    previous: 'Previous',
    home: 'Home',
    back: 'Back',
    language: 'Language',
    theme: 'Theme',
    settings: 'Settings'
  },

  // Navigation Menu
  navigation: {
    home: 'Home',
    about: 'About',
    contact: 'Contact',
    privacy: 'Privacy',
    terms: 'Terms'
  },

  // Theme System
  theme: {
    light: 'Light',
    dark: 'Dark',
    system: 'System',
    toggle: 'Toggle Theme'
  },

  // Language Switch
  language: {
    current: 'Current Language',
    select: 'Select Language',
    languages: {
      'zh-CN': '简体中文',
      'en-US': 'English',
      'ja-JP': '日本語',
      'ko-KR': '한국어',
      'fr-FR': 'Français'
    }
  },

  // Footer Content
  footer: {
    copyright: '© 2024 Universal Template. All rights reserved.',
    madeWith: 'Made with ❤️',
    poweredBy: 'Powered by Next.js',
    description: 'This is a feature-complete Next.js template with internationalization, theme system, performance optimization and other modern features to help developers quickly start new projects.',
    developmentDesc: 'Modern development template for building quality applications quickly',
    features: {
      title: 'Core Features',
      i18n: {
        title: 'Internationalization',
        desc: 'Complete i18n solution supporting 5 languages'
      },
      theme: {
        title: 'Theme System',
        desc: 'Free switching between light/dark themes'
      },
      performance: {
        title: 'Performance Optimization',
        desc: 'Modern architecture based on Next.js 15+'
      },
      deployment: {
        title: 'Quick Deployment',
        desc: 'Multi-platform deployment support'
      },
      customizable: {
        title: 'Highly Customizable',
        desc: 'Flexible configuration and extensibility'
      },
      responsive: {
        title: 'Responsive Design',
        desc: 'Perfect adaptation to various devices'
      }
    },
    techFeatures: {
      title: 'Technical Features',
      responsive: 'Responsive Design',
      typescript: 'TypeScript Support',
      nextjs: 'Next.js Framework',
      tailwind: 'Tailwind CSS',
      multiPlatform: 'Multi-platform Deployment'
    },
    quickLinks: {
      title: 'Quick Links',
      links: {
        home: 'Home',
        about: 'About',
        privacy: 'Privacy Policy',
        terms: 'Terms of Service'
      }
    },
    contact: {
      title: 'Contact Us',
      email: 'Email',
      website: 'Website'
    },
    legal: {
      privacy: 'Privacy Policy',
      terms: 'Terms of Service'
    }
  },

  // Error Pages
  errors: {
    notFound: {
      title: 'Page Not Found',
      description: 'Sorry, the page you are looking for does not exist.',
      backHome: 'Back to Home'
    },
    serverError: {
      title: 'Server Error',
      description: 'Something went wrong on our end. Please try again later.',
      retry: 'Retry'
    }
  },

  // Page Content
  pages: {
    home: {
      title: 'Welcome to Universal Template',
      subtitle: 'Build modern web applications quickly',
      description: 'A feature-complete Next.js template with i18n, theme system, and more.',
      features: {
        i18n: {
          title: 'Internationalization',
          description: 'Complete i18n solution supporting 5 languages with SEO-friendly URL routing'
        },
        theme: {
          title: 'Theme System',
          description: 'Free switching between light/dark themes, follows system settings'
        },
        performance: {
          title: 'Performance Optimization',
          description: 'Modern architecture based on Next.js 15+ with Turbopack acceleration'
        },
        deployment: {
          title: 'Quick Deployment',
          description: 'Support for Cloudflare Pages and Vercel multi-platform deployment'
        }
      },
      quickStart: {
        title: 'Quick Start',
        step1: {
          title: 'Clone Template',
          description: 'Clone this universal template from GitHub to local'
        },
        step2: {
          title: 'Custom Configuration',
          description: 'Run initialization script and configure project information'
        },
        step3: {
          title: 'Start Development',
          description: 'Install dependencies, start development server, and begin building'
        }
      }
    },
    about: {
      title: 'About Us',
      description: 'We are dedicated to providing quality development tools and templates.',
      content: 'This project is a universal Next.js template that helps developers quickly start new projects.',
      sections: {
        introduction: 'Project Introduction',
        features: 'Core Features',
        techStack: 'Tech Stack',
        architecture: 'Architecture Advantages',
        quickStart: 'Quick Start',
        performance: 'High Performance',
        extensible: 'Extensible',
        typeSafe: 'Type Safe',
        performanceDesc: 'Based on Next.js static generation and edge runtime',
        extensibleDesc: 'Modular architecture supports rapid feature expansion',
        typeSafeDesc: 'Complete TypeScript support and type checking',
        step1: 'Clone Repository',
        step2: 'Install Dependencies',
        step3: 'Start Development',
        featureList: {
          i18n: '5-language internationalization support',
          theme: 'Light/Dark theme switching',
          seo: 'SEO-friendly URL structure',
          responsive: 'Responsive design',
          deployment: 'Multi-platform deployment support'
        }
      }
    },
    privacy: {
      title: 'Privacy Policy',
      lastUpdated: 'Last Updated',
      content: {
        introduction: 'We value your privacy and are committed to protecting your personal information.',
        dataCollection: 'Types of information we collect and how we collect it.',
        dataUsage: 'How we use your personal information.',
        dataSecurity: 'How we protect your information security.',
        contact: 'Contact us if you have any questions.'
      },
      sections: {
        dataCollection: 'Information Collection',
        dataUsage: 'Information Usage',
        dataSecurity: 'Information Protection',
        cookies: 'Cookie Usage',
        thirdParty: 'Third-party Services',
        contact: 'Contact Us',
        introduction: 'We are committed to protecting your privacy. This privacy policy explains how we collect, use and protect your information.',
        collectionDesc: 'We may collect the following types of information:',
        usageDesc: 'We use the collected information to:',
        securityDesc: 'We take appropriate security measures to protect your personal information, including:',
        cookiesDesc: 'We use cookies to:',
        thirdPartyDesc: 'We may use third-party services to provide certain features, which have their own privacy policies:',
        contactDesc: 'If you have any questions or suggestions about this privacy policy, please contact us through:',
        items: {
          technicalInfo: 'Technical information automatically collected when you visit our website (such as IP address, browser type, access time)',
          providedInfo: 'Information you actively provide (such as information in contact forms)',
          cookieInfo: 'Information collected by cookies and similar technologies',
          improveService: 'Provide and improve our services',
          analytics: 'Analyze website usage',
          notifications: 'Send important notifications',
          security: 'Ensure website security',
          httpsEncryption: 'Use HTTPS encryption for data transmission',
          securityReview: 'Regularly review security measures',
          accessControl: 'Limit access to personal information',
          dataBackup: 'Regular backup and secure storage of data',
          preferences: 'Remember your preference settings (such as theme and language selection)',
          traffic: 'Analyze website traffic and usage patterns',
          personalization: 'Provide personalized experience',
          hosting: 'Website hosting services',
          cdn: 'Content Delivery Network (CDN)',
          analyticsTools: 'Analytics tools'
        }
      }
    },
    terms: {
      title: 'Terms of Service',
      lastUpdated: 'Last Updated',
      content: {
        introduction: 'By using our services, you agree to the following terms.',
        usage: 'Rules and restrictions for using our services.',
        limitations: 'Our liability limitations.',
        changes: 'Notice of terms changes.',
        contact: 'Contact us if you have any questions.'
      },
      sections: {
        terms: 'Terms of Service',
        usage: 'Usage Rules',
        limitations: 'Liability Limitations',
        modifications: 'Terms Modifications',
        contact: 'Contact Us',
        introduction: 'Welcome to our services. By accessing and using this website, you agree to be bound by the following terms of service.',
        usageDesc: 'You agree to use our services according to the following rules:',
        limitationsDesc: 'To the maximum extent permitted by law, our liability is limited by the following:',
        modificationsDesc: 'We reserve the right to modify these terms at any time:',
        contactDesc: 'If you have any questions about these terms of service, please contact us:',
        items: {
          legalUse: 'Use the service only for lawful purposes',
          noHarm: 'Do not engage in any activities that may harm the service or other users',
          respectRights: 'Respect the intellectual property and privacy rights of others',
          followLaws: 'Comply with applicable laws and regulations',
          serviceAvailability: 'We do not guarantee the continuous availability of the service',
          contentAccuracy: 'We are not responsible for the accuracy of content',
          userContent: 'You are responsible for the content you provide',
          noWarranty: 'Services are provided "as is" without any form of warranty',
          notification: 'Modified terms will be published on the website',
          continuedUse: 'Continued use of the service indicates your acceptance of the modified terms',
          effectiveDate: 'New terms take effect from the date of publication'
        }
      }
    }
  }
}; 