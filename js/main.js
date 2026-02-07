import { initNavbar } from './navbar.js'; 

document.addEventListener('DOMContentLoaded', () => {
    initNavbar();
});

// Funcția pentru animația la scroll
function initScrollReveal() {
    const observerOptions = {
        threshold: 0.2 // Animația începe când 20% din secțiune e vizibilă
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
            else {
                // Când elementul iese de pe ecran (scroll up sau scroll down departe)
                entry.target.classList.remove('active');
            }
        });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.scroll-reveal');
    revealElements.forEach(el => observer.observe(el));
}


document.addEventListener('DOMContentLoaded', () => {
    initScrollReveal();
});


document.querySelectorAll('.accordion-header').forEach(button => {
    button.addEventListener('click', () => {
        const accordion = button.parentElement;
        accordion.classList.toggle('active');
        
        // Închide celelalte dacă vrei (opțional)
        /*
        document.querySelectorAll('.faq-accordion').forEach(other => {
            if (other !== accordion) other.classList.remove('active');
        });
        */
    });
});

