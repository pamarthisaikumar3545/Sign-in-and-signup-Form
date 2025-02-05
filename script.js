const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.querySelector('.container');
const signUpForm = document.getElementById('signUpForm');
const signInForm = document.getElementById('signInForm');
const forgotPasswordLink = document.getElementById('forgotPasswordLink');
const forgotPasswordModal = document.getElementById('forgotPasswordModal');
const closeForgotPasswordModal = document.getElementById('closeForgotPasswordModal');
const sendResetLinkButton = document.getElementById('sendResetLink');
const resetMessage = document.getElementById('resetMessage');

signUpButton.addEventListener('click', () => {
  container.classList.add('right-panel-active');
});

signInButton.addEventListener('click', () => {
  container.classList.remove('right-panel-active');
});

signUpForm.addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('signUpName').value;
  const email = document.getElementById('signUpEmail').value;
  const password = document.getElementById('password').value;
  const dob = document.getElementById('dob').value;

  // Basic validation
  if (!name || !email || !password || !dob) {
    document.getElementById('signUpErrorMessage').style.display = 'block';
    return;
  }

  // Password validation
  const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/;
  if (!passwordPattern.test(password)) {
    document.getElementById('error-message').style.display = 'block';
    return;
  }

  // Clear error messages if everything is correct
  document.getElementById('signUpErrorMessage').style.display = 'none';
  document.getElementById('error-message').style.display = 'none';

  // Proceed with form submission or further processing
  alert('Sign Up Successful!');
});

signInForm.addEventListener('submit', function (e) {
  e.preventDefault();

  const email = document.getElementById('signInEmail').value;
  const password = document.getElementById('signInPassword').value;

  // Basic validation
  if (!email || !password) {
    document.getElementById('signInErrorMessage').style.display = 'block';
    return;
  }

  // Clear error messages if everything is correct
  document.getElementById('signInErrorMessage').style.display = 'none';

  // Proceed with form submission or further processing
  alert('Sign In Successful!');
});

forgotPasswordLink.addEventListener('click', (e) => {
  e.preventDefault();
  forgotPasswordModal.style.display = 'flex';
});

closeForgotPasswordModal.addEventListener('click', () => {
  forgotPasswordModal.style.display = 'none';
});

sendResetLinkButton.addEventListener('click', () => {
  const email = document.getElementById('forgotPasswordEmail').value;

  if (!email) {
    alert('Please enter your email address.');
    return;
  }

  // Simulate sending password reset link
  resetMessage.textContent = `A password reset link has been sent to ${email}.`;
  resetMessage.style.display = 'block';

  setTimeout(() => {
    forgotPasswordModal.style.display = 'none';
    resetMessage.style.display = 'none'; // Hide the reset message after 15 seconds
  }, 15000); // Display for 15 seconds
});
