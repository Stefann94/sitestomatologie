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


// MODIFICĂ DOAR ACEASTĂ PARTE:
document.querySelectorAll('.accordion-header').forEach(button => {
    button.addEventListener('click', (e) => {
        // Prevenim orice comportament default
        e.preventDefault();
        
        const accordion = button.parentElement;
        
        // Verificăm dacă e deja deschis
        const isOpen = accordion.classList.contains('is-open');
        
        // OPȚIONAL: Închide celelalte întrebări când deschizi una nouă (pentru fluiditate)
        document.querySelectorAll('.faq-accordion').forEach(item => {
            item.classList.remove('is-open');
        });

        // Dacă nu era deschis, îl deschidem
        if (!isOpen) {
            accordion.classList.add('is-open');
        }
    });
});

const backToTopButton = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 300) {
        backToTopButton.classList.add("show");
    } else {
        backToTopButton.classList.remove("show");
    }
});

backToTopButton.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth" 
    });
});


const slider = document.getElementById('comparisonSlider');
const beforeImg = document.querySelector('.before-img');
const sliderLine = document.querySelector('.slider-line');
const sliderBtn = document.querySelector('.slider-button');

if (slider) {
    slider.addEventListener('input', (e) => {
        let value = e.target.value;
        beforeImg.style.width = value + "%";
        sliderLine.style.left = value + "%";
        sliderBtn.style.left = value + "%";
    });
}

