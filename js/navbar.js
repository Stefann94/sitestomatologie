export function initNavbar() {
    const burger = document.querySelector('#burger');
    const nav = document.querySelector('#navLinks');

    if (burger && nav) {
        burger.addEventListener('click', () => {
            // Toggle pentru meniu
            nav.classList.toggle('nav-active');
            // Toggle pentru animația burger-ului
            burger.classList.toggle('toggle');
            
            console.log("Meniu toggle executat");
        });
        
        // Opțional: Închide meniul când dai click pe un link
        const navLinks = document.querySelectorAll('.nav-links li a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                nav.classList.remove('nav-active');
                burger.classList.remove('toggle');
            });
        });

    } else {
        console.error("Elementele navbar-ului nu au fost găsite!");
    }
}