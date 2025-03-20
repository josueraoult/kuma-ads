// Liste des annonces à afficher
const ads = [
    { title: "Offres spéciales sur Amazon", description: "Découvrez des produits exclusifs avec des remises exceptionnelles.", link: "#" },
    { title: "Réductions sur eBay", description: "Jusqu'à 70% de réduction sur des articles populaires.", link: "#" },
    { title: "Apple - Nouveaux produits", description: "Découvrez les derniers produits Apple avec des promotions exclusives.", link: "#" }
];

// Fonction pour afficher les publicités dans le DOM
function displayAds() {
    const adsContainer = document.getElementById('ads-container');
    adsContainer.innerHTML = ''; // Vider le conteneur avant de le remplir

    ads.forEach(ad => {
        const adElement = document.createElement('div');
        adElement.classList.add('ad', 'bg-white', 'p-6', 'rounded-lg', 'shadow-lg', 'dark:bg-gray-800', 'transition-all', 'hover:shadow-xl', 'transform', 'hover:scale-105');

        adElement.innerHTML = `
            <h2 class="text-xl font-semibold text-gray-800 dark:text-white">${ad.title}</h2>
            <p class="text-gray-600 dark:text-gray-300 mt-2">${ad.description}</p>
            <a href="${ad.link}" class="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-all">Cliquez ici</a>
        `;

        adsContainer.appendChild(adElement);
    });
}

// Afficher les publicités au chargement de la page
document.addEventListener('DOMContentLoaded', displayAds);
//PropellerAds