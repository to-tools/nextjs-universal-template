import { TranslationFile } from '../i18n-config';

export const frFR: TranslationFile = {
  // Métadonnées SEO
  seo: {
    siteName: 'Modèle Universel',
    siteDescription: 'Modèle Universal Next.js 15+ avec système i18n et thème',
    pages: {
      home: {
        title: 'Accueil - Modèle Universel',
        description: 'Bienvenue dans le modèle Universal Next.js 15+ avec système i18n et thème'
      },
      about: {
        title: 'À propos - Modèle Universel',
        description: 'En savoir plus sur notre projet de modèle universel'
      },
      privacy: {
        title: 'Politique de confidentialité - Modèle Universel',
        description: 'Consulter notre politique de confidentialité'
      },
      terms: {
        title: 'Conditions de service - Modèle Universel',
        description: 'Consulter nos conditions de service'
      }
    }
  },

  // Texte UI commun
  common: {
    loading: 'Chargement...',
    error: 'Erreur',
    success: 'Succès',
    warning: 'Avertissement',
    info: 'Information',
    confirm: 'Confirmer',
    cancel: 'Annuler',
    save: 'Enregistrer',
    edit: 'Modifier',
    delete: 'Supprimer',
    submit: 'Soumettre',
    reset: 'Réinitialiser',
    search: 'Rechercher',
    filter: 'Filtrer',
    sort: 'Trier',
    close: 'Fermer',
    open: 'Ouvrir',
    next: 'Suivant',
    previous: 'Précédent',
    home: 'Accueil',
    back: 'Retour',
    language: 'Langue',
    theme: 'Thème',
    settings: 'Paramètres'
  },

  // Menu de navigation
  navigation: {
    home: 'Accueil',
    about: 'À propos',
    contact: 'Contact',
    privacy: 'Confidentialité',
    terms: 'Conditions'
  },

  // Système de thème
  theme: {
    light: 'Clair',
    dark: 'Sombre',
    system: 'Système',
    toggle: 'Changer de thème'
  },

  // Changement de langue
  language: {
    current: 'Langue actuelle',
    select: 'Sélectionner la langue',
    languages: {
      'zh-CN': '简体中文',
      'en-US': 'English',
      'ja-JP': '日本語',
      'ko-KR': '한국어',
      'fr-FR': 'Français'
    }
  },

  // Contenu du pied de page
  footer: {
    copyright: '© 2024 Modèle Universel. Tous droits réservés.',
    madeWith: 'Fait avec ❤️',
    poweredBy: 'Propulsé par Next.js',
    description: 'Il s\'agit d\'un template Next.js complet avec internationalisation, système de thème, optimisation des performances et autres fonctionnalités modernes pour aider les développeurs à démarrer rapidement de nouveaux projets.',
    developmentDesc: 'Template de développement moderne pour construire rapidement des applications de qualité',
    features: {
      title: 'Fonctionnalités Principales',
      i18n: {
        title: 'Internationalisation',
        desc: 'Solution i18n complète supportant 5 langues'
      },
      theme: {
        title: 'Système de Thème',
        desc: 'Commutation libre entre thèmes clair/sombre'
      },
      performance: {
        title: 'Optimisation des Performances',
        desc: 'Architecture moderne basée sur Next.js 15+'
      },
      deployment: {
        title: 'Déploiement Rapide',
        desc: 'Support de déploiement multi-plateforme'
      },
      customizable: {
        title: 'Hautement Personnalisable',
        desc: 'Configuration flexible et extensibilité'
      },
      responsive: {
        title: 'Design Réactif',
        desc: 'Adaptation parfaite à divers appareils'
      }
    },
    techFeatures: {
      title: 'Caractéristiques Techniques',
      responsive: 'Design Réactif',
      typescript: 'Support TypeScript',
      nextjs: 'Framework Next.js',
      tailwind: 'Tailwind CSS',
      multiPlatform: 'Déploiement Multi-plateforme'
    },
    quickLinks: {
      title: 'Liens rapides',
      links: {
        home: 'Accueil',
        about: 'À propos',
        privacy: 'Politique de confidentialité',
        terms: 'Conditions de service'
      }
    },
    contact: {
      title: 'Nous contacter',
      email: 'E-mail',
      website: 'Site web'
    },
    legal: {
      privacy: 'Politique de confidentialité',
      terms: 'Conditions de service'
    }
  },

  // Pages d'erreur
  errors: {
    notFound: {
      title: 'Page non trouvée',
      description: 'Désolé, la page que vous recherchez n\'existe pas.',
      backHome: 'Retour à l\'accueil'
    },
    serverError: {
      title: 'Erreur serveur',
      description: 'Un problème s\'est produit de notre côté. Veuillez réessayer plus tard.',
      retry: 'Réessayer'
    }
  },

  // Contenu des pages
  pages: {
    home: {
      title: 'Bienvenue dans le Modèle Universel',
      subtitle: 'Construisez rapidement des applications web modernes',
      description: 'Un modèle Next.js complet avec i18n, système de thème et plus encore.',
      features: {
        i18n: {
          title: 'Support Internationalization',
          description: 'Solution i18n complète supportant 5 langues avec routage URL convivial pour le SEO'
        },
        theme: {
          title: 'Système de Thème',
          description: 'Commutation libre entre thèmes clair/sombre, suit les paramètres système'
        },
        performance: {
          title: 'Optimisation des Performances',
          description: 'Architecture moderne basée sur Next.js 15+ avec accélération Turbopack'
        },
        deployment: {
          title: 'Déploiement Rapide',
          description: 'Support pour Cloudflare Pages et déploiement multi-plateforme Vercel'
        }
      },
      quickStart: {
        title: 'Démarrage Rapide',
        step1: {
          title: 'Cloner le Modèle',
          description: 'Cloner ce modèle universel depuis GitHub vers local'
        },
        step2: {
          title: 'Configuration Personnalisée',
          description: 'Exécuter le script d\'initialisation et configurer les informations du projet'
        },
        step3: {
          title: 'Commencer le Développement',
          description: 'Installer les dépendances, démarrer le serveur de développement et commencer la construction'
        }
      }
    },
    about: {
      title: 'À propos',
      description: 'Nous nous consacrons à fournir des outils de développement et des modèles de qualité.',
      content: 'Ce projet est un modèle Next.js universel qui aide les développeurs à démarrer rapidement de nouveaux projets.',
      sections: {
        introduction: 'Introduction du Projet',
        features: 'Fonctionnalités Principales',
        techStack: 'Stack Technologique',
        architecture: 'Avantages de l\'Architecture',
        quickStart: 'Démarrage Rapide',
        performance: 'Haute Performance',
        extensible: 'Extensible',
        typeSafe: 'Sécurisé par Types',
        performanceDesc: 'Basé sur la génération statique Next.js et le runtime edge',
        extensibleDesc: 'Architecture modulaire supportant l\'expansion rapide des fonctionnalités',
        typeSafeDesc: 'Support TypeScript complet et vérification des types',
        step1: 'Cloner le Dépôt',
        step2: 'Installer les Dépendances',
        step3: 'Démarrer le Développement',
        featureList: {
          i18n: 'Support d\'internationalisation 5 langues',
          theme: 'Commutation thème clair/sombre',
          seo: 'Structure URL conviviale pour le SEO',
          responsive: 'Design réactif',
          deployment: 'Support de déploiement multi-plateforme'
        }
      }
    },
    privacy: {
      title: 'Politique de confidentialité',
      lastUpdated: 'Dernière mise à jour',
      content: {
        introduction: 'Nous valorisons votre vie privée et nous nous engageons à protéger vos informations personnelles.',
        dataCollection: 'Types d\'informations que nous collectons et comment nous les collectons.',
        dataUsage: 'Comment nous utilisons vos informations personnelles.',
        dataSecurity: 'Comment nous protégeons la sécurité de vos informations.',
        contact: 'Contactez-nous si vous avez des questions.'
      },
      sections: {
        dataCollection: 'Collecte d\'Informations',
        dataUsage: 'Utilisation des Informations',
        dataSecurity: 'Protection des Informations',
        cookies: 'Utilisation des Cookies',
        thirdParty: 'Services Tiers',
        contact: 'Nous Contacter',
        introduction: 'Nous nous engageons à protéger votre vie privée. Cette politique explique comment nous collectons, utilisons et protégeons vos informations.',
        collectionDesc: 'Nous pouvons collecter les types d\'informations suivants :',
        usageDesc: 'Nous utilisons les informations collectées pour :',
        securityDesc: 'Nous prenons des mesures de sécurité appropriées pour protéger vos informations personnelles :',
        cookiesDesc: 'Nous utilisons les cookies pour :',
        thirdPartyDesc: 'Nous pouvons utiliser des services tiers pour fournir certaines fonctionnalités :',
        contactDesc: 'Si vous avez des questions concernant cette politique, veuillez nous contacter :',
        items: {
          technicalInfo: 'Informations techniques collectées automatiquement lors de votre visite',
          providedInfo: 'Informations que vous fournissez activement',
          cookieInfo: 'Informations collectées par les cookies et technologies similaires',
          improveService: 'Fournir et améliorer nos services',
          analytics: 'Analyser l\'utilisation du site web',
          notifications: 'Envoyer des notifications importantes',
          security: 'Assurer la sécurité du site web',
          httpsEncryption: 'Utiliser le cryptage HTTPS pour la transmission des données',
          securityReview: 'Réviser régulièrement les mesures de sécurité',
          accessControl: 'Limiter l\'accès aux informations personnelles',
          dataBackup: 'Sauvegarde régulière et stockage sécurisé des données',
          preferences: 'Mémoriser vos paramètres de préférence',
          traffic: 'Analyser le trafic du site web et les modèles d\'utilisation',
          personalization: 'Fournir une expérience personnalisée',
          hosting: 'Services d\'hébergement de site web',
          cdn: 'Réseau de diffusion de contenu (CDN)',
          analyticsTools: 'Outils d\'analyse'
        }
      }
    },
    terms: {
      title: 'Conditions de service',
      lastUpdated: 'Dernière mise à jour',
      content: {
        introduction: 'En utilisant nos services, vous acceptez les conditions suivantes.',
        usage: 'Règles et restrictions d\'utilisation de nos services.',
        limitations: 'Nos limitations de responsabilité.',
        changes: 'Notification des modifications des conditions.',
        contact: 'Contactez-nous si vous avez des questions.'
      },
      sections: {
        terms: 'Conditions de Service',
        usage: 'Règles d\'Utilisation',
        limitations: 'Limitations de Responsabilité',
        modifications: 'Modifications des Conditions',
        contact: 'Nous Contacter',
        introduction: 'Bienvenue dans nos services. En accédant à ce site web, vous acceptez d\'être lié par les conditions suivantes.',
        usageDesc: 'Vous acceptez d\'utiliser nos services selon les règles suivantes :',
        limitationsDesc: 'Dans la mesure maximale permise par la loi, notre responsabilité est limitée par ce qui suit :',
        modificationsDesc: 'Nous nous réservons le droit de modifier ces conditions à tout moment :',
        contactDesc: 'Si vous avez des questions concernant ces conditions, veuillez nous contacter :',
        items: {
          legalUse: 'Utiliser le service uniquement à des fins légales',
          noHarm: 'Ne pas s\'engager dans des activités qui pourraient nuire au service',
          respectRights: 'Respecter les droits de propriété intellectuelle et de confidentialité',
          followLaws: 'Se conformer aux lois et réglementations applicables',
          serviceAvailability: 'Nous ne garantissons pas la disponibilité continue du service',
          contentAccuracy: 'Nous ne sommes pas responsables de l\'exactitude du contenu',
          userContent: 'Vous êtes responsable du contenu que vous fournissez',
          noWarranty: 'Les services sont fournis "en l\'état" sans aucune forme de garantie',
          notification: 'Les conditions modifiées seront publiées sur le site web',
          continuedUse: 'L\'utilisation continue indique votre acceptation des conditions modifiées',
          effectiveDate: 'Les nouvelles conditions entrent en vigueur à compter de la date de publication'
        }
      }
    }
  }
}; 