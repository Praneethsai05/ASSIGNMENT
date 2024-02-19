// Get modal elements
const signUpModal = document.getElementById('signUpModal');
const signInModal = document.getElementById('signInModal');

// Get button elements
const createAccountBtn = document.getElementById('createAccountBtn');
const signInBtn = document.getElementById('signInBtn');

// Get close button elements
const closeButtons = document.getElementsByClassName('close');

// Get sign-up form element
const signUpForm = document.querySelector('#signUpModal form');

// Get sign-in form element
const signInForm = document.querySelector('#signInModal form');

// Open Sign-up Modal
createAccountBtn.onclick = function() {
    signUpModal.style.display = 'block';
}

// Open Sign-in Modal
signInBtn.onclick = function() {
    signInModal.style.display = 'block';
}

// Close Modals
for (let i = 0; i < closeButtons.length; i++) {
    closeButtons[i].onclick = function() {
        signUpModal.style.display = 'none';
        signInModal.style.display = 'none';
    }
}

// Close Modals when clicking outside
window.onclick = function(event) {
    if (event.target == signUpModal) {
        signUpModal.style.display = 'none';
    } else if (event.target == signInModal) {
        signInModal.style.display = 'none';
    }
}

// Handle sign-up form submission
signUpForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting and reloading the page

    // Get form field values
    const firstName = event.target.elements[0].value;
    const lastName = event.target.elements[1].value;
    const email = event.target.elements[2].value;
    const password = event.target.elements[3].value;
    const confirmPassword = event.target.elements[4].value;

    // Check if passwords match
    if (password !== confirmPassword) {
        alert('Passwords do not match');
        return;
    }

    // Create user object
    const user = {
        firstName,
        lastName,
        email,
        password
    };

    // Save user object to localStorage
    localStorage.setItem('user', JSON.stringify(user));

    // Close sign-up modal
    signUpModal.style.display = 'none';

    // Show a success message or redirect to another page
    alert('Sign up successful!');
});

// Handle sign-in form submission
signInForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting and reloading the page

    // Get form field values
    const email = event.target.elements[0].value;
    const password = event.target.elements[1].value;

    // Get user object from localStorage
    const user = JSON.parse(localStorage.getItem('user'));

    // Check if email and password match the stored user object
    if (email === user.email && password === user.password) {
        // Close sign-in modal
        signInModal.style.display = 'none';

        // Show a success message or redirect to another page
        alert('Sign in successful!');
    } else {
        // Show an error message
        alert('Invalid email or password');
    }
});