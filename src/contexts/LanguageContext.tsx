import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  isRTL: boolean;
}

const translations = {
  en: {
    // Navigation
    'nav.getNotified': 'Get Notified',
    'nav.features': 'Features',
    'nav.howItWorks': 'How It Works',
    
    // Hero
    'hero.badge': 'Coming Soon',
    'hero.title': 'Your Local Services,',
    'hero.titleHighlight': 'One Tap Away',
    'hero.subtitle': 'Connect with trusted local artisans and service providers. From home repairs to beauty services, 3awani brings quality services to your doorstep.',
    'hero.emailPlaceholder': 'Enter your email',
    'hero.notifyMe': 'Notify Me',
    'hero.emailSuccess': 'Thanks! We\'ll notify you when we launch.',
    
    // Features
    'features.title': 'Services at Your Fingertips',
    'features.subtitle': 'Discover a wide range of professional services tailored to your needs',
    'features.homeRepairs.title': 'Home Repairs',
    'features.homeRepairs.description': 'Skilled plumbers, electricians, and handymen ready to fix anything in your home.',
    'features.cleaning.title': 'Cleaning Services',
    'features.cleaning.description': 'Professional home and office cleaning services for a spotless space.',
    'features.beauty.title': 'Beauty & Wellness',
    'features.beauty.description': 'Hairdressers, spa treatments, and wellness services brought to you.',
    'features.food.title': 'Food & Catering',
    'features.food.description': 'Local food vendors and catering services for every occasion.',
    
    // How It Works
    'howItWorks.title': 'How It Works',
    'howItWorks.subtitle': 'Getting the service you need is as easy as 1-2-3',
    'howItWorks.step1.title': 'Search',
    'howItWorks.step1.description': 'Browse through our wide range of services and find what you need.',
    'howItWorks.step2.title': 'Book',
    'howItWorks.step2.description': 'Choose your preferred provider and schedule at your convenience.',
    'howItWorks.step3.title': 'Enjoy',
    'howItWorks.step3.description': 'Sit back and let our verified professionals handle the rest.',
    
    // Footer
    'footer.tagline': 'Making life easier, one service at a time.',
    'footer.contact': 'Contact Us',
    'footer.followUs': 'Follow Us',
    'footer.rights': '© 2024 3awani. All rights reserved.',
  },
  ar: {
    // Navigation
    'nav.getNotified': 'أعلمني',
    'nav.features': 'الخدمات',
    'nav.howItWorks': 'كيف يعمل',
    
    // Hero
    'hero.badge': 'قريباً',
    'hero.title': 'خدماتك المحلية،',
    'hero.titleHighlight': 'بلمسة واحدة',
    'hero.subtitle': 'تواصل مع الحرفيين ومقدمي الخدمات المحليين الموثوقين. من إصلاحات المنزل إلى خدمات التجميل، 3awani يجلب الخدمات المميزة إلى باب منزلك.',
    'hero.emailPlaceholder': 'أدخل بريدك الإلكتروني',
    'hero.notifyMe': 'أعلمني',
    'hero.emailSuccess': 'شكراً! سنخبرك عند الإطلاق.',
    
    // Features
    'features.title': 'خدمات في متناول يدك',
    'features.subtitle': 'اكتشف مجموعة واسعة من الخدمات المهنية المصممة لاحتياجاتك',
    'features.homeRepairs.title': 'إصلاحات المنزل',
    'features.homeRepairs.description': 'سباكون وكهربائيون وفنيون ماهرون جاهزون لإصلاح أي شيء في منزلك.',
    'features.cleaning.title': 'خدمات التنظيف',
    'features.cleaning.description': 'خدمات تنظيف احترافية للمنازل والمكاتب لمساحة نظيفة.',
    'features.beauty.title': 'الجمال والعافية',
    'features.beauty.description': 'مصففو شعر وعلاجات سبا وخدمات عافية تصل إليك.',
    'features.food.title': 'الطعام والتموين',
    'features.food.description': 'بائعو طعام محليون وخدمات تموين لكل مناسبة.',
    
    // How It Works
    'howItWorks.title': 'كيف يعمل',
    'howItWorks.subtitle': 'الحصول على الخدمة التي تحتاجها سهل كـ 1-2-3',
    'howItWorks.step1.title': 'ابحث',
    'howItWorks.step1.description': 'تصفح مجموعتنا الواسعة من الخدمات وابحث عما تحتاجه.',
    'howItWorks.step2.title': 'احجز',
    'howItWorks.step2.description': 'اختر مقدم الخدمة المفضل لديك وحدد موعداً يناسبك.',
    'howItWorks.step3.title': 'استمتع',
    'howItWorks.step3.description': 'استرخِ ودع المحترفين الموثوقين يتولون الباقي.',
    
    // Footer
    'footer.tagline': 'نجعل الحياة أسهل، خدمة تلو الأخرى.',
    'footer.contact': 'اتصل بنا',
    'footer.followUs': 'تابعنا',
    'footer.rights': '© 2024 3awani. جميع الحقوق محفوظة.',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('3awani-language');
    return (saved as Language) || 'en';
  });

  const isRTL = language === 'ar';

  useEffect(() => {
    localStorage.setItem('3awani-language', language);
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language, isRTL]);

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isRTL }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
