// Countdown Timer
function updateCountdown() {
    // Set the launch date to August 3, 2025 (updated to future date)
    const launchDate = new Date('August 3, 2025 00:00:00').getTime();
    const now = new Date().getTime();
    const distance = launchDate - now;

    // Calculate time units
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Get the countdown elements
    const daysElement = document.getElementById('days');
    const hoursElement = document.getElementById('hours');
    const minutesElement = document.getElementById('minutes');
    const secondsElement = document.getElementById('seconds');

    // Check if elements exist before updating
    if (daysElement && hoursElement && minutesElement && secondsElement) {
        // Update the countdown display
        daysElement.textContent = Math.max(0, days).toString().padStart(2, '0');
        hoursElement.textContent = Math.max(0, hours).toString().padStart(2, '0');
        minutesElement.textContent = Math.max(0, minutes).toString().padStart(2, '0');
        secondsElement.textContent = Math.max(0, seconds).toString().padStart(2, '0');
    }

    // If the countdown is finished
    if (distance < 0) {
        const countdownElement = document.querySelector('.countdown');
        if (countdownElement) {
            countdownElement.innerHTML = '<h2>We\'re Live! 🎉</h2>';
        }
    }
}

// Email Form Handling
document.getElementById('email-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const formMessage = document.getElementById('form-message');
    const submitBtn = document.querySelector('.submit-btn');
    
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        showMessage('Please enter a valid email address.', 'error');
        return;
    }
    
    // Show loading state
    submitBtn.disabled = true;
    submitBtn.textContent = 'Submitting...';
    
    // Simulate form submission (replace with your actual backend endpoint)
    setTimeout(() => {
        // Here you would typically send the email to your backend
        // For now, we'll simulate a successful submission
        showMessage('Thanks! You\'ll be the first to know when we launch.', 'success');
        
        // Reset form
        document.getElementById('email').value = '';
        
        // Reset button
        submitBtn.disabled = false;
        submitBtn.textContent = 'Get Notified';
        
        // Store email in localStorage (optional)
        const emails = JSON.parse(localStorage.getItem('unlock_emails') || '[]');
        if (!emails.includes(email)) {
            emails.push(email);
            localStorage.setItem('unlock_emails', JSON.stringify(emails));
        }
    }, 1000);
});

function showMessage(message, type) {
    const formMessage = document.getElementById('form-message');
    formMessage.textContent = message;
    formMessage.className = `form-message ${type}`;
    
    // Hide message after 5 seconds
    setTimeout(() => {
        formMessage.className = 'form-message';
    }, 5000);
}

// Initialize countdown when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize countdown
    updateCountdown();
    setInterval(updateCountdown, 1000);
    
    // Add smooth animations when the page loads
    const elements = document.querySelectorAll('.header, .description, .countdown, .email-section');
    
    elements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, index * 200);
    });
    
    // Add subtle hover effects to countdown items
    document.querySelectorAll('.countdown-item').forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
            this.style.transition = 'transform 0.2s ease';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
}); 