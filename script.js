// Récupère les éléments du DOM
const form = document.getElementById('couponForm');
const message = document.getElementById('message');
const couponCodeInput = document.getElementById('couponCode');
const charCount = document.getElementById('charCount');

// Gère la soumission du formulaire
form.addEventListener('submit', function (e) {
    e.preventDefault(); // Empêche l'envoi du formulaire

    const couponType = document.getElementById('couponType').value;
    const couponCode = couponCodeInput.value;

    if (couponType && couponCode) {
        if (/^[A-Z0-9]{12}$/.test(couponCode)) {
            showPopup(); // Affiche la pop-up de confirmation
            form.reset(); // Réinitialise le formulaire
            message.textContent = ''; // Efface le message
            charCount.textContent = '12 caractères restants'; // Réinitialise le compteur
        } else {
            message.textContent = 'Le code doit contenir 12 caractères (chiffres et lettres majuscules uniquement).';
            message.style.color = '#dc3545';
        }
    } else {
        message.textContent = 'Veuillez remplir tous les champs.';
        message.style.color = '#dc3545';
    }
});

// Gère le compteur de caractères
couponCodeInput.addEventListener('input', function () {
    const value = couponCodeInput.value;
    const remaining = 12 - value.length;
    charCount.textContent = `${remaining} caractères restants`;

    // Validation supplémentaire (exemple : uniquement des chiffres et des lettres)
    if (!/^[A-Z0-9]*$/.test(value)) {
        message.textContent = 'Le code doit contenir uniquement des lettres majuscules et des chiffres.';
        message.style.color = '#dc3545';
    } else {
        message.textContent = '';
    }

    // Changement de couleur de la bordure
    if (remaining === 0 && /^[A-Z0-9]{12}$/.test(value)) {
        couponCodeInput.style.borderColor = '#28a745'; // Bordure verte si valide
    } else {
        couponCodeInput.style.borderColor = '#dc3545'; // Bordure rouge si invalide
    }
});

// Affiche la pop-up de confirmation
function showPopup() {
    const popup = document.getElementById('confirmationPopup');
    popup.classList.add('show');
}

// Ferme la pop-up de confirmation
function closePopup() {
    const popup = document.getElementById('confirmationPopup');
    popup.classList.remove('show');
    setTimeout(() => popup.style.display = 'none', 300); // Attend la fin de l'animation
}

// Vérifie que l'image est bien chargée
window.addEventListener('load', function () {
    const illustration = document.querySelector('.illustration');
    if (illustration) {
        console.log('L\'image est bien chargée :', illustration.src);
    } else {
        console.error('L\'image n\'a pas été trouvée.');
    }
});