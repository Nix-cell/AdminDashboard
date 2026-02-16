document.getElementById('loginForm').addEventListener('submit', function (event) {
    const form = event.target;

    if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
    }

    form.classList.add('was-validated');
}, false);

const togglePassword = document.querySelector('#togglePassword');
const password = document.querySelector('#password');
const eyeIcon = document.querySelector('#eyeIcon');

togglePassword.addEventListener('click', function () {
    // password type ကို password ကနေ text ပြောင်း၊ text ကနေ password ပြန်ပြောင်း
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    
    // Icon လေးကိုလည်း မျက်လုံးပိတ်/မျက်လုံးဖွင့် ပုံစံပြောင်း
    eyeIcon.classList.toggle('fa-eye');
    eyeIcon.classList.toggle('fa-eye-slash');
});