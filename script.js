// Variables
const cards = ['🍎', '🍌', '🍒', '🍇', '🥥', '🍋', '🍊', '🍉']; // Pares de cartas
let flippedCards = [];
let matchedCards = [];
let gameBoard = document.getElementById('game-board');

// Funciones
function createBoard() {
    const allCards = cards.concat(cards); // Duplicar las cartas
    shuffleArray(allCards); // Mezclar las cartas

    allCards.forEach(card => {
        const div = document.createElement('div');
        div.classList.add('card');
        div.innerHTML = `<span class="hidden">${card}</span>`;
        div.addEventListener('click', flipCard);
        gameBoard.appendChild(div);
    });
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function flipCard() {
    if (flippedCards.length < 2 && !flippedCards.includes(this) && !matchedCards.includes(this)) {
        this.classList.add('flip'); // Agregar clase 'flip' para voltear la carta
        setTimeout(() => {
            this.firstChild.classList.remove('hidden'); // Mostrar contenido después de la animación
        }, 150); // Ajustar tiempo para que la animación termine

        flippedCards.push(this);

        if (flippedCards.length === 2) {
            setTimeout(checkMatch, 1000);
        }
    }
}

function checkMatch() {
    const card1 = flippedCards[0].firstChild.textContent;
    const card2 = flippedCards[1].firstChild.textContent;

    if (card1 === card2) {
        matchedCards.push(flippedCards[0], flippedCards[1]);
        flippedCards = [];
        if (matchedCards.length === cards.length * 2) {
            Swal.fire({
                title: '¡Felicidades!',
                text: '¡Has ganado!',
                icon: 'success',
                confirmButtonText: 'OK'
            });
        }
    } else {
        flippedCards.forEach(card => {
            card.classList.remove('flip'); // Quitar clase 'flip' para voltear la carta de vuelta
            setTimeout(() => {
                card.firstChild.classList.add('hidden'); // Ocultar contenido después de la animación
            }, 150); // Ajustar tiempo para que la animación termine
        });
        flippedCards = [];
    }
}

// Inicialización
createBoard();

// Event listeners para los botones del menú
document.getElementById('memorama').addEventListener('click', function() {
    // Lógica para cambiar al juego de Memorama
    // Puedes ocultar el contenido actual y mostrar el contenido del juego de Memorama
    // Por ahora, vamos a recargar la página para reiniciar el juego de Memorama
    window.location.reload();
});

document.getElementById('serpiente').addEventListener('click', function() {
    // Lógica para cambiar al juego de Serpiente
    // Puedes ocultar el contenido actual y mostrar el contenido del juego de Serpiente
});

document.getElementById('actividades').addEventListener('click', function() {
    // Lógica para cambiar a la sección de Actividades Físicas
    // Puedes ocultar el contenido actual y mostrar el contenido de las actividades físicas
});
