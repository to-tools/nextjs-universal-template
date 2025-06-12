import { TranslationFile } from '../i18n-config';

export const koKR: TranslationFile = {
  // SEO 메타데이터
  seo: {
    siteName: '유니버설 템플릿',
    siteDescription: 'i18n 및 테마 시스템을 갖춘 Universal Next.js 15+ 템플릿',
    pages: {
      home: {
        title: '홈 - 유니버설 템플릿',
        description: 'i18n 및 테마 시스템을 갖춘 Universal Next.js 15+ 템플릿에 오신 것을 환영합니다'
      },
      about: {
        title: '회사 소개 - 유니버설 템플릿',
        description: '유니버설 템플릿 프로젝트에 대해 자세히 알아보기'
      },
      privacy: {
        title: '개인정보처리방침 - 유니버설 템플릿',
        description: '개인정보처리방침 확인하기'
      },
      terms: {
        title: '서비스 이용약관 - 유니버설 템플릿',
        description: '서비스 이용약관 확인하기'
      }
    }
  },

  // 공통 UI 텍스트
  common: {
    loading: '로딩 중...',
    error: '오류',
    success: '성공',
    warning: '경고',
    info: '정보',
    confirm: '확인',
    cancel: '취소',
    save: '저장',
    edit: '편집',
    delete: '삭제',
    submit: '제출',
    reset: '재설정',
    search: '검색',
    filter: '필터',
    sort: '정렬',
    close: '닫기',
    open: '열기',
    next: '다음',
    previous: '이전',
    home: '홈',
    back: '뒤로',
    language: '언어',
    theme: '테마',
    settings: '설정'
  },

  // 네비게이션 메뉴
  navigation: {
    home: '홈',
    about: '회사 소개',
    contact: '연락처',
    privacy: '개인정보',
    terms: '이용약관'
  },

  // 테마 시스템
  theme: {
    light: '라이트',
    dark: '다크',
    system: '시스템',
    toggle: '테마 변경'
  },

  // 언어 변경
  language: {
    current: '현재 언어',
    select: '언어 선택',
    languages: {
      'zh-CN': '简体中文',
      'en-US': 'English',
      'ja-JP': '日本語',
      'ko-KR': '한국어',
      'fr-FR': 'Français'
    }
  },

  // 푸터 콘텐츠
  footer: {
    copyright: '© 2024 유니버설 템플릿. All rights reserved.',
    madeWith: '❤️로 제작',
    poweredBy: 'Next.js로 구동',
    description: '이것은 국제화, 테마 시스템, 성능 최적화 등의 현대적인 기능을 갖춘 완전한 기능의 Next.js 템플릿으로, 개발자들이 새로운 프로젝트를 빠르게 시작할 수 있도록 도와줍니다.',
    developmentDesc: '품질 높은 애플리케이션을 빠르게 구축하기 위한 현대적인 개발 템플릿',
    features: {
      title: '핵심 기능',
      i18n: {
        title: '국제화',
        desc: '5개 언어를 지원하는 완전한 i18n 솔루션'
      },
      theme: {
        title: '테마 시스템',
        desc: '라이트/다크 테마 자유 전환'
      },
      performance: {
        title: '성능 최적화',
        desc: 'Next.js 15+를 기반으로 한 현대적 아키텍처'
      },
      deployment: {
        title: '빠른 배포',
        desc: '멀티플랫폼 배포 지원'
      },
      customizable: {
        title: '고도로 커스터마이징 가능',
        desc: '유연한 설정과 확장성'
      },
      responsive: {
        title: '반응형 디자인',
        desc: '다양한 기기에 완벽 적응'
      }
    },
    techFeatures: {
      title: '기술적 특징',
      responsive: '반응형 디자인',
      typescript: 'TypeScript 지원',
      nextjs: 'Next.js 프레임워크',
      tailwind: 'Tailwind CSS',
      multiPlatform: '멀티플랫폼 배포'
    },
    quickLinks: {
      title: '빠른 링크',
      links: {
        home: '홈',
        about: '회사 소개',
        privacy: '개인정보처리방침',
        terms: '서비스 이용약관'
      }
    },
    contact: {
      title: '연락처',
      email: '이메일',
      website: '웹사이트'
    },
    legal: {
      privacy: '개인정보처리방침',
      terms: '서비스 이용약관'
    }
  },

  // 오류 페이지
  errors: {
    notFound: {
      title: '페이지를 찾을 수 없습니다',
      description: '죄송합니다. 찾으시는 페이지가 존재하지 않습니다.',
      backHome: '홈으로 돌아가기'
    },
    serverError: {
      title: '서버 오류',
      description: '서버에 문제가 발생했습니다. 잠시 후 다시 시도해 주세요.',
      retry: '다시 시도'
    }
  },

  // 페이지 콘텐츠
  pages: {
    home: {
      title: '유니버설 템플릿에 오신 것을 환영합니다',
      subtitle: '최신 웹 애플리케이션을 빠르게 구축하세요',
      description: 'i18n, 테마 시스템 등을 포함한 기능 완비된 Next.js 템플릿입니다.',
      features: {
        i18n: {
          title: '국제화 지원',
          description: '5개 언어를 지원하는 완전한 i18n 솔루션, SEO 친화적 URL 라우팅'
        },
        theme: {
          title: '테마 시스템',
          description: '라이트/다크 테마 자유 전환, 시스템 설정 따라가기'
        },
        performance: {
          title: '성능 최적화',
          description: 'Next.js 15+ 기반 최신 아키텍처, Turbopack 가속화'
        },
        deployment: {
          title: '빠른 배포',
          description: 'Cloudflare Pages와 Vercel 멀티플랫폼 배포 지원'
        }
      },
      quickStart: {
        title: '빠른 시작',
        step1: {
          title: '템플릿 클론',
          description: 'GitHub에서 이 유니버설 템플릿을 로컬로 클론'
        },
        step2: {
          title: '사용자 정의 설정',
          description: '초기화 스크립트 실행, 프로젝트 정보 설정'
        },
        step3: {
          title: '개발 시작',
          description: '종속성 설치, 개발 서버 시작, 구축 시작'
        }
      }
    },
    about: {
      title: '소개',
      description: '우리는 고품질 개발 도구와 템플릿 제공에 전념하고 있습니다.',
      content: '이 프로젝트는 개발자들이 새로운 프로젝트를 빠르게 시작할 수 있도록 도와주는 유니버설 Next.js 템플릿입니다.',
      sections: {
        introduction: '프로젝트 소개',
        features: '핵심 기능',
        techStack: '기술 스택',
        architecture: '아키텍처 장점',
        quickStart: '빠른 시작',
        performance: '고성능',
        extensible: '확장 가능',
        typeSafe: '타입 안전',
        performanceDesc: 'Next.js 정적 생성 및 엣지 런타임 기반',
        extensibleDesc: '모듈식 아키텍처로 빠른 기능 확장 지원',
        typeSafeDesc: '완전한 TypeScript 지원 및 타입 검사',
        step1: '저장소 클론',
        step2: '종속성 설치',
        step3: '개발 시작',
        featureList: {
          i18n: '5개 언어 국제화 지원',
          theme: '라이트/다크 테마 전환',
          seo: 'SEO 친화적 URL 구조',
          responsive: '반응형 디자인',
          deployment: '멀티플랫폼 배포 지원'
        }
      }
    },
    privacy: {
      title: '개인정보처리방침',
      lastUpdated: '최종 업데이트',
      content: {
        introduction: '우리는 귀하의 개인정보를 소중히 여기며 보호하기 위해 최선을 다하고 있습니다.',
        dataCollection: '수집하는 정보의 유형과 수집 방법.',
        dataUsage: '개인정보 사용 방법.',
        dataSecurity: '정보 보안 보호 방법.',
        contact: '문의사항이 있으시면 연락주세요.'
      },
      sections: {
        dataCollection: '정보 수집',
        dataUsage: '정보 사용',
        dataSecurity: '정보 보호',
        cookies: '쿠키 사용',
        thirdParty: '제3자 서비스',
        contact: '문의하기',
        introduction: '우리는 귀하의 개인정보 보호를 약속드립니다. 이 개인정보처리방침은 정보의 수집, 사용, 보호 방법을 설명합니다.',
        collectionDesc: '다음과 같은 유형의 정보를 수집할 수 있습니다:',
        usageDesc: '수집된 정보는 다음 목적으로 사용됩니다:',
        securityDesc: '개인정보를 보호하기 위해 다음을 포함한 적절한 보안 조치를 취하고 있습니다:',
        cookiesDesc: '쿠키는 다음 목적으로 사용됩니다:',
        thirdPartyDesc: '특정 기능을 제공하기 위해 제3자 서비스를 사용할 수 있습니다:',
        contactDesc: '이 개인정보처리방침에 대해 질문이나 제안이 있으시면 다음 방법으로 연락하세요:',
        items: {
          technicalInfo: '웹사이트 방문 시 자동으로 수집되는 기술 정보(IP 주소, 브라우저 유형, 접속 시간 등)',
          providedInfo: '귀하가 적극적으로 제공하는 정보(문의 양식의 정보 등)',
          cookieInfo: '쿠키 및 유사 기술로 수집되는 정보',
          improveService: '서비스 제공 및 개선',
          analytics: '웹사이트 사용 현황 분석',
          notifications: '중요한 알림 발송',
          security: '웹사이트 보안 확보',
          httpsEncryption: '데이터 전송에 HTTPS 암호화 사용',
          securityReview: '정기적인 보안 조치 검토',
          accessControl: '개인정보 접근 제한',
          dataBackup: '정기적인 데이터 백업 및 안전한 저장',
          preferences: '설정 기억(테마 및 언어 선택 등)',
          traffic: '웹사이트 트래픽 및 사용 패턴 분석',
          personalization: '개인화된 경험 제공',
          hosting: '웹사이트 호스팅 서비스',
          cdn: '콘텐츠 전송 네트워크(CDN)',
          analyticsTools: '분석 도구'
        }
      }
    },
    terms: {
      title: '이용약관',
      lastUpdated: '최종 업데이트',
      content: {
        introduction: '우리 서비스를 이용함으로써 다음 약관에 동의하신 것으로 간주됩니다.',
        usage: '서비스 사용 규칙 및 제한사항.',
        limitations: '우리의 책임 제한.',
        changes: '약관 변경 통지.',
        contact: '질문이 있으시면 연락주세요.'
      },
      sections: {
        terms: '이용약관',
        usage: '사용 규칙',
        limitations: '책임 제한',
        modifications: '약관 변경',
        contact: '문의하기',
        introduction: '우리 서비스에 오신 것을 환영합니다. 이 웹사이트에 접속하고 사용함으로써 다음 이용약관에 구속됨에 동의하신 것으로 간주됩니다.',
        usageDesc: '다음 규칙에 따라 서비스를 사용하는 것에 동의합니다:',
        limitationsDesc: '법률이 허용하는 최대 범위에서 우리의 책임은 다음과 같이 제한됩니다:',
        modificationsDesc: '우리는 언제든지 이 약관을 수정할 권리를 보유합니다:',
        contactDesc: '이 이용약관에 대해 질문이 있으시면 연락하세요:',
        items: {
          legalUse: '합법적인 목적으로만 서비스 사용',
          noHarm: '서비스나 다른 사용자에게 해를 끼칠 수 있는 활동 금지',
          respectRights: '타인의 지적 재산권과 개인정보보호권 존중',
          followLaws: '적용되는 법률 및 규정 준수',
          serviceAvailability: '서비스의 지속적 이용 가능성을 보장하지 않습니다',
          contentAccuracy: '콘텐츠의 정확성에 대해 책임지지 않습니다',
          userContent: '귀하가 제공하는 콘텐츠에 대해서는 귀하가 책임집니다',
          noWarranty: '서비스는 "현재 상태"로 제공되며 어떠한 형태의 보증도 제공하지 않습니다',
          notification: '수정된 약관은 웹사이트에 게시됩니다',
          continuedUse: '서비스 계속 사용은 수정된 약관에 동의함을 나타냅니다',
          effectiveDate: '새로운 약관은 게시일부터 효력이 발생합니다'
        }
      }
    }
  }
}; 