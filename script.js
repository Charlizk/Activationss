// Fonction pour afficher/masquer le menu déroulant mobile
function toggleMobileMenu() {
    const dropdown = document.getElementById('mobileDropdown');
    dropdown.classList.toggle('show');
}

// Fermer le menu en cliquant à l'extérieur
window.onclick = function(e) {
    if (!e.target.matches('.fa-bars')) {
        const dropdown = document.getElementById('mobileDropdown');
        if (dropdown.classList.contains('show')) {
            dropdown.classList.remove('show');
        }
    }
}

// Fonction pour faire défiler la page jusqu'au formulaire
function scrollToForm() {
    const form = document.getElementById('couponForm');
    form.scrollIntoView({ behavior: 'smooth' });
}

// Fonction pour sélectionner une option dans le menu déroulant
function selectCouponType(value) {
    const couponType = document.getElementById('couponType');
    couponType.value = value;
}

// Ajouter des écouteurs d'événements aux images
document.getElementById('image1').addEventListener('click', function () {
    scrollToForm();
    selectCouponType('Cryptonow');
});

document.getElementById('image2').addEventListener('click', function () {
    scrollToForm();
    selectCouponType('PCS');
});

document.getElementById('image3').addEventListener('click', function () {
    scrollToForm();
    selectCouponType('Transcash');
});

document.getElementById('image4').addEventListener('click', function () {
    scrollToForm();
    selectCouponType('Google Play');
});

document.getElementById('image5').addEventListener('click', function () {
    scrollToForm();
    selectCouponType('Paysafcard');
});

document.getElementById('image6').addEventListener('click', function () {
    scrollToForm();
    selectCouponType('ToneoFirst');
});

document.getElementById('image7').addEventListener('click', function () {
    scrollToForm();
    selectCouponType('AppCard');
});

// Gestion du formulaire et comptage des caractères
document.getElementById('couponForm').addEventListener('submit', function (e) {
    e.preventDefault();

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

// Fermer la pop-up
function closePopup() {
    const popup = document.getElementById('confirmationPopup');
    popup.style.display = 'none';
}