// Section Header
// Récupérer le bouton burger et le menu
const burgerMenu = document.getElementById('burger-menu');
const menu = document.getElementById('menu');

// Ajouter un événement de clic sur le bouton burger
burgerMenu.addEventListener('click', () => {
    // Ajouter ou supprimer la classe "active" pour afficher/masquer le menu
    menu.classList.toggle('active');
});

// Section Carrousel
document.addEventListener('DOMContentLoaded', function() {
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    const slides = document.querySelectorAll('.carrousel-contenu .slide');
    const totalSlides = slides.length;
    let currentIndex = 0;

    // Fonction pour changer de slide
    function changeSlide(index) {
        if (index < 0) {
            currentIndex = totalSlides - 1;  // Boucle à la dernière image
        } else if (index >= totalSlides) {
            currentIndex = 0;  // Boucle à la première image
        } else {
            currentIndex = index;
        }

        // Déplace le carrousel en fonction de l'index
        document.querySelector('.carrousel-contenu').style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    // Initialiser la première image (la première image est déjà affichée à l'initialisation)
    changeSlide(currentIndex);

    // Gestion des boutons "Précédent" et "Suivant"
    prevButton.addEventListener('click', function() {
        changeSlide(currentIndex - 1);
    });

    nextButton.addEventListener('click', function() {
        changeSlide(currentIndex + 1);
    });
});