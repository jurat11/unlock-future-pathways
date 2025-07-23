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
    'hero.title': 'Get Into Your',
    'hero.title.accepted': 'Dream University!',
    'hero.subtitle': 'Get UNLOCK UZBEKISTAN\'s most comprehensive admission package. Work with 3 specialists: Strategist, Essay Mentor, and Helper. Choose our university selection or get 100% money-back guarantee.',
    'hero.cta': 'Apply to Accepted',
    'hero.consultation': 'Schedule Consultation',
    'hero.feature1': '3 specialists for each student',
    'hero.feature2': '100% Money-Back Guarantee*',
    'hero.feature3': 'Complete application assistance',
    'hero.feature4': 'August 1st to Final Decision',
    'hero.card.text': 'Applications start',
    'hero.card.date': 'August 1st, 2025',
    'hero.card.cta': 'Get Started',
    
    // Contact form
    'contact.title.accepted': 'ACCEPTED',
    'contact.title.text': 'Apply Now',
    'contact.subtitle': 'Ready to work with 3 specialists to get into your dream university? Start your application today or schedule a consultation.',
    'contact.form.title': 'Apply to Accepted Program',
    'contact.form.name': 'Name',
    'contact.form.surname': 'Surname',
    'contact.form.email': 'Email',
    'contact.form.phone': 'Phone Number',
    'contact.form.major': 'Major or Areas Interested',
    'contact.form.education': 'Current Education Status',
    'contact.form.universities': 'List 5 Universities You Want to Get Into',
    'contact.form.contribution': 'Annual Contribution Towards University',
    'contact.form.comment': 'Additional Comment',
    'contact.form.submit': 'Submit Application',
    'contact.form.submitting': 'Submitting...',
    'contact.form.placeholder.name': 'Your first name',
    'contact.form.placeholder.surname': 'Your last name',
    'contact.form.placeholder.email': 'your.email@example.com',
    'contact.form.placeholder.phone': '+998 90 123 45 67',
    'contact.form.placeholder.major': 'e.g., Computer Science, Medicine, Business',
    'contact.form.placeholder.education': 'e.g., Grade 11, High School Graduate, University Transfer',
    'contact.form.placeholder.universities': 'Please list your top 5 university choices...',
    'contact.form.placeholder.contribution': 'e.g., $50,000, Full scholarship needed, etc.',
    'contact.form.placeholder.comment': 'Tell us about your academic background, extracurricular activities, and goals...',
    'contact.info.location.title': 'Our Location',
    'contact.info.location.address': 'Tashkent, Uzbekistan',
    'contact.info.location.description': 'UNLOCK UZBEKISTAN headquarters. We serve students nationwide who want to apply to universities in the US, UK, Europe, and Asia.',
    'contact.info.phone.title': 'Phone',
    'contact.info.phone.number': '+998 90 123 45 67',
    'contact.info.phone.description': 'Call us to schedule your Accepted program consultation.',
    'contact.info.email.title': 'Email',
    'contact.info.email.address': 'accepted@unlocku.uz',
    'contact.info.email.description': 'Send us your application questions via email and we\'ll respond within 24 hours.',
    'contact.info.hours.title': 'Working Hours',
    'contact.info.hours.time': 'Mon - Fri: 9:00 - 18:00',
    'contact.info.hours.description': 'We are available during business hours for consultations and application assistance.',
    'contact.cta.title': 'Ready to Get Accepted?',
    'contact.cta.description': 'Applications start August 1st, 2025. Get priority consultation with early advice.',
    'contact.cta.button': 'Get Priority Access',
    'contact.form.error.required': 'Please fill in all required fields.',
    'contact.form.error.submit': 'Error submitting application. Please try again.',
    'contact.form.success.title': 'Success!',
    'contact.form.success.description': 'Your application has been submitted! We will contact you within 24 hours.',
    
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
    'hero.title': 'Orzuingdagi',
    'hero.title.accepted': 'Universitetga Kir!',
    'hero.subtitle': 'UNLOCK UZBEKISTAN ning eng to\'liq qabul paketini ol. 3 ta mutaxassis bilan ishla: Strategist, Insho Mentori va Yordamchi. Bizning universitet tanlovimizni tanla yoki 100% pul qaytarim kafolatini ol.',
    'hero.cta': 'Accepted ga ariza ber',
    'hero.consultation': 'Maslahat vaqti belgilay',
    'hero.feature1': 'Har bir talaba uchun 3 ta mutaxassis',
    'hero.feature2': '100% Pul Qaytarim Kafolati*',
    'hero.feature3': 'To\'liq ariza yordami',
    'hero.feature4': '1-Avgustdan Yakuniy Qarorga',
    'hero.card.text': 'Arizalar boshlanadi',
    'hero.card.date': '1-Avgust, 2025',
    'hero.card.cta': 'Boshlash',
    
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
    'contact.form.placeholder.name': 'Ismingiz',
    'contact.form.placeholder.surname': 'Familiyangiz',
    'contact.form.placeholder.email': 'your.email@example.com',
    'contact.form.placeholder.phone': '+998 90 123 45 67',
    'contact.form.placeholder.major': 'masalan: Informatika, Tibbiyot, Biznes',
    'contact.form.placeholder.education': 'masalan: 11-sinf, Maktabni bitirgan, Universitetdan o\'tish',
    'contact.form.placeholder.universities': 'Top 5 ta universitet tanlovingizni yozing...',
    'contact.form.placeholder.contribution': 'masalan: $50,000, To\'liq stipendiya kerak, va h.k.',
    'contact.form.placeholder.comment': 'O\'qish tarixingiz, qo\'shimcha faoliyatingiz va maqsadlaringiz haqida ayting...',
    'contact.info.location.title': 'Bizning joylashuvimiz',
    'contact.info.location.address': 'Toshkent, O\'zbekiston',
    'contact.info.location.description': 'UNLOCK UZBEKISTAN bosh ofisi. Biz AQSh, Buyuk Britaniya, Yevropa va Osiyodagi universitetlarga ariza berishni istagan butun mamlakat bo\'ylab talabalarga xizmat ko\'rsatamiz.',
    'contact.info.phone.title': 'Telefon',
    'contact.info.phone.number': '+998 90 123 45 67',
    'contact.info.phone.description': 'Accepted dasturi maslahatini rejalashtirish uchun bizga qo\'ng\'iroq qiling.',
    'contact.info.email.title': 'Email',
    'contact.info.email.address': 'accepted@unlocku.uz',
    'contact.info.email.description': 'Ariza savollaringizni bizga emailda yuboring va biz 24 soat ichida javob beramiz.',
    'contact.info.hours.title': 'Ish vaqti',
    'contact.info.hours.time': 'Dush - Jum: 9:00 - 18:00',
    'contact.info.hours.description': 'Biz ish vaqtida maslahat va ariza yordami uchun mavjudmiz.',
    'contact.cta.title': 'Qabul bo\'lishga tayyormisan?',
    'contact.cta.description': '2025-yil 1-avgustdan boshlab arizalar. Erta maslahat bilan ustuvor yo\'lni ol.',
    'contact.cta.button': 'Ustuvor yo\'lni ol',
    'contact.form.error.required': 'Iltimos, barcha majburiy maydonlarni to\'ldiring.',
    'contact.form.error.submit': 'Arizani yuborishda xatolik yuz berdi. Qaytadan urinib ko\'ring.',
    'contact.form.success.title': 'Muvaffaqiyat!',
    'contact.form.success.description': 'Arizangiz yuborildi! Biz 24 soat ichida sizga aloqaga chiqamiz.',
    
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