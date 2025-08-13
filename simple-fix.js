// Simple working fix - no complex logic
(function() {
    'use strict';
    
    console.log('🔓 UNLOCK Simple Fix Loading...');
    
    // Wait for DOM and immediately show content
    function showMainWebsite() {
        const root = document.getElementById('root');
        if (!root) return;
        
        root.innerHTML = `
            <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
                <!-- Header -->
                <header style="background: white; box-shadow: 0 2px 4px rgba(0,0,0,0.1); padding: 1rem 0;">
                    <nav style="max-width: 1200px; margin: 0 auto; display: flex; justify-content: space-between; align-items: center; padding: 0 2rem;">
                        <div style="display: flex; align-items: center; gap: 12px;">
                            <div style="width: 40px; height: 40px; background: #ff6b35; border-radius: 8px; display: flex; align-items: center; justify-content: center;">
                                <span style="color: white; font-weight: bold;">🔓</span>
                            </div>
                            <h1 style="color: #2d3748; font-size: 1.8rem; font-weight: 700; margin: 0;">UNLOCK</h1>
                        </div>
                        <div style="display: flex; gap: 2rem; align-items: center;">
                            <a href="javascript:showHome()" style="color: #4a5568; text-decoration: none;">Home</a>
                            <a href="javascript:showAbout()" style="color: #4a5568; text-decoration: none;">About</a>
                            <a href="javascript:showPrograms()" style="color: #4a5568; text-decoration: none;">Programs</a>
                            <a href="javascript:showContact()" style="color: #4a5568; text-decoration: none;">Contact</a>
                            <a href="javascript:showApplication()" style="
                                background: #ff6b35;
                                color: white;
                                padding: 12px 24px;
                                border-radius: 8px;
                                text-decoration: none;
                                font-weight: 600;
                            ">Apply Now</a>
                            <button onclick="toggleLang()" id="langBtn" style="
                                background: #e2e8f0;
                                border: none;
                                padding: 8px 16px;
                                border-radius: 6px;
                                cursor: pointer;
                            ">UZ</button>
                        </div>
                    </nav>
                </header>
                
                <!-- Main Content -->
                <main id="mainContent" style="min-height: 80vh; padding: 4rem 2rem; background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);">
                    <div style="max-width: 1200px; margin: 0 auto; text-align: center;">
                        <h2 style="font-size: 3rem; color: #2d3748; margin-bottom: 1rem; font-weight: 700;">Future Pathways</h2>
                        <p style="font-size: 1.2rem; color: #718096; max-width: 600px; margin: 0 auto 2rem;">Professional university admission consulting services. Get expert guidance for your university applications.</p>
                        <a href="javascript:showApplication()" style="
                            background: #ff6b35;
                            color: white;
                            padding: 16px 32px;
                            border-radius: 12px;
                            text-decoration: none;
                            font-weight: 600;
                            font-size: 1.1rem;
                            display: inline-block;
                        ">Start Your Application</a>
                        
                        <div style="margin-top: 3rem; text-align: center;">
                            <a href="javascript:showAdmin()" style="
                                background: #4a5568;
                                color: white;
                                padding: 12px 24px;
                                border-radius: 8px;
                                text-decoration: none;
                                font-weight: 500;
                                display: inline-block;
                            ">Admin Panel</a>
                        </div>
                    </div>
                </main>
                
                <!-- Footer -->
                <footer style="background: #2d3748; color: white; text-align: center; padding: 2rem;">
                    <p>&copy; 2024 UNLOCK Future Pathways. All rights reserved.</p>
                </footer>
            </div>
        `;
    }
    
    // Application form
    window.showApplication = function() {
        const main = document.getElementById('mainContent');
        main.innerHTML = `
            <div style="max-width: 800px; margin: 0 auto;">
                <div style="background: white; padding: 2rem; border-radius: 12px; box-shadow: 0 4px 20px rgba(0,0,0,0.1);">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 2rem;">
                        <h1 style="color: #2d3748; font-size: 2rem; font-weight: 700; margin: 0;">Application Form</h1>
                        <button onclick="showHome()" style="
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
                                <label style="display: block; margin-bottom: 0.5rem; font-weight: 500;">First Name</label>
                                <input type="text" style="width: 100%; padding: 0.75rem; border: 1px solid #e2e8f0; border-radius: 6px;">
                            </div>
                            <div>
                                <label style="display: block; margin-bottom: 0.5rem; font-weight: 500;">Last Name</label>
                                <input type="text" style="width: 100%; padding: 0.75rem; border: 1px solid #e2e8f0; border-radius: 6px;">
                            </div>
                        </div>
                        
                        <div>
                            <label style="display: block; margin-bottom: 0.5rem; font-weight: 500;">Email</label>
                            <input type="email" style="width: 100%; padding: 0.75rem; border: 1px solid #e2e8f0; border-radius: 6px;">
                        </div>
                        
                        <div>
                            <label style="display: block; margin-bottom: 0.5rem; font-weight: 500;">Phone</label>
                            <input type="tel" style="width: 100%; padding: 0.75rem; border: 1px solid #e2e8f0; border-radius: 6px;">
                        </div>
                        
                        <button type="submit" style="
                            background: #ff6b35;
                            color: white;
                            padding: 16px 32px;
                            border: none;
                            border-radius: 8px;
                            font-weight: 600;
                            font-size: 1.1rem;
                            cursor: pointer;
                        ">Submit Application</button>
                    </form>
                </div>
            </div>
        `;
    };
    
    // Admin panel with PROPER delete buttons
    window.showAdmin = function() {
        const main = document.getElementById('mainContent');
        main.innerHTML = `
            <div style="max-width: 1200px; margin: 0 auto;">
                <div style="background: white; padding: 2rem; border-radius: 12px; box-shadow: 0 4px 20px rgba(0,0,0,0.1);">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 2rem;">
                        <h1 style="color: #2d3748; font-size: 2rem; font-weight: 700; margin: 0;">Applications Management</h1>
                        <div style="display: flex; gap: 1rem;">
                            <button onclick="showDeleted()" style="
                                background: #6b7280;
                                color: white;
                                padding: 10px 20px;
                                border: none;
                                border-radius: 6px;
                                cursor: pointer;
                            ">View Deleted (0)</button>
                            <button onclick="showHome()" style="
                                background: #e2e8f0;
                                border: none;
                                padding: 10px 20px;
                                border-radius: 6px;
                                cursor: pointer;
                            ">← Back to Home</button>
                        </div>
                    </div>
                    
                    <div style="overflow-x: auto;">
                        <table style="width: 100%; border-collapse: collapse;">
                            <thead>
                                <tr style="background: #f7fafc;">
                                    <th style="padding: 12px; text-align: left; border-bottom: 1px solid #e2e8f0;">Name</th>
                                    <th style="padding: 12px; text-align: left; border-bottom: 1px solid #e2e8f0;">Email</th>
                                    <th style="padding: 12px; text-align: left; border-bottom: 1px solid #e2e8f0;">Phone</th>
                                    <th style="padding: 12px; text-align: left; border-bottom: 1px solid #e2e8f0;">Status</th>
                                    <th style="padding: 12px; text-align: center; border-bottom: 1px solid #e2e8f0;">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td style="padding: 12px; border-bottom: 1px solid #e2e8f0;">John Smith</td>
                                    <td style="padding: 12px; border-bottom: 1px solid #e2e8f0;">john@example.com</td>
                                    <td style="padding: 12px; border-bottom: 1px solid #e2e8f0;">+1-555-0123</td>
                                    <td style="padding: 12px; border-bottom: 1px solid #e2e8f0;">Pending</td>
                                    <td style="padding: 12px; border-bottom: 1px solid #e2e8f0; text-align: center;">
                                        <button onclick="deleteApp(this)" style="
                                            background: #ef4444;
                                            color: white;
                                            padding: 6px 12px;
                                            border: none;
                                            border-radius: 4px;
                                            cursor: pointer;
                                            font-size: 0.875rem;
                                        ">Delete</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td style="padding: 12px; border-bottom: 1px solid #e2e8f0;">Sarah Johnson</td>
                                    <td style="padding: 12px; border-bottom: 1px solid #e2e8f0;">sarah@example.com</td>
                                    <td style="padding: 12px; border-bottom: 1px solid #e2e8f0;">+1-555-0456</td>
                                    <td style="padding: 12px; border-bottom: 1px solid #e2e8f0;">Approved</td>
                                    <td style="padding: 12px; border-bottom: 1px solid #e2e8f0; text-align: center;">
                                        <button onclick="deleteApp(this)" style="
                                            background: #ef4444;
                                            color: white;
                                            padding: 6px 12px;
                                            border: none;
                                            border-radius: 4px;
                                            cursor: pointer;
                                            font-size: 0.875rem;
                                        ">Delete</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td style="padding: 12px; border-bottom: 1px solid #e2e8f0;">Ahmed Hassan</td>
                                    <td style="padding: 12px; border-bottom: 1px solid #e2e8f0;">ahmed@example.com</td>
                                    <td style="padding: 12px; border-bottom: 1px solid #e2e8f0;">+998-90-123-4567</td>
                                    <td style="padding: 12px; border-bottom: 1px solid #e2e8f0;">Under Review</td>
                                    <td style="padding: 12px; border-bottom: 1px solid #e2e8f0; text-align: center;">
                                        <button onclick="deleteApp(this)" style="
                                            background: #ef4444;
                                            color: white;
                                            padding: 6px 12px;
                                            border: none;
                                            border-radius: 4px;
                                            cursor: pointer;
                                            font-size: 0.875rem;
                                        ">Delete</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        `;
    };
    
    // Delete application function
    window.deleteApp = function(button) {
        if (confirm('Are you sure you want to delete this application?')) {
            const row = button.closest('tr');
            row.style.transition = 'opacity 0.3s ease';
            row.style.opacity = '0';
            setTimeout(() => {
                row.remove();
            }, 300);
        }
    };
    
    // Other navigation functions
    window.showHome = function() {
        showMainWebsite();
    };
    
    window.showAbout = function() {
        const main = document.getElementById('mainContent');
        main.innerHTML = `
            <div style="max-width: 800px; margin: 0 auto; text-align: center;">
                <h2 style="font-size: 2.5rem; color: #2d3748; margin-bottom: 2rem;">About UNLOCK</h2>
                <p style="font-size: 1.1rem; color: #718096; line-height: 1.6;">We are dedicated to helping students unlock their potential and achieve their dreams of higher education.</p>
                <button onclick="showHome()" style="
                    margin-top: 2rem;
                    background: #ff6b35;
                    color: white;
                    padding: 12px 24px;
                    border: none;
                    border-radius: 8px;
                    cursor: pointer;
                ">← Back to Home</button>
            </div>
        `;
    };
    
    window.showPrograms = function() {
        const main = document.getElementById('mainContent');
        main.innerHTML = `
            <div style="max-width: 800px; margin: 0 auto; text-align: center;">
                <h2 style="font-size: 2.5rem; color: #2d3748; margin-bottom: 2rem;">Our Programs</h2>
                <p style="font-size: 1.1rem; color: #718096; line-height: 1.6;">Comprehensive university admission consulting and guidance programs.</p>
                <button onclick="showHome()" style="
                    margin-top: 2rem;
                    background: #ff6b35;
                    color: white;
                    padding: 12px 24px;
                    border: none;
                    border-radius: 8px;
                    cursor: pointer;
                ">← Back to Home</button>
            </div>
        `;
    };
    
    window.showContact = function() {
        const main = document.getElementById('mainContent');
        main.innerHTML = `
            <div style="max-width: 800px; margin: 0 auto; text-align: center;">
                <h2 style="font-size: 2.5rem; color: #2d3748; margin-bottom: 2rem;">Contact Us</h2>
                <p style="font-size: 1.1rem; color: #718096; line-height: 1.6;">Get in touch with our team for personalized guidance.</p>
                <button onclick="showHome()" style="
                    margin-top: 2rem;
                    background: #ff6b35;
                    color: white;
                    padding: 12px 24px;
                    border: none;
                    border-radius: 8px;
                    cursor: pointer;
                ">← Back to Home</button>
            </div>
        `;
    };
    
    window.showDeleted = function() {
        alert('No deleted applications yet.');
    };
    
    window.toggleLang = function() {
        const btn = document.getElementById('langBtn');
        btn.textContent = btn.textContent === 'UZ' ? 'EN' : 'UZ';
    };
    
    // Initialize immediately
    setTimeout(showMainWebsite, 100);
    
    console.log('✅ UNLOCK website loaded successfully');
    
})();
