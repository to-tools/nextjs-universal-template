import { TranslationFile } from '../i18n-config';

export const jaJP: TranslationFile = {
  // SEO メタデータ
  seo: {
    siteName: 'ユニバーサルテンプレート',
    siteDescription: 'i18nとテーマシステムを備えたUniversal Next.js 15+テンプレート',
    pages: {
      home: {
        title: 'ホーム - ユニバーサルテンプレート',
        description: 'i18nとテーマシステムを備えたUniversal Next.js 15+テンプレートへようこそ'
      },
      about: {
        title: '私たちについて - ユニバーサルテンプレート',
        description: 'ユニバーサルテンプレートプロジェクトについて詳しく知る'
      },
      privacy: {
        title: 'プライバシーポリシー - ユニバーサルテンプレート',
        description: 'プライバシーポリシーを確認する'
      },
      terms: {
        title: 'サービス利用規約 - ユニバーサルテンプレート',
        description: 'サービス利用規約を確認する'
      }
    }
  },

  // 共通UIテキスト
  common: {
    loading: '読み込み中...',
    error: 'エラー',
    success: '成功',
    warning: '警告',
    info: '情報',
    confirm: '確認',
    cancel: 'キャンセル',
    save: '保存',
    edit: '編集',
    delete: '削除',
    submit: '送信',
    reset: 'リセット',
    search: '検索',
    filter: 'フィルター',
    sort: '並び替え',
    close: '閉じる',
    open: '開く',
    next: '次へ',
    previous: '前へ',
    home: 'ホーム',
    back: '戻る',
    language: '言語',
    theme: 'テーマ',
    settings: '設定'
  },

  // ナビゲーションメニュー
  navigation: {
    home: 'ホーム',
    about: '私たちについて',
    contact: 'お問い合わせ',
    privacy: 'プライバシー',
    terms: '利用規約'
  },

  // テーマシステム
  theme: {
    light: 'ライト',
    dark: 'ダーク',
    system: 'システム',
    toggle: 'テーマ切り替え'
  },

  // 言語切り替え
  language: {
    current: '現在の言語',
    select: '言語を選択',
    languages: {
      'zh-CN': '简体中文',
      'en-US': 'English',
      'ja-JP': '日本語',
      'ko-KR': '한국어',
      'fr-FR': 'Français'
    }
  },

  // フッターコンテンツ
  footer: {
    copyright: '© 2024 ユニバーサルテンプレート。All rights reserved.',
    madeWith: '❤️で作成',
    poweredBy: 'Next.jsで構築',
    description: 'これは国際化、テーマシステム、パフォーマンス最適化などの現代的な機能を備えた機能完備のNext.jsテンプレートで、開発者が新しいプロジェクトを素早く開始するのに役立ちます。',
    developmentDesc: '質の高いアプリケーションを素早く構築するための現代的な開発テンプレート',
    features: {
      title: 'コア機能',
      i18n: {
        title: '国際化',
        desc: '5言語をサポートする完全なi18nソリューション'
      },
      theme: {
        title: 'テーマシステム',
        desc: 'ライト/ダークテーマの自由な切り替え'
      },
      performance: {
        title: 'パフォーマンス最適化',
        desc: 'Next.js 15+に基づく現代的なアーキテクチャ'
      },
      deployment: {
        title: 'クイック展開',
        desc: 'マルチプラットフォーム展開サポート'
      },
      customizable: {
        title: '高度にカスタマイズ可能',
        desc: '柔軟な設定と拡張性'
      },
      responsive: {
        title: 'レスポンシブデザイン',
        desc: '様々なデバイスに完璧に適応'
      }
    },
    techFeatures: {
      title: '技術的特徴',
      responsive: 'レスポンシブデザイン',
      typescript: 'TypeScript サポート',
      nextjs: 'Next.js フレームワーク',
      tailwind: 'Tailwind CSS',
      multiPlatform: 'マルチプラットフォーム展開'
    },
    quickLinks: {
      title: 'クイックリンク',
      links: {
        home: 'ホーム',
        about: '私たちについて',
        privacy: 'プライバシーポリシー',
        terms: 'サービス利用規約'
      }
    },
    contact: {
      title: 'お問い合わせ',
      email: 'メール',
      website: 'ウェブサイト'
    },
    legal: {
      privacy: 'プライバシーポリシー',
      terms: 'サービス利用規約'
    }
  },

  // エラーページ
  errors: {
    notFound: {
      title: 'ページが見つかりません',
      description: '申し訳ございませんが、お探しのページは存在しません。',
      backHome: 'ホームに戻る'
    },
    serverError: {
      title: 'サーバーエラー',
      description: 'サーバーで問題が発生しました。しばらくしてから再度お試しください。',
      retry: '再試行'
    }
  },

  // ページコンテンツ
  pages: {
    home: {
      title: 'ユニバーサルテンプレートへようこそ',
      subtitle: '最新のWebアプリケーションを素早く構築',
      description: 'i18n、テーマシステムなどを含む機能完備のNext.jsテンプレート。',
      features: {
        i18n: {
          title: '国際化サポート',
          description: '5言語をサポートする完全なi18nソリューション、SEOフレンドリーなURLルーティング'
        },
        theme: {
          title: 'テーマシステム',
          description: 'ライト/ダークテーマの自由な切り替え、システム設定に従う'
        },
        performance: {
          title: 'パフォーマンス最適化',
          description: 'Next.js 15+に基づく最新アーキテクチャ、Turbopack高速化'
        },
        deployment: {
          title: 'クイックデプロイ',
          description: 'Cloudflare Pages と Vercel マルチプラットフォームデプロイをサポート'
        }
      },
      quickStart: {
        title: 'クイックスタート',
        step1: {
          title: 'テンプレートをクローン',
          description: 'GitHubからこのユニバーサルテンプレートをローカルにクローン'
        },
        step2: {
          title: 'カスタム設定',
          description: '初期化スクリプトを実行し、プロジェクト情報を設定'
        },
        step3: {
          title: '開発開始',
          description: '依存関係をインストールし、開発サーバーを起動、構築を開始'
        }
      }
    },
    about: {
      title: '私たちについて',
      description: '質の高い開発ツールとテンプレートの提供に専念しています。',
      content: 'このプロジェクトは、開発者が新しいプロジェクトを素早く開始するのに役立つユニバーサルNext.jsテンプレートです。',
      sections: {
        introduction: 'プロジェクト紹介',
        features: 'コア機能',
        techStack: '技術スタック',
        architecture: 'アーキテクチャの利点',
        quickStart: 'クイックスタート',
        performance: '高性能',
        extensible: '拡張可能',
        typeSafe: 'タイプセーフ',
        performanceDesc: 'Next.jsの静的生成とエッジランタイムに基づく',
        extensibleDesc: 'モジュラーアーキテクチャにより、迅速な機能拡張をサポート',
        typeSafeDesc: '完全なTypeScriptサポートとタイプチェック',
        step1: 'リポジトリをクローン',
        step2: '依存関係をインストール',
        step3: '開発を開始',
        featureList: {
          i18n: '5言語国際化サポート',
          theme: 'ライト/ダークテーマ切り替え',
          seo: 'SEOフレンドリーなURL構造',
          responsive: 'レスポンシブデザイン',
          deployment: 'マルチプラットフォーム展開サポート'
        }
      }
    },
    privacy: {
      title: 'プライバシーポリシー',
      lastUpdated: '最終更新',
      content: {
        introduction: 'お客様のプライバシーを尊重し、個人情報の保護に努めています。',
        dataCollection: '収集する情報の種類と収集方法。',
        dataUsage: '個人情報の使用方法。',
        dataSecurity: '情報セキュリティの保護方法。',
        contact: 'ご質問がございましたらお問い合わせください。'
      },
      sections: {
        dataCollection: '情報収集',
        dataUsage: '情報の使用',
        dataSecurity: '情報保護',
        cookies: 'Cookieの使用',
        thirdParty: '第三者サービス',
        contact: 'お問い合わせ',
        introduction: '私たちはお客様のプライバシーの保護をお約束します。このプライバシーポリシーでは、情報の収集、使用、保護方法について説明します。',
        collectionDesc: '以下の種類の情報を収集する場合があります：',
        usageDesc: '収集した情報は以下の目的で使用します：',
        securityDesc: '個人情報を保護するため、以下を含む適切なセキュリティ対策を講じています：',
        cookiesDesc: 'Cookie は以下の目的で使用しています：',
        thirdPartyDesc: '特定の機能を提供するために第三者サービスを使用する場合があります：',
        contactDesc: 'このプライバシーポリシーについてご質問やご提案がございましたら、以下の方法でお問い合わせください：',
        items: {
          technicalInfo: 'ウェブサイト訪問時に自動収集される技術情報（IPアドレス、ブラウザタイプ、アクセス時間など）',
          providedInfo: 'お客様が積極的に提供する情報（お問い合わせフォームの情報など）',
          cookieInfo: 'Cookieや類似技術によって収集される情報',
          improveService: 'サービスの提供と改善',
          analytics: 'ウェブサイトの使用状況分析',
          notifications: '重要な通知の送信',
          security: 'ウェブサイトのセキュリティ確保',
          httpsEncryption: 'データ送信にHTTPS暗号化を使用',
          securityReview: '定期的なセキュリティ対策の見直し',
          accessControl: '個人情報へのアクセス制限',
          dataBackup: 'データの定期バックアップと安全な保存',
          preferences: '設定の記憶（テーマや言語選択など）',
          traffic: 'ウェブサイトのトラフィックと使用パターンの分析',
          personalization: 'パーソナライズされた体験の提供',
          hosting: 'ウェブサイトホスティングサービス',
          cdn: 'コンテンツ配信ネットワーク（CDN）',
          analyticsTools: '分析ツール'
        }
      }
    },
    terms: {
      title: '利用規約',
      lastUpdated: '最終更新',
      content: {
        introduction: '私たちのサービスを使用することにより、以下の規約に同意したものとみなします。',
        usage: 'サービス使用のルールと制限。',
        limitations: '私たちの責任制限。',
        changes: '規約変更の通知。',
        contact: 'ご質問がございましたらお問い合わせください。'
      },
      sections: {
        terms: '利用規約',
        usage: '使用ルール',
        limitations: '責任制限',
        modifications: '規約変更',
        contact: 'お問い合わせ',
        introduction: '私たちのサービスへようこそ。このウェブサイトにアクセスし使用することにより、以下の利用規約に拘束されることに同意したものとみなします。',
        usageDesc: '以下のルールに従ってサービスを使用することに同意します：',
        limitationsDesc: '法律で許可される最大限の範囲で、私たちの責任は以下により制限されます：',
        modificationsDesc: '私たちはいつでもこれらの規約を変更する権利を留保します：',
        contactDesc: 'これらの利用規約についてご質問がございましたら、お問い合わせください：',
        items: {
          legalUse: '合法的な目的でのみサービスを使用する',
          noHarm: 'サービスや他のユーザーに害を与える可能性のある活動に従事しない',
          respectRights: '他者の知的財産権とプライバシー権を尊重する',
          followLaws: '適用される法律と規制を遵守する',
          serviceAvailability: 'サービスの継続的な利用可能性を保証しません',
          contentAccuracy: 'コンテンツの正確性について責任を負いません',
          userContent: 'お客様が提供するコンテンツについてはお客様が責任を負います',
          noWarranty: 'サービスは「現状のまま」提供され、いかなる形の保証も提供しません',
          notification: '変更された規約はウェブサイトで公開されます',
          continuedUse: 'サービスの継続使用は変更された規約への同意を示します',
          effectiveDate: '新しい規約は公開日から効力を発します'
        }
      }
    }
  }
}; 