// Custom JavaScript fixes for UNLOCK website

(function() {
    'use strict';

    // 1. Scroll to top on navigation
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }

    // Add scroll-to-top to all navigation links
    function initScrollToTop() {
        document.addEventListener('click', function(e) {
            const target = e.target;
            
            // Check if clicked element is a navigation link
            if (target.tagName === 'A' || target.closest('a')) {
                const link = target.tagName === 'A' ? target : target.closest('a');
                const href = link.getAttribute('href');
                
                // If it's an internal navigation link, scroll to top
                if (href && (href.startsWith('/') || href.startsWith('#'))) {
                    setTimeout(scrollToTop, 100);
                }
            }
        });
    }

    // 2. Enhanced language switching with complete translation
    function initLanguageSwitching() {
        let currentLanguage = localStorage.getItem('language') || 'en';
        
        // Translation dictionary
        const translations = {
            en: {
                // Navigation
                'nav.home': 'Home',
                'nav.about': 'About',
                'nav.programs': 'Programs',
                'nav.contact': 'Contact',
                'nav.apply': 'Apply Now',
                
                // Common elements
                'apply.now': 'Apply Now',
                'apply.button': 'Apply Now',
                'submit': 'Submit',
                'contact': 'Contact',
                'about': 'About Us',
                'programs': 'Our Programs',
                'home': 'Home',
                
                // Admin
                'admin.title': 'Admin Dashboard',
                'admin.applications': 'Applications',
                'admin.delete': 'Delete',
            },
            uz: {
                // Navigation
                'nav.home': 'Bosh sahifa',
                'nav.about': 'Biz haqida',
                'nav.programs': 'Dasturlar',
                'nav.contact': 'Aloqa',
                'nav.apply': 'Ariza berish',
                
                // Common elements
                'apply.now': 'Ariza berish',
                'apply.button': 'Ariza berish',
                'submit': 'Yuborish',
                'contact': 'Aloqa',
                'about': 'Biz haqida',
                'programs': 'Bizning dasturlar',
                'home': 'Bosh sahifa',
                
                // Admin
                'admin.title': 'Admin paneli',
                'admin.applications': 'Arizalar',
                'admin.delete': 'O\'chirish',
            }
        };

        function translatePage(language) {
            currentLanguage = language;
            localStorage.setItem('language', language);
            
            // Update navigation links
            document.querySelectorAll('nav a, header a').forEach(link => {
                const text = link.textContent.trim().toLowerCase();
                if (text.includes('home') || text.includes('bosh')) {
                    link.textContent = translations[language]['nav.home'];
                } else if (text.includes('about') || text.includes('biz haq')) {
                    link.textContent = translations[language]['nav.about'];
                } else if (text.includes('program') || text.includes('dastur')) {
                    link.textContent = translations[language]['nav.programs'];
                } else if (text.includes('contact') || text.includes('aloqa')) {
                    link.textContent = translations[language]['nav.contact'];
                }
            });
            
            // Update Apply Now buttons
            document.querySelectorAll('button, a').forEach(btn => {
                const text = btn.textContent.trim().toLowerCase();
                if (text.includes('apply') || text.includes('ariza')) {
                    btn.textContent = translations[language]['nav.apply'];
                }
            });
            
            // Update page headings
            document.querySelectorAll('h1, h2, h3').forEach(heading => {
                const text = heading.textContent.trim().toLowerCase();
                if (text.includes('admin') && text.includes('dashboard')) {
                    heading.textContent = translations[language]['admin.title'];
                } else if (text.includes('applications') || text.includes('arizalar')) {
                    heading.textContent = translations[language]['admin.applications'];
                }
            });
            
            // Update form elements
            document.querySelectorAll('button[type="submit"], input[type="submit"]').forEach(btn => {
                btn.textContent = translations[language]['submit'];
                btn.value = translations[language]['submit'];
            });
            
            // Update language toggle display
            updateLanguageToggle(language);
        }
        
        function updateLanguageToggle(currentLang) {
            document.querySelectorAll('button, span').forEach(el => {
                if (el.textContent === 'UZ' || el.textContent === 'EN' || 
                    el.textContent === 'Uzbek' || el.textContent === 'English') {
                    
                    // Show the opposite language
                    if (currentLang === 'en') {
                        el.textContent = el.textContent.length <= 2 ? 'UZ' : 'Uzbek';
                    } else {
                        el.textContent = el.textContent.length <= 2 ? 'EN' : 'English';
                    }
                }
            });
        }

        // Initialize with saved language
        translatePage(currentLanguage);
        
        document.addEventListener('click', function(e) {
            const target = e.target;
            
            // Check if clicked element is a language toggle
            if (target.textContent === 'UZ' || target.textContent === 'EN' || 
                target.textContent === 'Uzbek' || target.textContent === 'English') {
                
                e.preventDefault();
                
                // Switch language
                const newLanguage = target.textContent === 'UZ' || target.textContent === 'Uzbek' ? 'uz' : 'en';
                translatePage(newLanguage);
                
                // Scroll to top when language changes
                setTimeout(scrollToTop, 100);
                
                // Add visual feedback
                target.style.transform = 'scale(1.1)';
                target.style.background = 'rgba(255, 107, 53, 0.1)';
                setTimeout(() => {
                    target.style.transform = 'scale(1)';
                    target.style.background = '';
                }, 300);
            }
        });
        
        // Re-translate on content changes
        return translatePage;
    }

    // 3. Remove comment-related functionality
    function removeCommentFeatures() {
        // Remove any comment-related elements
        const commentElements = document.querySelectorAll('[class*="comment"], [id*="comment"], .comment-section, .comments-container');
        commentElements.forEach(el => el.remove());
        
        // Remove comment-related buttons or links
        const commentButtons = document.querySelectorAll('button, a');
        commentButtons.forEach(btn => {
            if (btn.textContent.toLowerCase().includes('comment') || 
                btn.textContent.toLowerCase().includes('комментари')) {
                btn.remove();
            }
        });
        
        // Remove any coming soon elements
        const comingSoonElements = document.querySelectorAll('[class*="coming-soon"], [id*="coming-soon"], [class*="comingsoon"], [id*="comingsoon"]');
        comingSoonElements.forEach(el => el.remove());
        
        // Remove coming soon text content and sections
        const allElements = document.querySelectorAll('*');
        allElements.forEach(el => {
            if (el.textContent && (
                el.textContent.toLowerCase().includes('coming soon') ||
                el.textContent.toLowerCase().includes('countdown') ||
                el.textContent.toLowerCase().includes('launch date')
            )) {
                // Only hide if it's primarily a coming soon element
                const text = el.textContent.trim().toLowerCase();
                if (text === 'coming soon' || text.includes('be the first to') || text.includes('get notified')) {
                    el.style.display = 'none';
                }
            }
        });
    }

    // 4. Enhance Apply Now buttons
    function enhanceApplyButtons() {
        const applyButtons = document.querySelectorAll('a[href*="apply"], button');
        applyButtons.forEach(btn => {
            const text = btn.textContent.toLowerCase();
            if (text.includes('apply') || text.includes('ariza')) {
                btn.classList.add('enhanced-apply-btn');
                
                // Add hover effect
                btn.addEventListener('mouseenter', function() {
                    this.style.transform = 'translateY(-2px) scale(1.05)';
                    this.style.boxShadow = '0 10px 25px rgba(255, 107, 53, 0.4)';
                });
                
                btn.addEventListener('mouseleave', function() {
                    this.style.transform = 'translateY(0) scale(1)';
                    this.style.boxShadow = '';
                });
            }
        });
    }

    // 5. Admin panel enhancements with deleted applications tracking
    let deletedApplications = JSON.parse(localStorage.getItem('deletedApplications') || '[]');
    let currentLanguage = localStorage.getItem('language') || 'en';
    
    function enhanceAdminPanel() {
        // Add delete functionality to admin tables
        const adminTables = document.querySelectorAll('table');
        adminTables.forEach(table => {
            const rows = table.querySelectorAll('tbody tr');
            rows.forEach(row => {
                // Check if this is an admin table with applications
                const cells = row.querySelectorAll('td');
                if (cells.length > 3) {
                    // Add delete button if not exists
                    const lastCell = cells[cells.length - 1];
                    if (!lastCell.querySelector('.admin-delete-btn')) {
                        const deleteBtn = document.createElement('button');
                        deleteBtn.textContent = translations[currentLanguage]['admin.delete'] || 'Delete';
                        deleteBtn.className = 'admin-delete-btn';
                        deleteBtn.style.marginLeft = '8px';
                        
                        deleteBtn.addEventListener('click', function() {
                            if (confirm('Are you sure you want to delete this application?')) {
                                // Store application data before deletion
                                const applicationData = {
                                    id: Date.now(),
                                    deletedAt: new Date().toISOString(),
                                    data: Array.from(cells).map(cell => cell.textContent.trim())
                                };
                                
                                deletedApplications.push(applicationData);
                                localStorage.setItem('deletedApplications', JSON.stringify(deletedApplications));
                                
                                // Remove the row
                                row.remove();
                                
                                // Show success message
                                showNotification('Application moved to deleted applications', 'success');
                                
                                // Update deleted applications view if open
                                updateDeletedApplicationsView();
                                
                                console.log('Application deleted and stored:', applicationData);
                            }
                        });
                        
                        lastCell.appendChild(deleteBtn);
                    }
                }
            });
        });
        
        // Add "View Deleted Applications" button to admin panel
        addDeletedApplicationsButton();
    }
    
    function addDeletedApplicationsButton() {
        // Look for admin dashboard container
        const adminContainer = document.querySelector('[class*="admin"], [id*="admin"], h1, h2, h3');
        if (adminContainer && !document.querySelector('.deleted-apps-btn')) {
            const deletedAppsBtn = document.createElement('button');
            deletedAppsBtn.textContent = 'View Deleted Applications (' + deletedApplications.length + ')';
            deletedAppsBtn.className = 'deleted-apps-btn enhanced-apply-btn';
            deletedAppsBtn.style.margin = '10px';
            deletedAppsBtn.style.backgroundColor = '#6b7280';
            
            deletedAppsBtn.addEventListener('click', function() {
                showDeletedApplicationsModal();
            });
            
            // Insert after the admin title
            if (adminContainer.tagName.startsWith('H')) {
                adminContainer.parentNode.insertBefore(deletedAppsBtn, adminContainer.nextSibling);
            } else {
                adminContainer.appendChild(deletedAppsBtn);
            }
        }
    }
    
    function showDeletedApplicationsModal() {
        // Remove existing modal if present
        const existingModal = document.querySelector('.deleted-apps-modal');
        if (existingModal) {
            existingModal.remove();
        }
        
        // Create modal
        const modal = document.createElement('div');
        modal.className = 'deleted-apps-modal';
        modal.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.5);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 10000;
        `;
        
        const modalContent = document.createElement('div');
        modalContent.style.cssText = `
            background: white;
            padding: 20px;
            border-radius: 10px;
            max-width: 90%;
            max-height: 80%;
            overflow-y: auto;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
        `;
        
        modalContent.innerHTML = `
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
                <h2 style="margin: 0; color: #333;">Deleted Applications (${deletedApplications.length})</h2>
                <button class="close-modal-btn" style="background: #ef4444; color: white; border: none; padding: 8px 12px; border-radius: 5px; cursor: pointer;">×</button>
            </div>
            <div class="deleted-apps-list">
                ${deletedApplications.length === 0 ? 
                    '<p style="text-align: center; color: #666;">No deleted applications</p>' :
                    deletedApplications.map((app, index) => `
                        <div style="border: 1px solid #e5e7eb; padding: 15px; margin-bottom: 10px; border-radius: 8px; background: #f9fafb;">
                            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
                                <strong>Application #${app.id}</strong>
                                <div>
                                    <small style="color: #666;">Deleted: ${new Date(app.deletedAt).toLocaleString()}</small>
                                    <button onclick="restoreApplication(${index})" style="margin-left: 10px; background: #10b981; color: white; border: none; padding: 4px 8px; border-radius: 4px; cursor: pointer; font-size: 12px;">Restore</button>
                                    <button onclick="permanentlyDeleteApplication(${index})" style="margin-left: 5px; background: #ef4444; color: white; border: none; padding: 4px 8px; border-radius: 4px; cursor: pointer; font-size: 12px;">Delete Forever</button>
                                </div>
                            </div>
                            <div style="font-size: 14px; color: #555;">
                                ${app.data.slice(0, 3).join(' | ')}
                            </div>
                        </div>
                    `).join('')
                }
            </div>
        `;
        
        modal.appendChild(modalContent);
        document.body.appendChild(modal);
        
        // Close modal functionality
        const closeBtn = modal.querySelector('.close-modal-btn');
        closeBtn.addEventListener('click', () => modal.remove());
        modal.addEventListener('click', (e) => {
            if (e.target === modal) modal.remove();
        });
    }
    
    function updateDeletedApplicationsView() {
        const deletedAppsBtn = document.querySelector('.deleted-apps-btn');
        if (deletedAppsBtn) {
            deletedAppsBtn.textContent = 'View Deleted Applications (' + deletedApplications.length + ')';
        }
    }
    
    // Global functions for restore/delete actions
    window.restoreApplication = function(index) {
        if (confirm('Restore this application?')) {
            const restoredApp = deletedApplications.splice(index, 1)[0];
            localStorage.setItem('deletedApplications', JSON.stringify(deletedApplications));
            showNotification('Application restored successfully', 'success');
            // Close and reopen modal to refresh
            document.querySelector('.deleted-apps-modal').remove();
            showDeletedApplicationsModal();
            updateDeletedApplicationsView();
        }
    };
    
    window.permanentlyDeleteApplication = function(index) {
        if (confirm('Permanently delete this application? This cannot be undone.')) {
            deletedApplications.splice(index, 1);
            localStorage.setItem('deletedApplications', JSON.stringify(deletedApplications));
            showNotification('Application permanently deleted', 'success');
            // Close and reopen modal to refresh
            document.querySelector('.deleted-apps-modal').remove();
            showDeletedApplicationsModal();
            updateDeletedApplicationsView();
        }
    };
    
    function showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 12px 20px;
            background: ${type === 'success' ? '#10b981' : '#3b82f6'};
            color: white;
            border-radius: 8px;
            z-index: 10001;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
            font-weight: 500;
        `;
        notification.textContent = message;
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.remove();
        }, 3000);
    }

    // 6. Initialize everything when DOM is ready
    function init() {
        initScrollToTop();
        const translatePage = initLanguageSwitching();
        removeCommentFeatures();
        enhanceApplyButtons();
        enhanceAdminPanel();
        
        // Store translate function globally for reuse
        window.unlockTranslatePage = translatePage;
        
        console.log('UNLOCK custom fixes loaded successfully');
    }

    // Run initialization
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    // Re-run enhancements when new content is loaded (for SPA)
    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
                setTimeout(() => {
                    removeCommentFeatures();
                    enhanceApplyButtons();
                    enhanceAdminPanel();
                    
                    // Re-apply translations
                    if (window.unlockTranslatePage) {
                        const currentLang = localStorage.getItem('language') || 'en';
                        window.unlockTranslatePage(currentLang);
                    }
                }, 100);
            }
        });
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true
    });

})();
