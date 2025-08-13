// UNLOCK Production Fixes - All Features
(function() {
    'use strict';
    
    console.log('🔓 UNLOCK Production Fixes Loading...');
    
    // 1. Scroll to top functionality
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }
    
    // 2. Complete language switching system
    function initLanguageSwitching() {
        let currentLanguage = localStorage.getItem('language') || 'en';
        
        const translations = {
            en: {
                // Navigation
                'home': 'Home',
                'about': 'About Us',
                'programs': 'Programs',
                'contact': 'Contact',
                'apply': 'Apply Now',
                
                // Common buttons
                'apply_now': 'Apply Now',
                'submit': 'Submit',
                'send': 'Send',
                'save': 'Save',
                'cancel': 'Cancel',
                'edit': 'Edit',
                'delete': 'Delete',
                'view': 'View',
                'back': 'Back',
                
                // Admin panel
                'admin_dashboard': 'Admin Dashboard',
                'view_applications': 'View Applications',
                'deleted_applications': 'Deleted Applications',
                'application_details': 'Application Details',
                'status': 'Status',
                'actions': 'Actions',
                
                // Form fields
                'first_name': 'First Name',
                'last_name': 'Last Name',
                'email': 'Email',
                'phone': 'Phone',
                'message': 'Message',
                'required': 'Required',
                
                // Status messages
                'success': 'Success',
                'error': 'Error',
                'loading': 'Loading...',
                'please_wait': 'Please wait...',
            },
            uz: {
                // Navigation
                'home': 'Bosh sahifa',
                'about': 'Biz haqida',
                'programs': 'Dasturlar',
                'contact': 'Aloqa',
                'apply': 'Ariza berish',
                
                // Common buttons
                'apply_now': 'Ariza berish',
                'submit': 'Yuborish',
                'send': 'Yuborish',
                'save': 'Saqlash',
                'cancel': 'Bekor qilish',
                'edit': 'Tahrirlash',
                'delete': 'O\'chirish',
                'view': 'Ko\'rish',
                'back': 'Orqaga',
                
                // Admin panel
                'admin_dashboard': 'Admin paneli',
                'view_applications': 'Arizalarni ko\'rish',
                'deleted_applications': 'O\'chirilgan arizalar',
                'application_details': 'Ariza tafsilotlari',
                'status': 'Holat',
                'actions': 'Harakatlar',
                
                // Form fields
                'first_name': 'Ism',
                'last_name': 'Familiya',
                'email': 'Elektron pochta',
                'phone': 'Telefon',
                'message': 'Xabar',
                'required': 'Majburiy',
                
                // Status messages
                'success': 'Muvaffaqiyat',
                'error': 'Xato',
                'loading': 'Yuklanmoqda...',
                'please_wait': 'Iltimos kuting...',
            }
        };

        function translatePage(language) {
            currentLanguage = language;
            localStorage.setItem('language', language);
            
            console.log(`🌐 Translating to: ${language}`);
            
            // Translate navigation links
            document.querySelectorAll('nav a, header a, .nav-link').forEach(link => {
                const text = link.textContent.trim().toLowerCase();
                
                if (text.includes('home') || text.includes('bosh')) {
                    link.textContent = translations[language]['home'];
                } else if (text.includes('about') || text.includes('biz')) {
                    link.textContent = translations[language]['about'];
                } else if (text.includes('program') || text.includes('dastur')) {
                    link.textContent = translations[language]['programs'];
                } else if (text.includes('contact') || text.includes('aloqa')) {
                    link.textContent = translations[language]['contact'];
                }
            });
            
            // Translate buttons
            document.querySelectorAll('button, a[role="button"], .btn').forEach(btn => {
                const text = btn.textContent.trim().toLowerCase();
                
                if (text.includes('apply') || text.includes('ariza')) {
                    btn.textContent = translations[language]['apply_now'];
                } else if (text.includes('submit') || text.includes('yuborish')) {
                    btn.textContent = translations[language]['submit'];
                } else if (text.includes('delete') || text.includes('o\'chir')) {
                    btn.textContent = translations[language]['delete'];
                } else if (text.includes('edit') || text.includes('tahrir')) {
                    btn.textContent = translations[language]['edit'];
                } else if (text.includes('view') || text.includes('ko\'r')) {
                    btn.textContent = translations[language]['view'];
                } else if (text.includes('back') || text.includes('orqa')) {
                    btn.textContent = translations[language]['back'];
                }
            });
            
            // Translate headings
            document.querySelectorAll('h1, h2, h3, h4, h5, h6').forEach(heading => {
                const text = heading.textContent.trim().toLowerCase();
                
                if (text.includes('admin') && text.includes('dashboard')) {
                    heading.textContent = translations[language]['admin_dashboard'];
                } else if (text.includes('view') && text.includes('applications')) {
                    heading.textContent = translations[language]['view_applications'];
                } else if (text.includes('deleted') && text.includes('applications')) {
                    heading.textContent = translations[language]['deleted_applications'];
                }
            });
            
            // Translate form labels
            document.querySelectorAll('label, .form-label').forEach(label => {
                const text = label.textContent.trim().toLowerCase();
                
                if (text.includes('first name') || text.includes('ism')) {
                    label.textContent = translations[language]['first_name'];
                } else if (text.includes('last name') || text.includes('familiya')) {
                    label.textContent = translations[language]['last_name'];
                } else if (text.includes('email') || text.includes('pochta')) {
                    label.textContent = translations[language]['email'];
                } else if (text.includes('phone') || text.includes('telefon')) {
                    label.textContent = translations[language]['phone'];
                }
            });
            
            // Update language toggle display
            updateLanguageToggle(language);
        }
        
        function updateLanguageToggle(currentLang) {
            document.querySelectorAll('.language-toggle, [class*="lang"]').forEach(toggle => {
                if (toggle.textContent === 'EN' || toggle.textContent === 'UZ' || 
                    toggle.textContent === 'English' || toggle.textContent === 'Uzbek') {
                    
                    // Show the opposite language
                    if (currentLang === 'en') {
                        toggle.textContent = toggle.textContent.length <= 2 ? 'UZ' : 'Uzbek';
                    } else {
                        toggle.textContent = toggle.textContent.length <= 2 ? 'EN' : 'English';
                    }
                }
            });
        }

        // Initialize with saved language
        translatePage(currentLanguage);
        
        // Language toggle handler
        document.addEventListener('click', function(e) {
            const target = e.target;
            
            // Check if clicked element is a language toggle
            if (target.textContent === 'UZ' || target.textContent === 'EN' || 
                target.textContent === 'Uzbek' || target.textContent === 'English' ||
                target.classList.contains('language-toggle') ||
                target.closest('.language-toggle')) {
                
                e.preventDefault();
                
                // Determine new language
                const newLanguage = target.textContent === 'UZ' || target.textContent === 'Uzbek' ? 'uz' : 'en';
                translatePage(newLanguage);
                
                // Scroll to top and add visual feedback
                setTimeout(scrollToTop, 100);
                
                target.style.transform = 'scale(1.1)';
                target.style.background = 'rgba(255, 107, 53, 0.2)';
                setTimeout(() => {
                    target.style.transform = '';
                    target.style.background = '';
                }, 300);
            }
        });
        
        return translatePage;
    }
    
    // 3. Remove comment and coming soon features
    function removeUnwantedFeatures() {
        // Hide comment elements
        const commentSelectors = [
            '[class*="comment"]', '[id*="comment"]', 
            '.comment-section', '.comments-container', 
            '.comment-form', '.comment-list'
        ];
        
        commentSelectors.forEach(selector => {
            document.querySelectorAll(selector).forEach(el => {
                el.style.display = 'none';
            });
        });
        
        // Hide coming soon elements
        const comingSoonSelectors = [
            '.coming-soon', '#coming-soon', '.comingsoon', '#comingsoon',
            '[class*="coming-soon"]', '[id*="coming-soon"]'
        ];
        
        comingSoonSelectors.forEach(selector => {
            document.querySelectorAll(selector).forEach(el => {
                el.style.display = 'none';
            });
        });
        
        // Ensure main content is visible
        const root = document.querySelector('#root');
        if (root) {
            root.style.display = 'block';
            root.style.visibility = 'visible';
            root.style.opacity = '1';
        }
    }
    
    // 4. Enhanced Apply buttons with brighter colors
    function enhanceApplyButtons() {
        const applyButtons = document.querySelectorAll('a[href*="apply"], button, .btn');
        
        applyButtons.forEach(btn => {
            const text = btn.textContent.toLowerCase();
            if (text.includes('apply') || text.includes('ariza') || text.includes('submit') || text.includes('yuborish')) {
                // Apply enhanced styling
                btn.style.cssText += `
                    background: linear-gradient(135deg, #ff6b35 0%, #ff8c42 100%) !important;
                    color: white !important;
                    font-weight: 600 !important;
                    transition: all 0.3s ease !important;
                    border: none !important;
                `;
                
                // Enhanced hover effect
                btn.addEventListener('mouseenter', function() {
                    this.style.cssText += `
                        background: linear-gradient(135deg, #ff5722 0%, #ff6b35 100%) !important;
                        color: white !important;
                        box-shadow: 0 8px 20px rgba(255, 107, 53, 0.4) !important;
                        transform: translateY(-2px) !important;
                    `;
                });
                
                btn.addEventListener('mouseleave', function() {
                    this.style.cssText += `
                        background: linear-gradient(135deg, #ff6b35 0%, #ff8c42 100%) !important;
                        color: white !important;
                        box-shadow: none !important;
                        transform: none !important;
                    `;
                });
                
                // Enhanced pressed effect (brighter and more visible)
                btn.addEventListener('mousedown', function() {
                    this.style.cssText += `
                        background: linear-gradient(135deg, #e64a19 0%, #ff5722 100%) !important;
                        color: white !important;
                        transform: translateY(0px) scale(0.98) !important;
                        box-shadow: 0 4px 12px rgba(255, 107, 53, 0.6) !important;
                    `;
                });
                
                btn.addEventListener('mouseup', function() {
                    this.style.cssText += `
                        background: linear-gradient(135deg, #ff5722 0%, #ff6b35 100%) !important;
                        color: white !important;
                        transform: translateY(-2px) !important;
                        box-shadow: 0 8px 20px rgba(255, 107, 53, 0.4) !important;
                    `;
                });
            }
        });
    }
    
    // 5. Complete Admin panel with delete functionality
    function enhanceAdminPanel() {
        // Only run on admin pages
        if (!window.location.pathname.includes('admin') && !window.location.pathname.includes('unlockadmform')) {
            return;
        }
        
        // Storage for deleted applications
        if (!window.deletedApplications) {
            window.deletedApplications = JSON.parse(localStorage.getItem('deletedApplications') || '[]');
        }
        
        // Create deleted applications section
        function createDeletedApplicationsSection() {
            if (document.getElementById('deleted-applications-section')) return;
            
            const adminContainer = document.querySelector('main, .admin-container, #root');
            if (!adminContainer) return;
            
            const deletedSection = document.createElement('div');
            deletedSection.id = 'deleted-applications-section';
            deletedSection.style.cssText = `
                margin-top: 40px;
                padding: 20px;
                border: 1px solid #e5e7eb;
                border-radius: 8px;
                background-color: #f9fafb;
                display: none;
            `;
            
            deletedSection.innerHTML = `
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
                    <h2 style="color: #374151; font-size: 1.5rem; font-weight: 600; margin: 0;">
                        🗑️ Deleted Applications
                    </h2>
                    <button id="close-deleted-section" style="
                        background: #6b7280;
                        color: white;
                        border: none;
                        padding: 8px 16px;
                        border-radius: 4px;
                        cursor: pointer;
                    ">Close</button>
                </div>
                <div id="deleted-applications-list" style="min-height: 100px; max-height: 400px; overflow-y: auto;">
                    <p style="color: #6b7280; font-style: italic; text-align: center;">No deleted applications.</p>
                </div>
                <div style="margin-top: 16px; display: flex; gap: 12px;">
                    <button id="clear-all-deleted" style="
                        background-color: #dc2626;
                        color: white;
                        padding: 8px 16px;
                        border-radius: 6px;
                        border: none;
                        cursor: pointer;
                        font-weight: 500;
                    ">Clear All</button>
                    <button id="export-deleted" style="
                        background-color: #059669;
                        color: white;
                        padding: 8px 16px;
                        border-radius: 6px;
                        border: none;
                        cursor: pointer;
                        font-weight: 500;
                    ">Export List</button>
                </div>
            `;
            
            adminContainer.appendChild(deletedSection);
            
            // Add event listeners
            document.getElementById('close-deleted-section').addEventListener('click', () => {
                deletedSection.style.display = 'none';
            });
            
            document.getElementById('clear-all-deleted').addEventListener('click', () => {
                if (confirm('Are you sure you want to permanently clear all deleted applications?')) {
                    window.deletedApplications = [];
                    localStorage.setItem('deletedApplications', '[]');
                    updateDeletedApplicationsList();
                }
            });
            
            document.getElementById('export-deleted').addEventListener('click', exportDeletedApplications);
        }
        
        // Show deleted applications section
        function showDeletedApplications() {
            const section = document.getElementById('deleted-applications-section');
            if (section) {
                section.style.display = 'block';
                updateDeletedApplicationsList();
            }
        }
        
        // Update deleted applications list
        function updateDeletedApplicationsList() {
            const listContainer = document.getElementById('deleted-applications-list');
            if (!listContainer) return;
            
            if (window.deletedApplications.length === 0) {
                listContainer.innerHTML = '<p style="color: #6b7280; font-style: italic; text-align: center;">No deleted applications.</p>';
                return;
            }
            
            listContainer.innerHTML = window.deletedApplications.map((app, index) => `
                <div style="
                    padding: 16px;
                    border: 1px solid #d1d5db;
                    border-radius: 6px;
                    margin-bottom: 12px;
                    background-color: white;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                ">
                    <div style="flex: 1;">
                        <div style="font-weight: 600; color: #111827; margin-bottom: 4px;">
                            ${app.name || 'Unknown Name'}
                        </div>
                        <div style="color: #6b7280; font-size: 0.875rem; margin-bottom: 4px;">
                            📧 ${app.email || 'No email'}
                        </div>
                        <div style="color: #6b7280; font-size: 0.75rem;">
                            🗑️ Deleted: ${app.deletedAt}
                        </div>
                    </div>
                    <div style="display: flex; gap: 8px;">
                        <button onclick="window.restoreApplication(${index})" style="
                            background-color: #059669;
                            color: white;
                            padding: 6px 12px;
                            border-radius: 4px;
                            border: none;
                            cursor: pointer;
                            font-size: 0.875rem;
                        ">Restore</button>
                        <button onclick="window.permanentlyDeleteApplication(${index})" style="
                            background-color: #dc2626;
                            color: white;
                            padding: 6px 12px;
                            border-radius: 4px;
                            border: none;
                            cursor: pointer;
                            font-size: 0.875rem;
                        ">Permanent Delete</button>
                    </div>
                </div>
            `).join('');
        }
        
        // Restore application
        window.restoreApplication = function(index) {
            if (confirm('Restore this application to the main list?')) {
                const restoredApp = window.deletedApplications.splice(index, 1)[0];
                localStorage.setItem('deletedApplications', JSON.stringify(window.deletedApplications));
                updateDeletedApplicationsList();
                console.log('Application restored:', restoredApp);
                // In a real application, you would add it back to the database
            }
        };
        
        // Permanently delete application
        window.permanentlyDeleteApplication = function(index) {
            if (confirm('Permanently delete this application? This action cannot be undone.')) {
                window.deletedApplications.splice(index, 1);
                localStorage.setItem('deletedApplications', JSON.stringify(window.deletedApplications));
                updateDeletedApplicationsList();
            }
        };
        
        // Export deleted applications
        function exportDeletedApplications() {
            if (window.deletedApplications.length === 0) {
                alert('No deleted applications to export.');
                return;
            }
            
            const csvContent = 'data:text/csv;charset=utf-8,' + 
                'Name,Email,Deleted At\\n' +
                window.deletedApplications.map(app => 
                    `"${app.name || 'Unknown'}","${app.email || 'No email'}","${app.deletedAt}"`
                ).join('\\n');
            
            const encodedUri = encodeURI(csvContent);
            const link = document.createElement('a');
            link.setAttribute('href', encodedUri);
            link.setAttribute('download', 'deleted_applications.csv');
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
        
        // Add "View Deleted Applications" button
        function addViewDeletedButton() {
            if (document.getElementById('view-deleted-btn')) return;
            
            const adminHeader = document.querySelector('h1, h2, .admin-header');
            if (!adminHeader) return;
            
            const buttonContainer = document.createElement('div');
            buttonContainer.style.cssText = 'margin: 20px 0; display: flex; gap: 12px; align-items: center;';
            
            buttonContainer.innerHTML = `
                <button id="view-deleted-btn" style="
                    background-color: #6b7280;
                    color: white;
                    padding: 10px 20px;
                    border-radius: 6px;
                    border: none;
                    cursor: pointer;
                    font-weight: 500;
                    display: flex;
                    align-items: center;
                    gap: 8px;
                ">
                    <span>🗑️</span>
                    <span>View Deleted Applications</span>
                    <span id="deleted-count" style="
                        background-color: rgba(255,255,255,0.2);
                        padding: 2px 8px;
                        border-radius: 12px;
                        font-size: 0.75rem;
                    ">${window.deletedApplications.length}</span>
                </button>
            `;
            
            adminHeader.parentNode.insertBefore(buttonContainer, adminHeader.nextSibling);
            
            document.getElementById('view-deleted-btn').addEventListener('click', showDeletedApplications);
        }
        
        // Add delete buttons to application rows
        function addDeleteButtons() {
            const tables = document.querySelectorAll('table');
            
            tables.forEach(table => {
                // Add header if not exists
                const headerRow = table.querySelector('thead tr, tr:first-child');
                if (headerRow && !headerRow.querySelector('.actions-header')) {
                    const actionsHeader = document.createElement('th');
                    actionsHeader.className = 'actions-header';
                    actionsHeader.textContent = 'Actions';
                    actionsHeader.style.cssText = 'padding: 12px; text-align: center; font-weight: 600;';
                    headerRow.appendChild(actionsHeader);
                }
                
                // Add delete buttons to rows
                const rows = table.querySelectorAll('tbody tr, tr:not(:first-child)');
                rows.forEach(row => {
                    if (row.querySelector('.delete-btn')) return;
                    
                    const cells = row.querySelectorAll('td');
                    if (cells.length === 0) return;
                    
                    const actionsCell = document.createElement('td');
                    actionsCell.style.cssText = 'padding: 12px; text-align: center;';
                    
                    const deleteBtn = document.createElement('button');
                    deleteBtn.className = 'delete-btn admin-delete-btn';
                    deleteBtn.textContent = 'Delete';
                    deleteBtn.style.cssText = `
                        background-color: #ef4444;
                        color: white;
                        padding: 6px 12px;
                        border-radius: 4px;
                        border: none;
                        font-size: 0.875rem;
                        cursor: pointer;
                        transition: background-color 0.2s ease;
                        font-weight: 500;
                    `;
                    
                    deleteBtn.addEventListener('mouseover', function() {
                        this.style.backgroundColor = '#dc2626';
                    });
                    
                    deleteBtn.addEventListener('mouseout', function() {
                        this.style.backgroundColor = '#ef4444';
                    });
                    
                    deleteBtn.addEventListener('click', function() {
                        if (confirm('Are you sure you want to delete this application?')) {
                            // Extract application data
                            const appData = {
                                name: cells[0]?.textContent?.trim() || 'Unknown',
                                email: cells[1]?.textContent?.trim() || 'No email',
                                deletedAt: new Date().toLocaleString(),
                                originalData: Array.from(cells).map(cell => cell.textContent.trim())
                            };
                            
                            // Add to deleted applications
                            window.deletedApplications.push(appData);
                            localStorage.setItem('deletedApplications', JSON.stringify(window.deletedApplications));
                            
                            // Update counter
                            const counter = document.getElementById('deleted-count');
                            if (counter) {
                                counter.textContent = window.deletedApplications.length;
                            }
                            
                            // Remove row with animation
                            row.style.transition = 'all 0.3s ease';
                            row.style.opacity = '0';
                            row.style.transform = 'translateX(-20px)';
                            
                            setTimeout(() => {
                                row.remove();
                            }, 300);
                            
                            console.log('Application deleted:', appData);
                        }
                    });
                    
                    actionsCell.appendChild(deleteBtn);
                    row.appendChild(actionsCell);
                });
            });
        }
        
        // Initialize admin panel enhancements
        createDeletedApplicationsSection();
        addViewDeletedButton();
        addDeleteButtons();
    }
    
    // 6. Navigation enhancement with scroll to top
    function initNavigation() {
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
    
    // 7. Initialize everything
    function init() {
        console.log('🔧 Initializing UNLOCK Production Fixes...');
        
        removeUnwantedFeatures();
        initNavigation();
        const translatePage = initLanguageSwitching();
        enhanceApplyButtons();
        enhanceAdminPanel();
        
        // Store translate function globally for reuse
        window.unlockTranslatePage = translatePage;
        
        console.log('✅ UNLOCK Production Fixes loaded successfully');
    }
    
    // Run initialization
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
    
    // Observer for dynamic content
    const observer = new MutationObserver(function(mutations) {
        let shouldUpdate = false;
        
        mutations.forEach(function(mutation) {
            if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
                for (let node of mutation.addedNodes) {
                    if (node.nodeType === 1 && (node.tagName === 'DIV' || node.tagName === 'TABLE')) {
                        shouldUpdate = true;
                        break;
                    }
                }
            }
        });
        
        if (shouldUpdate) {
            setTimeout(() => {
                removeUnwantedFeatures();
                enhanceApplyButtons();
                enhanceAdminPanel();
                
                // Re-apply translations
                if (window.unlockTranslatePage) {
                    const currentLang = localStorage.getItem('language') || 'en';
                    window.unlockTranslatePage(currentLang);
                }
            }, 200);
        }
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true
    });

})();
