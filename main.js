// =============================================
// TOUGH KNUCKLES AUTOMOTIVE — main.js
// =============================================

// ---- Hamburger Menu ----
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    mobileMenu.classList.toggle('active');
});

// Close mobile menu when any link inside it is clicked
document.querySelectorAll('.mobile-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('open');
        mobileMenu.classList.remove('active');
    });
});


// ---- Navbar shadow on scroll ----
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 24px rgba(0,0,0,0.6)';
    } else {
        navbar.style.boxShadow = 'none';
    }
});


// ---- Smooth scroll (accounts for fixed navbar height) ----
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            const navbarHeight = 70;
            const top = target.getBoundingClientRect().top + window.scrollY - navbarHeight;
            window.scrollTo({ top, behavior: 'smooth' });
        }
    });
});


// ---- Scroll-in animations ----
// Elements with class "fade-up" slide in when they enter the viewport
const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // only animate once
            }
        });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
);

document.querySelectorAll('.service-card, .about-container, .hours-card, .map-card, .contact-form').forEach(el => {
    el.classList.add('fade-up');
    observer.observe(el);
});
