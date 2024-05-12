// Game data
const gamesData = [
    { 
        title: "Starfield", 
        releaseDate: "6 Settembre",
        colorReleaseDate: "white",
        coverImage: "Immagini/StarfieldCover.jpg", 
        platforms: ["steam", "xboxSeries"],
        boxShadow: "0 0 1.2vw 0 rgb(80, 105, 125)",
        link: "https://www.youtube.com/watch?v=kfYEiTdsyas",
        backgroundColor: "#1C2730"
    },
    { 
        title: "Gunbrella", 
        releaseDate: "13 Settembre", 
        colorReleaseDate: "black",
        coverImage: "Immagini/GunbrellaCover.jpg", 
        platforms: ["steam", "switch"],
        boxShadow: "0 0 1.2vw 0 rgb(237, 144, 47)",
        link: "https://www.youtube.com/watch?v=tEe5NYp9018",
        backgroundColor: "#F0912E"
    },
    { 
        title: "Lies of P", 
        releaseDate: "19 Settembre", 
        colorReleaseDate: "white",
        coverImage: "Immagini/LiesOfPCover.webp", 
        platforms: ["steam", "ps4", "ps5", "xboxOne", "xboxSeries"],
        boxShadow: "0 0 1.2vw 0 rgba(9,76,99,8)",
        link: "https://www.youtube.com/watch?v=kXZoKdr-xeo",
        backgroundColor: "rgba(9,76,99,8)"
    },
    { 
        title: "Mortal Kombat 1", 
        releaseDate: "19 Settembre", 
        colorReleaseDate: "black",
        coverImage: "Immagini/MortalKombatCover.jfif", 
        platforms: ["steam", "switch", "ps5", "xboxSeries"],
        boxShadow: "0 0 1.2vw 0 rgb(161, 166, 162)",
        link: "https://www.youtube.com/watch?v=MYa7L4jp11E",
        backgroundColor: "#e6e6e6"
    },
    { 
        title: "Resident Evil 4: Separate Ways", 
        releaseDate: "21 Settembre ", 
        colorReleaseDate: "white",
        coverImage: "Immagini/ResidentEvil4-SeparateWays.webp", 
        platforms: ["steam", "ps4", "ps5", "xboxOne", "xboxSeries"],
        boxShadow: "0 0 1.2vw 0 rgb(173, 21, 44)",
        link: "https://www.youtube.com/watch?v=CqFGDbKSUso",
        backgroundColor: "#C31B34"
    },
    { 
        title: "Payday 3", 
        releaseDate: "21 Settembre  ", 
        colorReleaseDate: "white",
        coverImage: "Immagini/Payday3Cover.webp", 
        platforms: ["steam", "ps4", "ps5", "xboxOne", "xboxSeries"],
        boxShadow: "0 0 1.2vw 0 rgb(22, 156, 26)",
        link: "https://www.youtube.com/watch?v=TlkwDNirzF8",
        backgroundColor: "#138a17"
    },
    { 
        title: "Cyberpunk 2077: Phantom Liberty", 
        releaseDate: "26 Settembre  ", 
        colorReleaseDate: "black",
        coverImage: "Immagini/CyberpunkPhantomLibertyCover.webp", 
        platforms: ["steam", "ps5", "xboxSeries"],
        boxShadow: "0 0 1.2vw 0 rgb(246, 250, 7)",
        link: "https://www.youtube.com/watch?v=nJn3tMahZNc",
        backgroundColor: "#FAED07"
    },
    { 
        title: "Wo Long Fallen Dynasty: ConquerorOfJiangdong", 
        releaseDate: "27 Settembre  ", 
        colorReleaseDate: "white",
        coverImage: "Immagini/WoLongFallenDynastyConquerorOfJiangdongCover.jpg", 
        platforms: ["steam", "ps4", "ps5", "xboxOne", "xboxSeries"],
        boxShadow: "0 0 1.2vw 0 rgb(99, 65, 54)",
        link: "https://www.youtube.com/watch?v=lqn1HzROGyI",
        backgroundColor: "#684436"
    },
    { 
        title: "FC 24", 
        releaseDate: "29 Settembre", 
        colorReleaseDate: "black",
        coverImage: "Immagini/FC24Cover.jpg", 
        platforms: ["steam", "switch", "ps4", "ps5", "xboxOne", "xboxSeries"],
        boxShadow: "0 0 1.2vw 0 rgb(37, 219, 210)",
        link: "https://www.youtube.com/watch?v=XhP3Xh4LMA8",
        backgroundColor: "#76B8D8"
    },
    { 
        title: "Cocoon", 
        releaseDate: "29 Settembre", 
        colorReleaseDate: "white",
        coverImage: "Immagini/CocoonCover.jpg", 
        platforms: ["steam", "switch", "ps4", "ps5", "xboxOne", "xboxSeries"],
        boxShadow: "0 0 1.2vw 0 rgb(207, 102, 23)",
        link: "https://www.youtube.com/watch?v=U4Rv0aAHW9w",
        backgroundColor: "#d13e1d"
    },
    // Add more game data objects here
];

// Function to generate a card element for each game
function generateCard(game) {
    const card = document.createElement('div');
    card.classList.add('card');
    card.style.boxShadow = game.boxShadow;

    const link = document.createElement('a');
    link.href = game.link;

    const coverImage = document.createElement('img');
    coverImage.src = game.coverImage;
    coverImage.classList.add('cover');
    link.appendChild(coverImage);

    const container = document.createElement('div');
    container.classList.add('container');
    container.style.backgroundColor = game.backgroundColor;

    const releaseDate = document.createElement('h1');
    releaseDate.textContent = game.releaseDate;
    releaseDate.classList.add('releaseDate');
    releaseDate.style.color = game.colorReleaseDate;
    container.appendChild(releaseDate);

    const p = document.createElement('p');
    game.platforms.forEach(platform => {
        const platformIcon = document.createElement('img');
        platformIcon.classList.add(platform);
        p.appendChild(platformIcon);
    });
    container.appendChild(p);
    card.appendChild(link);
    card.appendChild(container);

    return card;
}

// Function to generate game cards and append them to the main section
function generateGameCards() {
    // Determine the number of cards per row based on screen size
    let cardsPerRow = 3; // Default value
    if (window.matchMedia('(max-width: 780px)').matches) {
        cardsPerRow = 2;
    } else if (window.matchMedia('(max-width: 480px)').matches) {
        cardsPerRow = 1;
    }

    let currentRow;
    const main = document.querySelector('section');
    gamesData.forEach((game, index) => {
        if (index % cardsPerRow === 0) {
            // Start a new row
            currentRow = document.createElement('div');
            currentRow.classList.add('cardsRow');
            main.appendChild(currentRow);
        }
        const card = generateCard(game);
        currentRow.appendChild(card);
    });
} 

// Generate game cards when the DOM content is loaded
document.addEventListener('DOMContentLoaded', generateGameCards);