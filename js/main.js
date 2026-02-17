import { initNavbar } from './navbar.js'; 

document.addEventListener('DOMContentLoaded', () => {
    initNavbar();
});

function initScrollReveal() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const ratio = entry.intersectionRatio;

            // Când intră în viewport peste 20%%
            if (ratio > 0.2) {
                entry.target.classList.add("active");
            }

            // Când iese sub 0.02 (aproape complet)
            if (ratio < 0.02) {
                entry.target.classList.remove("active");
            }
        });
    }, {
        threshold: [0, 0.02, 0.2, 1]
    });

    document.querySelectorAll(".scroll-reveal").forEach(el => observer.observe(el));
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

