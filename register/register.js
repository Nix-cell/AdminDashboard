document.getElementById('registerForm').addEventListener('submit', function (event) {
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');
    
    // Password နှစ်ခု တူ၊ မတူ စစ်ဆေးခြင်း
    if (password.value !== confirmPassword.value) {
        confirmPassword.setCustomValidity("Passwords do not match"); // Error message သတ်မှတ်
    } else {
        confirmPassword.setCustomValidity(""); // Error မရှိရင် clear လုပ်
    }

    if (!this.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
    }
    this.classList.add('was-validated');
}, false);

// Show/Hide Password Functionality (အရင်အတိုင်းပဲ ထားပါ)
const toggleButtons = document.querySelectorAll('.toggle-password');
toggleButtons.forEach(button => {
    button.addEventListener('click', function() {
        const input = this.parentElement.querySelector('.password-input');
        const icon = this.querySelector('.eye-icon');
        
        if (input.type === "password") {
            input.type = "text";
            icon.classList.replace('fa-eye', 'fa-eye-slash');
        } else {
            input.type = "password";
            icon.classList.replace('fa-eye-slash', 'fa-eye');
        }
    });
});