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
    
    // About section
    'about.title': '',
    'about.title.highlight': 'UNLOCK UZBEKISTAN',
    'about.subtitle': 'Founded in Tashkent in 2022. We started by podcasting with Uzbek students who got into Ivy League schools. Now we offer comprehensive admission help through our "Accepted" program with 50,000+ viewers.',
    'about.values.mission.title': 'Our Mission',
    'about.values.mission.description': 'To help Uzbek students with expert guidance and proven strategies for international university admissions.',
    'about.values.story.title': 'Our Story',
    'about.values.story.description': 'Starting with podcasts featuring students admitted to Ivy League universities, we now support students with full admission services.',
    'about.values.impact.title': 'Community Impact',
    'about.values.impact.description': 'Over 50,000 viewers trust our content. We\'ve helped students get into Chicago, Duke, Carnegie Mellon Qatar, and NYU.',
    'about.values.approach.title': 'Our Approach',
    'about.values.approach.description': 'Three specialists for each student: Strategist for planning, Essay Mentor for writing, and Helper for technical support.',
    'about.why.title': 'Why Choose Accepted?',
    'about.why.expert.title': 'Expert Team',
    'about.why.expert.description': 'Work with 3 specialists - Strategist, Essay Mentor, and Helper for comprehensive coverage.',
    'about.why.system.title': 'Dual-Track System',
    'about.why.system.description': 'Choose your universities or trust our selection with 100% money-back guarantee.',
    'about.why.support.title': 'Complete Support',
    'about.why.support.description': 'From August 1st to final decisions, covering all 16 checklist items.',
    'about.why.success.title': 'Proven Success',
    'about.why.success.description': 'Students have been accepted to top universities like UChicago, Duke, Carnegie Mellon Qatar.',
    'about.stats.viewers': 'Podcast Viewers',
    'about.stats.sat': 'Average SAT Score',
    'about.stats.founded': 'Founded in Tashkent',
    
    // Testimonials section
    'testimonials.title': 'Success',
    'testimonials.title.highlight': 'Stories',
    'testimonials.subtitle': 'Hear from our students who transformed their educational paths and achieved their dreams through our Accepted program.',
    
    // FAQ section
    'faq.title': 'Frequently',
    'faq.title.highlight': 'Asked Questions',
    'faq.subtitle': 'Answers to the most common questions about our Accepted program.',
    'faq.q1.question': 'Who can join the Accepted program?',
    'faq.q1.answer': 'Our program is open to all students who are serious about higher education. Regardless of whether you\'re from rural or urban areas, our program helps you succeed with any background.',
    'faq.q2.question': 'How is this different from free resources?',
    'faq.q2.answer': 'We believe in free education, but the Accepted program offers personal mentoring, live interactive sessions, comprehensive study materials, practice tests, and individual guidance not found in free resources.',
    'faq.q3.question': 'How long does it take to complete the program?',
    'faq.q3.answer': 'The complete program lasts 16 weeks, with 3 sessions per week. Each session builds on the previous one and ensures complete preparation for your admission goals.',
    'faq.q4.question': 'Are there payment plans or scholarships?',
    'faq.q4.answer': 'Yes! We offer flexible payment plans and need-based scholarships for students who demonstrate financial need. Our goal is to make quality education accessible to everyone.',
    'faq.q5.question': 'What if I\'m not satisfied with the program?',
    'faq.q5.answer': 'We offer a 30-day money-back guarantee. If you\'re completely unsatisfied with the program within the first 30 days, we\'ll provide a full refund with no questions asked.',
    'faq.q6.question': 'Will I get help after the program ends?',
    'faq.q6.answer': 'Absolutely! You\'ll have lifetime access to our alumni network, course materials, and can schedule additional mentoring sessions. We\'re committed to your long-term success.',
    'faq.q7.question': 'How do live sessions work?',
    'faq.q7.answer': 'Live sessions are conducted online through our learning platform. They\'re interactive, allowing you to ask questions in real-time. All sessions are recorded so you can review them later.',
    'faq.q8.question': 'What technology do I need for the program?',
    'faq.q8.answer': 'You\'ll need a computer or tablet with internet connection. Our platform works on all modern browsers and we provide technical support to ensure your full participation.',
    
    // Course Details section
    'course.title': 'Complete Admission Package',
    'course.title.highlight': 'Accepted',
    'course.subtitle': 'Our most comprehensive admission program. Work with 3 specialists from August 1st to final decisions. Choose our university selection for 100% money-back guarantee.',
    'course.team.title': 'Your Expert Team',
    'course.team.strategist': 'Strategist',
    'course.team.strategist.description': 'Manages application strategy, creates college lists, plans timelines, helps with positioning and activities.',
    'course.team.essay': 'Essay Mentor',
    'course.team.essay.description': 'Helps develop, draft, and edit ideas to make essays clear, personal, and impactful.',
    'course.team.helper': 'Helper',
    'course.team.helper.description': 'Assists with application forms, financial documents, scheduling, reminders, and other technical tasks.',
    'course.details.title': 'Program Details',
    'course.details.duration': 'Duration',
    'course.details.duration.value': 'Aug 1 - final decisions',
    'course.details.team': 'Team Size',
    'course.details.team.value': '3 specialists per student',
    'course.details.universities': 'Universities',
    'course.details.universities.value': '5 target schools',
    'course.details.support': 'Support Type',
    'course.details.support.value': 'Complete application',
    'course.details.checklist': '16-item student checklist:',
    'course.pricing.badge': 'Applications Open',
    'course.pricing.title': 'Accepted Program',
    'course.pricing.contact': 'Contact',
    'course.pricing.price': 'for Pricing',
    'course.pricing.custom': 'Customized to your needs',
    'course.pricing.apply': 'Apply Now',
    'course.pricing.consultation': 'Schedule Consultation',
    'course.pricing.guarantee': '🛡️ 100% money-back guarantee available • Premium support',
    
    // Footer section
    'footer.description': 'UNLOCK UZBEKISTAN - organization helping Uzbek students get into international universities. Our goal is to help every student achieve their dreams.',
    'footer.quicklinks': 'Quick Links',
    'footer.quicklinks.about': 'About Us',
    'footer.quicklinks.accepted': 'Accepted Program',
    'footer.quicklinks.testimonials': 'Success Stories',
    'footer.quicklinks.contact': 'Contact',
    'footer.quicklinks.blog': 'Blog',
    'footer.support': 'Support',
    'footer.support.center': 'Help Center',
    'footer.support.portal': 'Student Portal',
    'footer.support.payments': 'Payment Methods',
    'footer.support.scholarships': 'Scholarships',
    'footer.support.technical': 'Technical Support',
    'footer.newsletter': 'Stay Updated',
    'footer.newsletter.description': 'Subscribe to be the first to know about programs and educational opportunities.',
    'footer.newsletter.placeholder': 'Your email address',
    'footer.newsletter.spam': 'No spam. Unsubscribe anytime.',
    'footer.copyright': '© 2024 Unlock Uzbekistan. All rights reserved.',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Use',
    'footer.cookies': 'Cookie Policy',
  },
  uz: {
    // Hero section
    'hero.title': 'Orzungizdagi',
    'hero.title.accepted': 'Universitetga Kiring!',
    'hero.subtitle': '"UNLOCK UZBEKISTAN" o\'zining "Accepted" dasturi orqali universitetga kirish bo\'yicha keng qamrovli yo\'l-yo\'riqlar taqdim etadi. Dasturda siz uch mutaxassis — strateg, insho yozish bo\'yicha mentor hamda qabul jarayonida ko\'maklashuvchi xodim bilan ishlash imkoniyatiga ega bo\'lasiz. Biz tanlagan universitetlarga o\'qishga kira olmasangiz, to\'langan mablag\' 100% kafolat bilan qaytariladi.',
    'hero.cta': '"Accepted" dasturi haqida',
    'hero.consultation': 'Ariza topshirish',
    'hero.feature1': 'Har bir talaba uchun uch nafar mutaxassis jalb qilinadi.',
    'hero.feature2': 'Dastur uchun to\'langan mablag\' 100% qaytariladi.',
    'hero.feature3': 'Ariza topshirish jarayonining boshidan oxirigacha yordam ko\'rsatiladi.',
    'hero.feature4': 'Dastur Avgustdan toki qabul natijalari chiqishiga qadar davom etadi',
    'hero.card.text': 'Arizalar 1-Avgustga qadar qabul qilinadi',
    'hero.card.cta': 'Ariza topshirish',
    
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
    
    // About section
    'about.title': '',
    'about.title.highlight': 'UNLOCK UZBEKISTAN',
    'about.subtitle': '2022-yilda Toshkentda tashkil etilgan. Biz Ivy League maktablariga kirgan o\'zbek talabalar bilan podcast qilishdan boshladik. Endi 50,000+ ko\'ruvchi bilan "Accepted" dasturi orqali to\'liq qabul yordamini taklif qilamiz.',
    'about.values.mission.title': 'Maqsadimiz',
    'about.values.mission.description': 'O\'zbekistonlik talabalarga xalqaro universitetlarga kirish jarayonida samarali maslahatlar va usullar orqali ko\'maklashish.',
    'about.values.story.title': 'Hikoyamiz',
    'about.values.story.description': 'Top universitetlarga qabul qilingan talabalar bilan podkastlar olib borib, hozirda qolganlarga ham ushbu jarayonda yordam bermoqdamiz.',
    'about.values.impact.title': 'Jamiyatga ta\'sir',
    'about.values.impact.description': '50,000dan ortiq kuzatuvchi biladiki, biz hozirgacha talabalarga Chicago, Duke, Carnegie Mellon Qatar va NYU universitetlariga kirishda yordam berdik.',
    'about.values.approach.title': 'Yondashuvimiz',
    'about.values.approach.description': 'Har bir talaba uchun uch mutaxassis: rejalashtirish uchun strateg, insho yozish bo\'yicha mentor va arizangizning qolgan qismini tekshirish uchun qabul bo\'yicha tajribali inson.',
    'about.why.title': 'Nega "Accepted"ni tanlash kerak?',
    'about.why.expert.title': 'Mutaxassis Jamoa',
    'about.why.expert.description': '3 ta mutaxassis bilan ishlang - Strategist, Insho Mentori va to\'liq qamrov uchun Yordamchi.',
    'about.why.system.title': 'Ikki Yo\'nalishli Tizim',
    'about.why.system.description': 'Universitetlaringizni tanlang yoki 100% qaytarim kafolati bilan bizning tanlovimizga ishoning.',
    'about.why.support.title': 'To\'liq Qo\'llab-quvvatlash',
    'about.why.support.description': '1-Avgustdan yakuniy qarorgacha, barcha 16 ta chek-list bandlarini qamrab oladi.',
    'about.why.success.title': 'Isbotlangan Muvaffaqiyat',
    'about.why.success.description': 'Talabalar UChicago, Duke, Carnegie Mellon Qatar kabi top universitetlarga qabul bo\'lishdi.',
    'about.stats.viewers': 'Podcast Ko\'ruvchilari',
    'about.stats.sat': 'O\'rtacha SAT Bali',
    'about.stats.founded': 'Toshkentda Tashkil Etilgan',
    
    // Testimonials section
    'testimonials.title': 'Muvaffaqiyat',
    'testimonials.title.highlight': 'hikoyalari',
    'testimonials.subtitle': 'Bizning Accepted dasturi orqali ta\'lim yo\'llarini o\'zgartirib, orzulariga erishgan talabalarimizning hikoyalarini eshiting.',
    
    // FAQ section
    'faq.title': 'Ko\'p beriladigan',
    'faq.title.highlight': 'savollar',
    'faq.subtitle': 'Bizning Accepted dasturi haqida eng ko\'p soraladigan savollarga javoblar.',
    'faq.q1.question': 'Kimlar Accepted dasturiga kirishi mumkin?',
    'faq.q1.answer': 'Bizning dastur oliy ta\'limni jiddiy ko\'radigan barcha talabalarga ochiq. Qishloq yoki shahardan bo\'lishingizdan qat\'iy nazar, dasturimiz har qanday fonda muvaffaqiyat qozonishingizga yordam beradi.',
    'faq.q2.question': 'Bu dastur bepul manbalardan nimasi bilan farq qiladi?',
    'faq.q2.answer': 'Biz bepul ta\'limga ishonamiz, lekin Accepted dasturi shaxsiy mentorlik, jonli interaktiv sessiyalar, to\'liq o\'quv materiallari, test sinovlari va bepul manbalarda topilmaydigan individual yo\'l-yo\'riqni taklif qiladi.',
    'faq.q3.question': 'Dasturni tugatish uchun qancha vaqt kerak?',
    'faq.q3.answer': 'To\'liq dastur 16 hafta davom etadi, haftada 3 ta sessiya bilan. Har bir sessiya oldingi ustiga quriladi va qabul maqsadlaringiz uchun to\'liq tayyorgarlikni ta\'minlaydi.',
    'faq.q4.question': 'To\'lov rejalari yoki stipendiyalar bormi?',
    'faq.q4.answer': 'Ha! Biz moslashuvchan to\'lov rejalarini va moliyaviy ehtiyojini ko\'rsatgan talabalar uchun ehtiyojga asoslangan stipendiyalarni taklif qilamiz. Maqsadimiz sifatli ta\'limni hammaga ochiq qilish.',
    'faq.q5.question': 'Dasturdan norozi bo\'lsam, nima bo\'ladi?',
    'faq.q5.answer': 'Biz 30 kunlik pul qaytarish kafolatini taklif qilamiz. Agar dastlabki 30 kun ichida dasturdan to\'liq norozi bo\'lsangiz, hech qanday savol berilmagan holda to\'liq qaytarib beramiz.',
    'faq.q6.question': 'Dastur tugagandan so\'ng ham yordam olamanmi?',
    'faq.q6.answer': 'Albatta! Sizda bizning bitiruvchilar tarmog\'iga, kurs materiallariga umrbod kirish huquqi bo\'ladi va qo\'shimcha mentorlik sessiyalarini belgilashingiz mumkin. Biz sizning uzoq muddatli muvaffaqiyatingizga sodiqmiz.',
    'faq.q7.question': 'Mashg\'ulotlar qay tartibda va qayerda o\'tkaziladi?',
    'faq.q7.answer': 'Jonli sessiyalar bizning ta\'lim platformamiz orqali onlayn o\'tkaziladi. Ular interaktiv bo\'lib, real vaqtda savol berishingizga imkon beradi. Barcha sessiyalar yozib olinadi, shuning uchun keyinroq ko\'rib chiqishingiz mumkin.',
    'faq.q8.question': 'Dastur uchun qanday texnik qurilma kerak?',
    'faq.q8.answer': 'Sizga internet ulanishi bo\'lgan kompyuter yoki planshet kerak bo\'ladi. Bizning platformamiz barcha zamonaviy brauzerlarda ishlaydi va to\'liq ishtirok etishingizni ta\'minlash uchun texnik yordam beramiz.',
    
    // Course Details section
    'course.title': 'to\'liq qabul paketi',
    'course.title.highlight': 'Accepted',
    'course.subtitle': '"Accepted" dasturi orqali siz uch mutaxassis — strateg, insho yozish bo\'yicha mentor hamda qabul jarayonida ko\'maklashuvchi xodim bilan ishlash imkoniyatiga ega bo\'lasiz.',
    'course.team.title': 'Sening mutaxassis jamoyaing',
    'course.team.strategist': 'Strateg',
    'course.team.strategist.description': 'Ariza strategiyasini boshqaradi, universitetlar ro\'yxatini tuzadi, vaqt jadvalingizga qarab darslar rejalashtiradi.',
    'course.team.essay': 'Insho yozish bo\'yicha mentor',
    'course.team.essay.description': 'Shaxsiy g\'oyangizni ta\'sirli inshoga aylantirish, loyihalash va tahrirlashda yordam beradi.',
    'course.team.helper': 'Yordamchi',
    'course.team.helper.description': 'Ariza shakllari, moliyaviy hujjatlar, eslatmalar va boshqa texnik vazifalar bilan yordam beradi.',
    'course.details.title': 'Dastur tafsilotlari',
    'course.details.duration': 'Davomiyligi',
    'course.details.duration.value': '1-avg - yakuniy qarorlar',
    'course.details.team': 'Jamoa hajmi',
    'course.details.team.value': 'Har talaba uchun 3 mutaxassis',
    'course.details.universities': 'Universitetlar',
    'course.details.universities.value': '5 ta maqsadli maktab',
    'course.details.support': 'Yordam turi',
    'course.details.support.value': 'To\'liq ariza',
    'course.details.checklist': '16 bandli talaba chek-listi:',
    'course.pricing.badge': 'Arizalar Ochiq',
    'course.pricing.title': 'Accepted dasturi',
    'course.pricing.contact': 'Aloqa',
    'course.pricing.price': 'Narx uchun',
    'course.pricing.custom': 'Sening ehtiyojlaringga qarab moslashtirilgan',
    'course.pricing.apply': 'Hoziroq ariza ber',
    'course.pricing.consultation': 'Maslahat vaqti belgilay',
    'course.pricing.guarantee': '🛡️ 100% pul qaytarim kafolati mavjud • Premium yordam',
    
    // Footer section
    'footer.description': 'UNLOCK UZBEKISTAN - o\'zbek talabalariga xalqaro universitetlarga kirishda yordam beruvchi tashkilot. Bizning maqsadimiz har bir talabaning orzularini amalga oshirishga yordam berish.',
    'footer.quicklinks': 'Tezkor linklar',
    'footer.quicklinks.about': 'Biz haqimizda',
    'footer.quicklinks.accepted': 'Accepted dasturi',
    'footer.quicklinks.testimonials': 'Muvaffaqiyat hikoyalari',
    'footer.quicklinks.contact': 'Aloqa',
    'footer.quicklinks.blog': 'Blog',
    'footer.support': 'Yordam',
    'footer.support.center': 'Yordam markazi',
    'footer.support.portal': 'Talaba portali',
    'footer.support.payments': 'To\'lov usullari',
    'footer.support.scholarships': 'Stipendiyalar',
    'footer.support.technical': 'Texnik yordam',
    'footer.newsletter': 'Yangiliklardan xabardor bo\'l',
    'footer.newsletter.description': 'Dasturlar va ta\'lim imkoniyatlari haqida yangiliklarni birinchi bo\'lib bilish uchun obuna bo\'l.',
    'footer.newsletter.placeholder': 'Email adresingiz',
    'footer.newsletter.spam': 'Spam yo\'q. Istalgan vaqtda obunani bekor qiling.',
    'footer.copyright': '© 2024 Unlock Uzbekistan. Barcha huquqlar himoyalangan.',
    'footer.privacy': 'Maxfiylik siyosati',
    'footer.terms': 'Foydalanish shartlari',
    'footer.cookies': 'Cookie siyosati',
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