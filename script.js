// Fonction pour afficher/masquer le menu déroulant
function toggleMenu() {
    const menu = document.getElementById('menu');
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }
}

// Fonction pour fermer la pop-up
function closePopup() {
    document.getElementById('confirmationPopup').style.display = 'none';
}

// Exemple de gestion du formulaire
document.getElementById('couponForm').addEventListener('submit', function (e) {
    e.preventDefault();
    document.getElementById('confirmationPopup').style.display = 'block';
});