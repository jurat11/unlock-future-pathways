import React, { useState } from 'react';
import { supabase } from '../integrations/supabase/client';

const Apply: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    nationality: '',
    currentEducation: '',
    intendedMajor: '',
    intendedCountry: '',
    englishProficiency: '',
    workExperience: '',
    additionalInfo: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');
  const [currentLanguage, setCurrentLanguage] = useState(localStorage.getItem('language') || 'en');

  const translations = {
    en: {
      title: 'Apply Now',
      subtitle: 'Start your journey to academic excellence',
      fullName: 'Full Name',
      email: 'Email Address',
      phone: 'Phone Number',
      dateOfBirth: 'Date of Birth',
      nationality: 'Nationality',
      currentEducation: 'Current Education Level',
      intendedMajor: 'Intended Major',
      intendedCountry: 'Intended Study Country',
      englishProficiency: 'English Proficiency Level',
      workExperience: 'Work Experience (if any)',
      additionalInfo: 'Additional Information',
      submit: 'Submit Application',
      submitting: 'Submitting...',
      success: 'Application submitted successfully!',
      error: 'Error submitting application. Please try again.',
      required: 'This field is required',
      educationLevels: {
        highSchool: 'High School',
        bachelor: 'Bachelor\'s Degree',
        master: 'Master\'s Degree',
        phd: 'PhD'
      },
      englishLevels: {
        beginner: 'Beginner',
        intermediate: 'Intermediate',
        advanced: 'Advanced',
        native: 'Native'
      }
    },
    uz: {
      title: 'Ariza berish',
      subtitle: 'Akademik mukammallikka yo\'lingizni boshlang',
      fullName: 'To\'liq ism',
      email: 'Email manzil',
      phone: 'Telefon raqam',
      dateOfBirth: 'Tug\'ilgan sana',
      nationality: 'Millat',
      currentEducation: 'Hozirgi ta\'lim darajasi',
      intendedMajor: 'Tanlangan mutaxassislik',
      intendedCountry: 'O\'qishni niyat qilgan mamlakat',
      englishProficiency: 'Ingliz tili darajasi',
      workExperience: 'Ish tajribasi (agar mavjud bo\'lsa)',
      additionalInfo: 'Qo\'shimcha ma\'lumot',
      submit: 'Arizani yuborish',
      submitting: 'Yuborilmoqda...',
      success: 'Ariza muvaffaqiyatli yuborildi!',
      error: 'Arizani yuborishda xatolik. Iltimos qayta urinib ko\'ring.',
      required: 'Bu maydon to\'ldirilishi shart',
      educationLevels: {
        highSchool: 'O\'rta maktab',
        bachelor: 'Bakalavr',
        master: 'Magistr',
        phd: 'PhD'
      },
      englishLevels: {
        beginner: 'Boshlang\'ich',
        intermediate: 'O\'rta',
        advanced: 'Yuqori',
        native: 'Ona tili'
      }
    }
  };

  const t = translations[currentLanguage as keyof typeof translations];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage('');

    try {
      const { error } = await supabase
        .from('applications')
        .insert([formData]);

      if (error) {
        throw error;
      }

      setMessage(t.success);
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        dateOfBirth: '',
        nationality: '',
        currentEducation: '',
        intendedMajor: '',
        intendedCountry: '',
        englishProficiency: '',
        workExperience: '',
        additionalInfo: ''
      });
    } catch (error) {
      console.error('Error submitting application:', error);
      setMessage(t.error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const toggleLanguage = () => {
    const newLang = currentLanguage === 'en' ? 'uz' : 'en';
    setCurrentLanguage(newLang);
    localStorage.setItem('language', newLang);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-orange-50">
      {/* Navigation */}
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-900">Unlock Uzbekistan</h1>
            </div>
            <div className="flex items-center space-x-4">
              <a href="/" className="text-gray-900 hover:text-orange-500 px-3 py-2 rounded-md text-sm font-medium">Home</a>
              <a href="/admin" className="text-gray-900 hover:text-orange-500 px-3 py-2 rounded-md text-sm font-medium">Admin</a>
              <button 
                onClick={toggleLanguage}
                className="text-sm text-gray-600 hover:text-orange-500"
              >
                {currentLanguage === 'en' ? 'UZ' : 'EN'}
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto py-12 px-4">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">{t.title}</h1>
            <p className="text-xl text-gray-600">{t.subtitle}</p>
          </div>

          {message && (
            <div className={`mb-6 p-4 rounded-lg ${
              message.includes('successfully') || message.includes('muvaffaqiyatli') 
                ? 'bg-green-100 text-green-700' 
                : 'bg-red-100 text-red-700'
            }`}>
              {message}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                  {t.fullName} *
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  {t.email} *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  {t.phone} *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="dateOfBirth" className="block text-sm font-medium text-gray-700 mb-2">
                  {t.dateOfBirth} *
                </label>
                <input
                  type="date"
                  id="dateOfBirth"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="nationality" className="block text-sm font-medium text-gray-700 mb-2">
                  {t.nationality} *
                </label>
                <input
                  type="text"
                  id="nationality"
                  name="nationality"
                  value={formData.nationality}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="currentEducation" className="block text-sm font-medium text-gray-700 mb-2">
                  {t.currentEducation} *
                </label>
                <select
                  id="currentEducation"
                  name="currentEducation"
                  value={formData.currentEducation}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                >
                  <option value="">Select...</option>
                  <option value="highSchool">{t.educationLevels.highSchool}</option>
                  <option value="bachelor">{t.educationLevels.bachelor}</option>
                  <option value="master">{t.educationLevels.master}</option>
                  <option value="phd">{t.educationLevels.phd}</option>
                </select>
              </div>

              <div>
                <label htmlFor="intendedMajor" className="block text-sm font-medium text-gray-700 mb-2">
                  {t.intendedMajor} *
                </label>
                <input
                  type="text"
                  id="intendedMajor"
                  name="intendedMajor"
                  value={formData.intendedMajor}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="intendedCountry" className="block text-sm font-medium text-gray-700 mb-2">
                  {t.intendedCountry} *
                </label>
                <input
                  type="text"
                  id="intendedCountry"
                  name="intendedCountry"
                  value={formData.intendedCountry}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="englishProficiency" className="block text-sm font-medium text-gray-700 mb-2">
                  {t.englishProficiency} *
                </label>
                <select
                  id="englishProficiency"
                  name="englishProficiency"
                  value={formData.englishProficiency}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                >
                  <option value="">Select...</option>
                  <option value="beginner">{t.englishLevels.beginner}</option>
                  <option value="intermediate">{t.englishLevels.intermediate}</option>
                  <option value="advanced">{t.englishLevels.advanced}</option>
                  <option value="native">{t.englishLevels.native}</option>
                </select>
              </div>

              <div>
                <label htmlFor="workExperience" className="block text-sm font-medium text-gray-700 mb-2">
                  {t.workExperience}
                </label>
                <input
                  type="text"
                  id="workExperience"
                  name="workExperience"
                  value={formData.workExperience}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>
            </div>

            <div>
              <label htmlFor="additionalInfo" className="block text-sm font-medium text-gray-700 mb-2">
                {t.additionalInfo}
              </label>
              <textarea
                id="additionalInfo"
                name="additionalInfo"
                value={formData.additionalInfo}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                placeholder="Tell us more about your goals, achievements, or any other relevant information..."
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="enhanced-apply-btn bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-lg text-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? t.submitting : t.submit}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Apply;
