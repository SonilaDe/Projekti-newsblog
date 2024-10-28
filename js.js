document.querySelector('.toggle-password').addEventListener('click', function () {
    const passwordInput = document.getElementById('password');
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        this.style.color = '#6200EE';
    } else {
        passwordInput.type = 'password';
        this.style.color = '#ccc';
    }
});

document.getElementById('signupForm').addEventListener('submit', function (event) {
    event.preventDefault();
    alert('Form submitted!');
});








const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});
