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
        "Project Space 65",  // Titre pour la première image
        "Metal Alice",        // Titre pour la deuxième image
        "Wood 65",   // Titre pour la troisième image
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

// Récupération et affichage météo
fetch("https://api.openweathermap.org/data/2.5/weather?q=Strasbourg,fr&appid=c21a75b667d6f7abb81f118dcf8d4611&units=metric")
.then(function(res) {
    return res.json();
})
.then(function(data) {
    console.log(data);

    const temperature = data.main.temp;
    const ville = data.name;

    let dataHTML = `
        <p>La température actuelle à ${ville} est de ${temperature}°C.</p>
    `;

    document.getElementById('meteo').innerHTML = dataHTML;
})
.catch(function(error) {
    console.error('Erreur lors de la récupération des données :', error);
    document.getElementById('meteo').innerHTML = "<p>Impossible de récupérer les données météo.</p>";
});

// Fonctionalité ajax pour les actualités
const container = document.querySelector(".articles-contenu ul");

fetch("articles.json")
.then(function(response){
    return response.json()
})
.then(function(data){

    let html = "";

    data.forEach(function(article){
        html += `
            <li>
                <a href="${article.lien}">
                    <img src="${article.img}" alt="${article.alt}">
                </a>
                <a href="${article.lien}">
                    <h3>${article.titre}</h3>
                </a>
                <p>${article.texte}</p>
                <a href="${article.lien}" class="button-articles">Plus</a>
            </li>
        `

    })

    container.innerHTML = html;
})