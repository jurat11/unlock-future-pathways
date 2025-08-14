import React, { useState, useEffect } from 'react';
import { supabase } from '../integrations/supabase/client';

interface Application {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  dateOfBirth: string;
  nationality: string;
  currentEducation: string;
  intendedMajor: string;
  intendedCountry: string;
  englishProficiency: string;
  workExperience: string;
  created_at: string;
}

interface DeletedApplication {
  id: number;
  deletedAt: string;
  data: string[];
}

const Admin: React.FC = () => {
  const [applications, setApplications] = useState<Application[]>([]);
  const [deletedApplications, setDeletedApplications] = useState<DeletedApplication[]>([]);
  const [showDeleted, setShowDeleted] = useState(false);
  const [loading, setLoading] = useState(true);
  const [currentLanguage, setCurrentLanguage] = useState(localStorage.getItem('language') || 'en');

  const translations = {
    en: {
      title: 'Admin Dashboard',
      applications: 'Applications',
      deletedApplications: 'Deleted Applications',
      viewDeleted: 'View Deleted Applications',
      hideDeleted: 'Hide Deleted Applications',
      delete: 'Delete',
      restore: 'Restore',
      deleteForever: 'Delete Forever',
      name: 'Name',
      email: 'Email',
      phone: 'Phone',
      country: 'Country',
      major: 'Major',
      date: 'Date',
      actions: 'Actions',
      noApplications: 'No applications found',
      noDeletedApplications: 'No deleted applications',
      confirmDelete: 'Are you sure you want to delete this application?',
      confirmRestore: 'Are you sure you want to restore this application?',
      confirmDeleteForever: 'Are you sure you want to permanently delete this application? This cannot be undone.',
    },
    uz: {
      title: 'Admin paneli',
      applications: 'Arizalar',
      deletedApplications: 'O\'chirilgan arizalar',
      viewDeleted: 'O\'chirilgan arizalarni ko\'rish',
      hideDeleted: 'O\'chirilgan arizalarni yashirish',
      delete: 'O\'chirish',
      restore: 'Qaytarish',
      deleteForever: 'Butunlay o\'chirish',
      name: 'Ism',
      email: 'Email',
      phone: 'Telefon',
      country: 'Mamlakat',
      major: 'Mutaxassislik',
      date: 'Sana',
      actions: 'Amallar',
      noApplications: 'Arizalar topilmadi',
      noDeletedApplications: 'O\'chirilgan arizalar yo\'q',
      confirmDelete: 'Haqiqatan ham bu arizani o\'chirmoqchimisiz?',
      confirmRestore: 'Haqiqatan ham bu arizani qaytarmoqchimisiz?',
      confirmDeleteForever: 'Haqiqatan ham bu arizani butunlay o\'chirmoqchimisiz? Bu amalni bekor qilib bo\'lmaydi.',
    }
  };

  const t = translations[currentLanguage as keyof typeof translations];

  useEffect(() => {
    fetchApplications();
    loadDeletedApplications();
  }, []);

  const fetchApplications = async () => {
    try {
      const { data, error } = await supabase
        .from('applications')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching applications:', error);
      } else {
        setApplications(data || []);
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  const loadDeletedApplications = () => {
    const deleted = JSON.parse(localStorage.getItem('deletedApplications') || '[]');
    setDeletedApplications(deleted);
  };

  const deleteApplication = async (application: Application) => {
    if (confirm(t.confirmDelete)) {
      try {
        // Store in local deleted applications
        const deletedApp: DeletedApplication = {
          id: Date.now(),
          deletedAt: new Date().toISOString(),
          data: [
            application.fullName,
            application.email,
            application.phone,
            application.intendedCountry,
            application.intendedMajor,
            new Date(application.created_at).toLocaleDateString()
          ]
        };

        const updatedDeleted = [...deletedApplications, deletedApp];
        setDeletedApplications(updatedDeleted);
        localStorage.setItem('deletedApplications', JSON.stringify(updatedDeleted));

        // Delete from Supabase
        const { error } = await supabase
          .from('applications')
          .delete()
          .eq('id', application.id);

        if (error) {
          console.error('Error deleting application:', error);
        } else {
          setApplications(applications.filter(app => app.id !== application.id));
          showNotification('Application moved to deleted applications', 'success');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    }
  };

  const restoreApplication = async (index: number) => {
    if (confirm(t.confirmRestore)) {
      const restoredApp = deletedApplications[index];
      const updatedDeleted = deletedApplications.filter((_, i) => i !== index);
      setDeletedApplications(updatedDeleted);
      localStorage.setItem('deletedApplications', JSON.stringify(updatedDeleted));
      showNotification('Application restored (Note: Database restoration not implemented)', 'success');
    }
  };

  const permanentlyDeleteApplication = (index: number) => {
    if (confirm(t.confirmDeleteForever)) {
      const updatedDeleted = deletedApplications.filter((_, i) => i !== index);
      setDeletedApplications(updatedDeleted);
      localStorage.setItem('deletedApplications', JSON.stringify(updatedDeleted));
      showNotification('Application permanently deleted', 'success');
    }
  };

  const showNotification = (message: string, type: 'success' | 'error') => {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `fixed top-4 right-4 p-4 rounded-lg text-white z-50 ${
      type === 'success' ? 'bg-green-500' : 'bg-red-500'
    }`;
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
      notification.remove();
    }, 3000);
  };

  const toggleLanguage = () => {
    const newLang = currentLanguage === 'en' ? 'uz' : 'en';
    setCurrentLanguage(newLang);
    localStorage.setItem('language', newLang);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-900">Unlock Uzbekistan</h1>
            </div>
            <div className="flex items-center space-x-4">
              <a href="/" className="text-gray-900 hover:text-orange-500 px-3 py-2 rounded-md text-sm font-medium">Home</a>
              <a href="/apply" className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-md text-sm font-medium enhanced-apply-btn">Apply Now</a>
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

      <div className="max-w-7xl mx-auto py-8 px-4">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">{t.title}</h1>
          <button
            onClick={() => setShowDeleted(!showDeleted)}
            className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg font-medium"
          >
            {showDeleted ? t.hideDeleted : `${t.viewDeleted} (${deletedApplications.length})`}
          </button>
        </div>

        {!showDeleted ? (
          // Active Applications
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900">{t.applications} ({applications.length})</h2>
            </div>
            
            {applications.length === 0 ? (
              <div className="p-8 text-center text-gray-500">
                {t.noApplications}
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{t.name}</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{t.email}</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{t.phone}</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{t.country}</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{t.major}</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{t.date}</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{t.actions}</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {applications.map((app) => (
                      <tr key={app.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{app.fullName}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{app.email}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{app.phone}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{app.intendedCountry}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{app.intendedMajor}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {new Date(app.created_at).toLocaleDateString()}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <button
                            onClick={() => deleteApplication(app)}
                            className="admin-delete-btn"
                          >
                            {t.delete}
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        ) : (
          // Deleted Applications
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900">{t.deletedApplications} ({deletedApplications.length})</h2>
            </div>
            
            {deletedApplications.length === 0 ? (
              <div className="p-8 text-center text-gray-500">
                {t.noDeletedApplications}
              </div>
            ) : (
              <div className="space-y-4 p-6">
                {deletedApplications.map((app, index) => (
                  <div key={app.id} className="border border-gray-200 rounded-lg p-4 bg-gray-50">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <strong className="text-gray-900">Application #{app.id}</strong>
                        <div className="text-sm text-gray-500 mt-1">
                          Deleted: {new Date(app.deletedAt).toLocaleString()}
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <button
                          onClick={() => restoreApplication(index)}
                          className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded text-sm"
                        >
                          {t.restore}
                        </button>
                        <button
                          onClick={() => permanentlyDeleteApplication(index)}
                          className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm"
                        >
                          {t.deleteForever}
                        </button>
                      </div>
                    </div>
                    <div className="text-sm text-gray-600">
                      {app.data.slice(0, 5).join(' | ')}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Admin;
