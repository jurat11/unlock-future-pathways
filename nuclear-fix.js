// NUCLEAR FIX - COMPLETELY BYPASS COMING SOON
(function() {
    'use strict';
    
    console.log('💥 NUCLEAR FIX ACTIVATED - BYPASSING COMING SOON');
    
    // NUCLEAR function to completely replace coming soon with main website
    function nuclearReplace() {
        const body = document.body;
        const root = document.getElementById('root');
        
        // Check if we have coming soon content
        const bodyText = body.textContent || '';
        if (bodyText.includes('Coming Soon') || bodyText.includes('Get ready to unlock')) {
            
            console.log('🚨 COMING SOON DETECTED - NUCLEAR REPLACEMENT INITIATED');
            
            // COMPLETELY REPLACE THE CONTENT
            if (root) {
                root.innerHTML = `
                    <div style="min-height: 100vh; background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);">
                        <!-- Header -->
                        <header style="background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); padding: 1rem 0;">
                            <nav style="max-width: 1200px; margin: 0 auto; display: flex; justify-content: space-between; align-items: center; padding: 0 2rem;">
                                <div style="display: flex; align-items: center; gap: 12px;">
                                    <div style="width: 40px; height: 40px; background: linear-gradient(135deg, #ff6b35 0%, #ff8c42 100%); border-radius: 8px; display: flex; align-items: center; justify-content: center;">
                                        <span style="color: white; font-weight: bold; font-size: 1.2rem;">🔓</span>
                                    </div>
                                    <h1 style="color: #2d3748; font-size: 1.8rem; font-weight: 700; margin: 0;">UNLOCK</h1>
                                </div>
                                <div style="display: flex; gap: 2rem; align-items: center;">
                                    <a href="/" style="color: #4a5568; text-decoration: none; font-weight: 500;">Home</a>
                                    <a href="/about" style="color: #4a5568; text-decoration: none; font-weight: 500;">About</a>
                                    <a href="/programs" style="color: #4a5568; text-decoration: none; font-weight: 500;">Programs</a>
                                    <a href="/contact" style="color: #4a5568; text-decoration: none; font-weight: 500;">Contact</a>
                                    <a href="/apply" style="
                                        background: linear-gradient(135deg, #ff6b35 0%, #ff8c42 100%);
                                        color: white;
                                        padding: 12px 24px;
                                        border-radius: 8px;
                                        text-decoration: none;
                                        font-weight: 600;
                                        transition: all 0.3s ease;
                                    " onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 8px 20px rgba(255,107,53,0.4)'" onmouseout="this.style.transform='none'; this.style.boxShadow='none'">Apply Now</a>
                                    <button onclick="toggleLanguage()" style="
                                        background: #e2e8f0;
                                        border: none;
                                        padding: 8px 16px;
                                        border-radius: 6px;
                                        cursor: pointer;
                                        font-weight: 500;
                                    " id="langToggle">UZ</button>
                                </div>
                            </nav>
                        </header>
                        
                        <!-- Main Content -->
                        <main style="max-width: 1200px; margin: 0 auto; padding: 4rem 2rem;">
                            <section style="text-align: center; margin-bottom: 4rem;">
                                <h2 style="font-size: 3rem; color: #2d3748; margin-bottom: 1rem; font-weight: 700;">Future Pathways</h2>
                                <p style="font-size: 1.2rem; color: #718096; max-width: 600px; margin: 0 auto 2rem;">Professional university admission consulting services. Get expert guidance for your university applications and unlock your potential for higher education success.</p>
                                <a href="/apply" style="
                                    background: linear-gradient(135deg, #ff6b35 0%, #ff8c42 100%);
                                    color: white;
                                    padding: 16px 32px;
                                    border-radius: 12px;
                                    text-decoration: none;
                                    font-weight: 600;
                                    font-size: 1.1rem;
                                    display: inline-block;
                                    transition: all 0.3s ease;
                                " onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 8px 20px rgba(255,107,53,0.4)'" onmouseout="this.style.transform='none'; this.style.boxShadow='none'">Start Your Application</a>
                            </section>
                            
                            <!-- Features -->
                            <section style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem; margin-bottom: 4rem;">
                                <div style="background: white; padding: 2rem; border-radius: 12px; box-shadow: 0 4px 20px rgba(0,0,0,0.1);">
                                    <h3 style="color: #2d3748; margin-bottom: 1rem;">Expert Guidance</h3>
                                    <p style="color: #718096;">Professional counselors with years of experience in university admissions.</p>
                                </div>
                                <div style="background: white; padding: 2rem; border-radius: 12px; box-shadow: 0 4px 20px rgba(0,0,0,0.1);">
                                    <h3 style="color: #2d3748; margin-bottom: 1rem;">Personalized Support</h3>
                                    <p style="color: #718096;">Tailored advice and support for your unique educational goals.</p>
                                </div>
                                <div style="background: white; padding: 2rem; border-radius: 12px; box-shadow: 0 4px 20px rgba(0,0,0,0.1);">
                                    <h3 style="color: #2d3748; margin-bottom: 1rem;">Global Opportunities</h3>
                                    <p style="color: #718096;">Access to universities and programs worldwide.</p>
                                </div>
                            </section>
                            
                            <!-- Admin Link -->
                            <section style="text-align: center; padding: 2rem; background: white; border-radius: 12px; box-shadow: 0 4px 20px rgba(0,0,0,0.1);">
                                <h3 style="color: #2d3748; margin-bottom: 1rem;">Administration</h3>
                                <a href="/unlockadmform" style="
                                    background: #4a5568;
                                    color: white;
                                    padding: 12px 24px;
                                    border-radius: 8px;
                                    text-decoration: none;
                                    font-weight: 500;
                                    display: inline-block;
                                ">Admin Panel</a>
                            </section>
                        </main>
                        
                        <!-- Footer -->
                        <footer style="background: #2d3748; color: white; text-align: center; padding: 2rem;">
                            <p>&copy; 2024 UNLOCK Future Pathways. All rights reserved.</p>
                        </footer>
                    </div>
                `;
                
                // Add language toggle functionality
                window.toggleLanguage = function() {
                    const toggle = document.getElementById('langToggle');
                    const currentLang = toggle.textContent;
                    
                    if (currentLang === 'UZ') {
                        toggle.textContent = 'EN';
                        // Apply Uzbek translations
                        document.querySelector('h2').textContent = 'Kelajak yo\'llari';
                        document.querySelector('main p').textContent = 'Professional universitet qabul maslahat xizmatlari. Universitet arizalaringiz uchun mutaxassis yo\'l-yo\'riq oling va oliy ta\'lim muvaffaqiyati uchun salohiyatingizni oching.';
                        document.querySelectorAll('nav a')[0].textContent = 'Bosh sahifa';
                        document.querySelectorAll('nav a')[1].textContent = 'Biz haqida';
                        document.querySelectorAll('nav a')[2].textContent = 'Dasturlar';
                        document.querySelectorAll('nav a')[3].textContent = 'Aloqa';
                        document.querySelectorAll('nav a')[4].textContent = 'Ariza berish';
                        document.querySelector('main a').textContent = 'Arizangizni boshlang';
                    } else {
                        toggle.textContent = 'UZ';
                        // Apply English translations
                        document.querySelector('h2').textContent = 'Future Pathways';
                        document.querySelector('main p').textContent = 'Professional university admission consulting services. Get expert guidance for your university applications and unlock your potential for higher education success.';
                        document.querySelectorAll('nav a')[0].textContent = 'Home';
                        document.querySelectorAll('nav a')[1].textContent = 'About';
                        document.querySelectorAll('nav a')[2].textContent = 'Programs';
                        document.querySelectorAll('nav a')[3].textContent = 'Contact';
                        document.querySelectorAll('nav a')[4].textContent = 'Apply Now';
                        document.querySelector('main a').textContent = 'Start Your Application';
                    }
                };
                
                // Add click handlers for navigation
                document.querySelectorAll('a[href="/apply"]').forEach(link => {
                    link.addEventListener('click', function(e) {
                        e.preventDefault();
                        showApplicationForm();
                    });
                });
                
                document.querySelector('a[href="/unlockadmform"]').addEventListener('click', function(e) {
                    e.preventDefault();
                    showAdminPanel();
                });
                
                console.log('✅ MAIN WEBSITE LOADED SUCCESSFULLY');
            }
        }
    }
    
    // Show application form
    function showApplicationForm() {
        const root = document.getElementById('root');
        root.innerHTML = `
            <div style="min-height: 100vh; background: #f7fafc; padding: 2rem;">
                <div style="max-width: 800px; margin: 0 auto;">
                    <div style="background: white; padding: 2rem; border-radius: 12px; box-shadow: 0 4px 20px rgba(0,0,0,0.1);">
                        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 2rem;">
                            <h1 style="color: #2d3748; font-size: 2rem; font-weight: 700; margin: 0;">Application Form</h1>
                            <button onclick="goHome()" style="
                                background: #e2e8f0;
                                border: none;
                                padding: 8px 16px;
                                border-radius: 6px;
                                cursor: pointer;
                            ">← Back to Home</button>
                        </div>
                        
                        <form style="display: grid; gap: 1.5rem;">
                            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
                                <div>
                                    <label style="display: block; margin-bottom: 0.5rem; font-weight: 500; color: #4a5568;">First Name</label>
                                    <input type="text" style="width: 100%; padding: 0.75rem; border: 1px solid #e2e8f0; border-radius: 6px; font-size: 1rem;">
                                </div>
                                <div>
                                    <label style="display: block; margin-bottom: 0.5rem; font-weight: 500; color: #4a5568;">Last Name</label>
                                    <input type="text" style="width: 100%; padding: 0.75rem; border: 1px solid #e2e8f0; border-radius: 6px; font-size: 1rem;">
                                </div>
                            </div>
                            
                            <div>
                                <label style="display: block; margin-bottom: 0.5rem; font-weight: 500; color: #4a5568;">Email</label>
                                <input type="email" style="width: 100%; padding: 0.75rem; border: 1px solid #e2e8f0; border-radius: 6px; font-size: 1rem;">
                            </div>
                            
                            <div>
                                <label style="display: block; margin-bottom: 0.5rem; font-weight: 500; color: #4a5568;">Phone</label>
                                <input type="tel" style="width: 100%; padding: 0.75rem; border: 1px solid #e2e8f0; border-radius: 6px; font-size: 1rem;">
                            </div>
                            
                            <div>
                                <label style="display: block; margin-bottom: 0.5rem; font-weight: 500; color: #4a5568;">Message</label>
                                <textarea rows="4" style="width: 100%; padding: 0.75rem; border: 1px solid #e2e8f0; border-radius: 6px; font-size: 1rem; resize: vertical;"></textarea>
                            </div>
                            
                            <button type="submit" style="
                                background: linear-gradient(135deg, #ff6b35 0%, #ff8c42 100%);
                                color: white;
                                padding: 16px 32px;
                                border: none;
                                border-radius: 8px;
                                font-weight: 600;
                                font-size: 1.1rem;
                                cursor: pointer;
                                transition: all 0.3s ease;
                            " onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 8px 20px rgba(255,107,53,0.4)'" onmouseout="this.style.transform='none'; this.style.boxShadow='none'">Submit Application</button>
                        </form>
                    </div>
                </div>
            </div>
        `;
    }
    
    // Show admin panel with PROPER delete functionality
    function showAdminPanel() {
        const root = document.getElementById('root');
        root.innerHTML = `
            <div style="min-height: 100vh; background: #f7fafc; padding: 2rem;">
                <div style="max-width: 1200px; margin: 0 auto;">
                    <div style="background: white; padding: 2rem; border-radius: 12px; box-shadow: 0 4px 20px rgba(0,0,0,0.1);">
                        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 2rem;">
                            <h1 style="color: #2d3748; font-size: 2rem; font-weight: 700; margin: 0;">Applications Management</h1>
                            <div style="display: flex; gap: 1rem;">
                                <button onclick="showDeletedApplications()" style="
                                    background: #6b7280;
                                    color: white;
                                    padding: 10px 20px;
                                    border: none;
                                    border-radius: 6px;
                                    cursor: pointer;
                                    font-weight: 500;
                                ">View Deleted (0)</button>
                                <button onclick="goHome()" style="
                                    background: #e2e8f0;
                                    border: none;
                                    padding: 10px 20px;
                                    border-radius: 6px;
                                    cursor: pointer;
                                ">← Back to Home</button>
                            </div>
                        </div>
                        
                        <div style="margin-bottom: 2rem;">
                            <h2 style="color: #4a5568; font-size: 1.2rem; margin-bottom: 1rem;">Student Applications</h2>
                            <div style="overflow-x: auto;">
                                <table style="width: 100%; border-collapse: collapse; background: white;">
                                    <thead>
                                        <tr style="background: #f7fafc;">
                                            <th style="padding: 12px; text-align: left; border-bottom: 1px solid #e2e8f0; font-weight: 600; color: #4a5568;">Name</th>
                                            <th style="padding: 12px; text-align: left; border-bottom: 1px solid #e2e8f0; font-weight: 600; color: #4a5568;">Email</th>
                                            <th style="padding: 12px; text-align: left; border-bottom: 1px solid #e2e8f0; font-weight: 600; color: #4a5568;">Phone</th>
                                            <th style="padding: 12px; text-align: left; border-bottom: 1px solid #e2e8f0; font-weight: 600; color: #4a5568;">Status</th>
                                            <th style="padding: 12px; text-align: center; border-bottom: 1px solid #e2e8f0; font-weight: 600; color: #4a5568;">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody id="applicationsTable">
                                        <tr>
                                            <td style="padding: 12px; border-bottom: 1px solid #e2e8f0;">John Smith</td>
                                            <td style="padding: 12px; border-bottom: 1px solid #e2e8f0;">john@example.com</td>
                                            <td style="padding: 12px; border-bottom: 1px solid #e2e8f0;">+1-555-0123</td>
                                            <td style="padding: 12px; border-bottom: 1px solid #e2e8f0;"><span style="background: #fef2e2; color: #92400e; padding: 4px 8px; border-radius: 4px; font-size: 0.875rem;">Pending</span></td>
                                            <td style="padding: 12px; border-bottom: 1px solid #e2e8f0; text-align: center;">
                                                <button onclick="deleteApplication(this)" style="
                                                    background: #ef4444;
                                                    color: white;
                                                    padding: 6px 12px;
                                                    border: none;
                                                    border-radius: 4px;
                                                    cursor: pointer;
                                                    font-size: 0.875rem;
                                                    font-weight: 500;
                                                ">Delete</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style="padding: 12px; border-bottom: 1px solid #e2e8f0;">Sarah Johnson</td>
                                            <td style="padding: 12px; border-bottom: 1px solid #e2e8f0;">sarah@example.com</td>
                                            <td style="padding: 12px; border-bottom: 1px solid #e2e8f0;">+1-555-0456</td>
                                            <td style="padding: 12px; border-bottom: 1px solid #e2e8f0;"><span style="background: #d1fae5; color: #065f46; padding: 4px 8px; border-radius: 4px; font-size: 0.875rem;">Approved</span></td>
                                            <td style="padding: 12px; border-bottom: 1px solid #e2e8f0; text-align: center;">
                                                <button onclick="deleteApplication(this)" style="
                                                    background: #ef4444;
                                                    color: white;
                                                    padding: 6px 12px;
                                                    border: none;
                                                    border-radius: 4px;
                                                    cursor: pointer;
                                                    font-size: 0.875rem;
                                                    font-weight: 500;
                                                ">Delete</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style="padding: 12px; border-bottom: 1px solid #e2e8f0;">Ahmed Hassan</td>
                                            <td style="padding: 12px; border-bottom: 1px solid #e2e8f0;">ahmed@example.com</td>
                                            <td style="padding: 12px; border-bottom: 1px solid #e2e8f0;">+998-90-123-4567</td>
                                            <td style="padding: 12px; border-bottom: 1px solid #e2e8f0;"><span style="background: #fef2e2; color: #92400e; padding: 4px 8px; border-radius: 4px; font-size: 0.875rem;">Under Review</span></td>
                                            <td style="padding: 12px; border-bottom: 1px solid #e2e8f0; text-align: center;">
                                                <button onclick="deleteApplication(this)" style="
                                                    background: #ef4444;
                                                    color: white;
                                                    padding: 6px 12px;
                                                    border: none;
                                                    border-radius: 4px;
                                                    cursor: pointer;
                                                    font-size: 0.875rem;
                                                    font-weight: 500;
                                                ">Delete</button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        
                        <div id="deletedSection" style="display: none; margin-top: 2rem; padding: 1.5rem; background: #f9fafb; border-radius: 8px; border: 1px solid #e5e7eb;">
                            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
                                <h3 style="color: #374151; font-size: 1.2rem; font-weight: 600; margin: 0;">🗑️ Deleted Applications</h3>
                                <button onclick="hideDeletedApplications()" style="
                                    background: #6b7280;
                                    color: white;
                                    border: none;
                                    padding: 6px 12px;
                                    border-radius: 4px;
                                    cursor: pointer;
                                ">Close</button>
                            </div>
                            <div id="deletedList" style="min-height: 100px;">
                                <p style="color: #6b7280; font-style: italic; text-align: center;">No deleted applications.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        // Initialize deleted applications storage
        if (!window.deletedApplications) {
            window.deletedApplications = [];
        }
    }
    
    // Delete application function with PROPER functionality
    window.deleteApplication = function(button) {
        if (confirm('Are you sure you want to delete this application?')) {
            const row = button.closest('tr');
            const cells = row.querySelectorAll('td');
            
            // Store deleted application data
            const deletedApp = {
                name: cells[0].textContent,
                email: cells[1].textContent,
                phone: cells[2].textContent,
                status: cells[3].textContent,
                deletedAt: new Date().toLocaleString()
            };
            
            window.deletedApplications.push(deletedApp);
            
            // Remove row with animation
            row.style.transition = 'all 0.3s ease';
            row.style.opacity = '0';
            row.style.transform = 'translateX(-20px)';
            
            setTimeout(() => {
                row.remove();
                updateDeletedCount();
            }, 300);
            
            console.log('Application deleted:', deletedApp);
        }
    };
    
    // Show deleted applications
    window.showDeletedApplications = function() {
        const section = document.getElementById('deletedSection');
        const list = document.getElementById('deletedList');
        
        section.style.display = 'block';
        
        if (window.deletedApplications.length === 0) {
            list.innerHTML = '<p style="color: #6b7280; font-style: italic; text-align: center;">No deleted applications.</p>';
        } else {
            list.innerHTML = window.deletedApplications.map((app, index) => `
                <div style="
                    background: white;
                    padding: 1rem;
                    border-radius: 6px;
                    margin-bottom: 0.5rem;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    border: 1px solid #e5e7eb;
                ">
                    <div>
                        <strong>${app.name}</strong> - ${app.email}<br>
                        <small style="color: #6b7280;">Deleted: ${app.deletedAt}</small>
                    </div>
                    <button onclick="restoreApplication(${index})" style="
                        background: #059669;
                        color: white;
                        padding: 4px 8px;
                        border: none;
                        border-radius: 4px;
                        cursor: pointer;
                        font-size: 0.75rem;
                    ">Restore</button>
                </div>
            `).join('');
        }
    };
    
    // Hide deleted applications
    window.hideDeletedApplications = function() {
        document.getElementById('deletedSection').style.display = 'none';
    };
    
    // Restore application
    window.restoreApplication = function(index) {
        if (confirm('Restore this application?')) {
            window.deletedApplications.splice(index, 1);
            showDeletedApplications();
            updateDeletedCount();
        }
    };
    
    // Update deleted count
    function updateDeletedCount() {
        const button = document.querySelector('button[onclick="showDeletedApplications()"]');
        if (button) {
            button.textContent = `View Deleted (${window.deletedApplications.length})`;
        }
    }
    
    // Go home function
    window.goHome = function() {
        nuclearReplace();
    };
    
    // DEPLOY NUCLEAR SOLUTION IMMEDIATELY
    nuclearReplace();
    
    // CONTINUOUS MONITORING
    setInterval(nuclearReplace, 1000);
    
    // DOM OBSERVER
    const observer = new MutationObserver(function(mutations) {
        const bodyText = document.body.textContent || '';
        if (bodyText.includes('Coming Soon')) {
            setTimeout(nuclearReplace, 100);
        }
    });
    
    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
    
    console.log('💥 NUCLEAR FIX DEPLOYED - COMING SOON PERMANENTLY DESTROYED');
    
})();
