// Handle login form submission
document.getElementById('login-form')?.addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simulate a successful login (replace this with actual authentication logic)
    alert(`Logged in as ${username}`);
    this.reset(); // Clear the form
});

// Handle registration form submission
document.getElementById('register-form')?.addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('reg-username').value;
    const password = document.getElementById('reg-password').value;
    const email = document.getElementById('email').value;

    // Simulate a successful registration (replace this with actual registration logic)
    alert(`Registered as ${username}`);
    this.reset(); // Clear the form
});
