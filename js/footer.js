function initFooter() {
    // Calculăm prefixul verificând adâncimea folderului curent față de rădăcina site-ului
    // Această metodă funcționează indiferent de numele folderului (ortodontie, contact, etc.)
    const pathArray = window.location.pathname.split('/').filter(p => p && !p.endsWith('.html'));
    
    // Dacă suntem în rădăcină, prefixul e gol. Dacă suntem într-un folder, adăugăm ../
    // Notă: Ajustează cifra 0 dacă site-ul tău rulează într-un subfolder pe server (ex: /proiect/)
    const depth = pathArray.length;
    const pathPrefix = depth > 0 ? "../".repeat(depth) : "";

    // 1. Injectăm CSS-ul cu calea calculată
    if (!document.querySelector('link[href*="footer.css"]')) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = `${pathPrefix}css/footer.css`;
        document.head.appendChild(link);
    }

    const footerHTML = `
    <footer class="main-footer">
        <div class="footer-container">
            <div class="footer-column company-info">
                <h3>DentalCare Clinic</h3>
                <p>Str. Exemplului Nr. 10, București</p>
                <p>+40 700 000 000</p>
                <p>office@dentalcare.ro</p>
            </div>

            <div class="footer-column">
                <h4>Program</h4>
                <p>L-V: 09:00 - 20:00</p>
                <p>Sâmbătă: 10:00 - 16:00</p>
                <p>Duminică: Închis</p>
            </div>

            <div class="footer-column footer-logos">
                <h4>Link-uri Utile</h4>
                <div class="logos-wrapper">
                    <a href="https://anpc.ro/" target="_blank" rel="nofollow">
                        <img src="${pathPrefix}pictures/anpc.png" alt="ANPC" class="footer-logo-img">
                    </a>
                    <a href="#" target="_blank">
                        <img src="${pathPrefix}pictures/visa.png" alt="Visa Mastercard" class="footer-logo-img card-logo">
                    </a>
                </div>
            </div>
        </div>
        <div class="footer-bottom">
            <p>&copy; 2026 DentalCare. Toate drepturile rezervate.</p>
        </div>
    </footer>
    `;

    document.body.insertAdjacentHTML('beforeend', footerHTML);
}

document.addEventListener('DOMContentLoaded', initFooter);