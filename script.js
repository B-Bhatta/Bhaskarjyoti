// Typed.js Animation
var typed = new Typed('#element', {
    strings: ['<i>Web</i> Developer.', 'Problem Solver.'],
    typeSpeed: 120,
    backSpeed: 54,
    loop: true
});

// Mobile Menu Toggle
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');

menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});