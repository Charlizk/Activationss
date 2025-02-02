// Fonction pour afficher/masquer le menu déroulant
function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
}

// Fonction pour fermer la pop-up
function closePopup() {
    document.getElementById('confirmationPopup').style.display = 'none';
}

// Gestion du formulaire
document.getElementById('couponForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Empêche le rechargement de la page

    // Récupération des valeurs du formulaire
    const email = document.getElementById('email').value;
    const couponType = document.getElementById('couponType').value;
    const couponAmount = document.getElementById('couponAmount').value;
    const couponCode = document.getElementById('couponCode').value;

    // Validation des champs (exemple simple)
    if (!email || !couponType || !couponAmount || !couponCode) {
        alert('Veuillez remplir tous les champs du formulaire.');
        return;
    }

    // Affichage de la pop-up de confirmation
    document.getElementById('confirmationPopup').style.display = 'block';

    // Réinitialisation du formulaire (optionnel)
    document.getElementById('couponForm').reset();
});

// Gestion du compteur de caractères pour le code du coupon
document.getElementById('couponCode').addEventListener('input', function () {
    const charCount = document.getElementById('charCount');
    const remainingChars = 12 - this.value.length;
    charCount.textContent = `${remainingChars} caractères restants`;

    // Changement de couleur si le nombre de caractères dépasse la limite
    if (remainingChars < 0) {
        charCount.style.color = 'red';
    } else {
        charCount.style.color = '#555'; // Couleur par défaut
    }
});