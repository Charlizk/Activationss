// Fonction pour afficher/masquer le menu déroulant
function toggleMenu() {
    const menu = document.getElementById('menu');
    const icon = document.querySelector('.icon-hamburger');
    
    // Animation de l'icône hamburger pour montrer l'activation
    icon.classList.toggle('open'); // Nous allons créer une classe "open" dans le CSS

    // Affichage ou masquage du menu avec une animation fluide
    if (menu.style.display === 'block') {
        menu.style.transform = 'translateX(100%)'; // Animé pour glisser le menu
        setTimeout(() => { 
            menu.style.display = 'none'; 
        }, 300); // Délai avant de masquer totalement
    } else {
        menu.style.display = 'block';
        setTimeout(() => {
            menu.style.transform = 'translateX(0)';
        }, 10); // Temps avant l'animation du glissement
    }
}

// Fonction pour fermer la pop-up avec animation
function closePopup() {
    const popup = document.getElementById('confirmationPopup');
    popup.style.opacity = 0; // Légère animation de disparition
    setTimeout(() => {
        popup.style.display = 'none';
    }, 300); // Attendre l'animation avant de masquer
}

// Fonction pour la gestion du formulaire et le comptage des caractères
document.getElementById('couponForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const couponCode = document.getElementById('couponCode').value;
    if (couponCode.length < 12) {
        alert("Le code coupon doit contenir 12 caractères.");
        return; // Arrêter l'envoi si le code est trop court
    }
    document.getElementById('confirmationPopup').style.display = 'block'; // Afficher la pop-up de confirmation
});

// Fonction pour le comptage des caractères du code coupon
document.getElementById('couponCode').addEventListener('input', function () {
    const charCount = document.getElementById('charCount');
    const remainingChars = 12 - this.value.length;
    charCount.textContent = `${remainingChars} caractères restants`;
});
