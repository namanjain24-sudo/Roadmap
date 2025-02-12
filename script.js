// Theme toggle functionality
const html = document.documentElement;
const themeToggle = document.querySelector('.theme-toggle');

if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        const currentTheme = html.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        html.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });
}

// Check for saved theme preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    html.setAttribute('data-theme', savedTheme);
}

// Function to navigate between pages
function navigateToPage(page) {
    window.location.href = page;
}

// Handle login form submission
const loginForm = document.getElementById('loginForm');
if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        
        // Here you would typically handle the login logic
        console.log('Login attempt:', { email, password });
        
        // For demo purposes, show an alert
        alert('Login functionality would be implemented here');
    });
}

// Handle signup form submission
const signupForm = document.getElementById('signupForm');
if (signupForm) {
    signupForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        
        if (password !== confirmPassword) {
            alert('Passwords do not match!');
            return;
        }
        
        // Here you would typically handle the signup logic
        console.log('Signup attempt:', { name, email, password });
        
        // For demo purposes, show an alert
        alert('Signup functionality would be implemented here');
    });
}

// Handle reset password form submission
const resetPasswordForm = document.getElementById('resetPasswordForm');
if (resetPasswordForm) {
    resetPasswordForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = document.getElementById('email').value;
        
        // Here you would typically handle the reset password logic
        console.log('Reset password attempt:', { email });
        
        // For demo purposes, show an alert
        alert('Password reset link would be sent to your email');
    });
}

// Add click handlers for social login buttons
const socialButtons = document.querySelectorAll('.social-btn');
socialButtons.forEach(button => {
    button.addEventListener('click', function() {
        const provider = this.className.split(' ')[1];
        console.log(`${provider} login clicked`);
        alert(`${provider} login would be implemented here`);
    });
});