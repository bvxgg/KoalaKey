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

// Section Carrousel page Produits
document.addEventListener('DOMContentLoaded', function() {
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    const slides = document.querySelectorAll('.carrousel-contenu .slide');
    const totalSlides = slides.length;
    const captions = [
        "Clavier mécanique",  // Titre pour la première image
        "Clavier RGB",        // Titre pour la deuxième image
        "Clavier sans fil",   // Titre pour la troisième image
    ]; // Tableau contenant les légendes pour chaque slide
    const captionElement = document.querySelector('.carousel-caption');  // Élément où le texte sera changé

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

        // Met à jour la légende du carrousel
        captionElement.textContent = captions[currentIndex];
    }

    // Initialiser la première image et légende
    changeSlide(currentIndex);

    // Gestion des boutons "Précédent" et "Suivant"
    prevButton.addEventListener('click', function() {
        changeSlide(currentIndex - 1);
    });

    nextButton.addEventListener('click', function() {
        changeSlide(currentIndex + 1);
    });
});

//Section produits featured
document.addEventListener('DOMContentLoaded', () => {
    const produitsList = document.getElementById('produits-list');
    const produitsItems = Array.from(produitsList.children); // Convertir la NodeList en Array
    const itemsPerPage = 4;
    let currentPage = 0;

    // Fonction pour afficher seulement les 4 éléments correspondant à la page actuelle
    function updateProductDisplay() {
        // Masquer tous les éléments
        produitsItems.forEach((item, index) => {
            item.style.display = 'none';
        });

        // Calculer l'index de début et de fin
        const start = currentPage * itemsPerPage;
        const end = start + itemsPerPage;

        // Afficher les éléments correspondant à la page
        produitsItems.slice(start, end).forEach(item => {
            item.style.display = 'block';
        });
    }

    // Gestion du bouton "Précédent"
    const prevButton = document.getElementById('featured-prev');
    prevButton.addEventListener('click', () => {
        if (currentPage > 0) {
            currentPage--;
            updateProductDisplay();
        }
    });

    // Gestion du bouton "Suivant"
    const nextButton = document.getElementById('featured-next');
    nextButton.addEventListener('click', () => {
        if ((currentPage + 1) * itemsPerPage < produitsItems.length) {
            currentPage++;
            updateProductDisplay();
        }
    });

    // Initialiser l'affichage avec les 4 premiers éléments
    updateProductDisplay();
});