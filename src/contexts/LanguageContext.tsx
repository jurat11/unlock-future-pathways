import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'en' | 'uz';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Hero section
    'hero.title': 'Get',
    'hero.title.accepted': 'ACCEPTED',
    'hero.title.to': 'to your dream university',
    'hero.subtitle': 'Join the most successful university admission program in Uzbekistan. Work with 3 specialists to maximize your chances of getting accepted to top universities worldwide.',
    'hero.cta': 'Start Your Application',
    'hero.learn': 'Learn More',
    
    // Contact form
    'contact.title.accepted': 'ACCEPTED',
    'contact.title.text': 'ga ariza ber',
    'contact.subtitle': '3 ta mutaxassis bilan ishlab orzuing universitetga kirishga tayyormisan? Bugun arizangni boshla yoki maslahat vaqti belgilay.',
    'contact.form.title': 'Accepted dasturiga ariza ber',
    'contact.form.name': 'Name',
    'contact.form.surname': 'Surname',
    'contact.form.email': 'Email',
    'contact.form.phone': 'Phone Number',
    'contact.form.major': 'Major or Areas Interested',
    'contact.form.education': 'Current Education Status',
    'contact.form.universities': 'List 5 Universities You Wanna Get In',
    'contact.form.contribution': 'Annual Contribution Towards Uni',
    'contact.form.comment': 'Additional Comment',
    'contact.form.submit': 'Arizani yuborish',
    'contact.form.submitting': 'Yuborilmoqda...',
    
    // Navigation
    'nav.about': 'About',
    'nav.courses': 'Courses',
    'nav.testimonials': 'Success Stories',
    'nav.faq': 'FAQ',
    'nav.contact': 'Contact',
    
    // Common
    'common.loading': 'Loading...',
    'common.error': 'Error',
    'common.success': 'Success',
  },
  uz: {
    // Hero section
    'hero.title': 'Orzuing universitetga',
    'hero.title.accepted': 'QABUL',
    'hero.title.to': "bo'lish imkoniyatini qo'lga kirit",
    'hero.subtitle': "O'zbekistondagi eng muvaffaqiyatli universitet qabul dasturiga qo'shil. 3 ta mutaxassis bilan ishlash orqali dunyo bo'ylab eng yaxshi universitetlarga qabul bo'lish imkoniyatingni oshir.",
    'hero.cta': 'Arizangni boshlash',
    'hero.learn': "Ko'proq o'rganing",
    
    // Contact form
    'contact.title.accepted': 'ACCEPTED',
    'contact.title.text': 'ga ariza ber',
    'contact.subtitle': '3 ta mutaxassis bilan ishlab orzuing universitetga kirishga tayyormisan? Bugun arizangni boshla yoki maslahat vaqti belgilay.',
    'contact.form.title': 'Accepted dasturiga ariza ber',
    'contact.form.name': 'Ism',
    'contact.form.surname': 'Familiya',
    'contact.form.email': 'Email',
    'contact.form.phone': 'Telefon raqami',
    'contact.form.major': 'Qiziqish sohasi',
    'contact.form.education': "Hozirgi ta'lim holati",
    'contact.form.universities': 'Kirmoqchi bo\'lgan 5 ta universitet ro\'yxati',
    'contact.form.contribution': 'Yillik moliyaviy hissa',
    'contact.form.comment': "Qo'shimcha izoh",
    'contact.form.submit': 'Arizani yuborish',
    'contact.form.submitting': 'Yuborilmoqda...',
    
    // Navigation
    'nav.about': 'Biz haqimizda',
    'nav.courses': 'Kurslar',
    'nav.testimonials': 'Muvaffaqiyat hikoyalari',
    'nav.faq': 'Savollar',
    'nav.contact': 'Aloqa',
    
    // Common
    'common.loading': 'Yuklanmoqda...',
    'common.error': 'Xatolik',
    'common.success': 'Muvaffaqiyat',
  },
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('uz');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'uz')) {
      setLanguage(savedLanguage);
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};