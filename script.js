// Fonction pour afficher/masquer le menu déroulant
function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('open'); // Ajoute ou retire la classe "open"
}

// Fermer le menu en cliquant en dehors
document.addEventListener('click', function (e) {
    const menu = document.getElementById('menu');
    const hamburgerIcon = document.querySelector('.icon-hamburger');

    if (!menu.contains(e.target) && !hamburgerIcon.contains(e.target)) {
        menu.classList.remove('open');
    }
});

// Fonction pour fermer la pop-up avec animation
function closePopup() {
    const popup = document.getElementById('confirmationPopup');
    popup.style.display = 'none'; // Masque simplement la pop-up
}

// Gestion du formulaire et comptage des caractères
document.getElementById('couponForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Empêche le rechargement de la page

    const couponCode = document.getElementById('couponCode').value;

    // Validation du code coupon
    if (couponCode.length !== 12) {
        alert("Le code coupon doit contenir exactement 12 caractères.");
        return;
    }

    // Afficher la pop-up de confirmation
    const popup = document.getElementById('confirmationPopup');
    popup.style.display = 'block';
});

// Comptage des caractères pour le code coupon
document.getElementById('couponCode').addEventListener('input', function () {
    const charCount = document.getElementById('charCount');
    const remainingChars = 12 - this.value.length;
    charCount.textContent = `${remainingChars} caractères restants`;
});