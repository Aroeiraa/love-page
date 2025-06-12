const envelope = document.querySelector('.envelope-wrapper');

// Corrige o caminho da imagem 2
const imageUrls = [
  './images/foto1.jpg',
  './images/foto2.jpg',
  './images/foto3.jpg',
  './images/foto4.jpg',
  './images/foto5.jpg',
  './images/foto6.jpg',
  './images/foto7.jpg',
  './images/foto8.jpg'
];

// Embaralha as imagens e garante que todas aparecem antes de repetir
let shuffledImages = [];
function getNextImage() {
  if (shuffledImages.length === 0) {
    shuffledImages = [...imageUrls].sort(() => Math.random() - 0.5);
  }
  return shuffledImages.pop();
}

function criarCoracao() {
  const coracao = document.createElement('div');
  coracao.classList.add('heart');
  coracao.style.left = Math.random() * 100 + 'vw';
  coracao.style.animationDuration = (Math.random() * 3 + 3) + 's';
  coracao.style.opacity = Math.random();
  document.body.appendChild(coracao);
  setTimeout(() => {
    coracao.remove();
  }, 6000);
}

function criarCoracaoImagem() {
  const coracao = document.createElement('img');
  coracao.classList.add('heart-image');
  coracao.src = getNextImage();
  coracao.style.left = Math.random() * 100 + 'vw';
  coracao.style.animationDuration = (Math.random() * 3 + 3) + 's';
  document.body.appendChild(coracao);
  setTimeout(() => {
    coracao.remove();
  }, 6000);
}

// Mostra mais fotos e menos corações vermelhos (80% fotos, 20% corações)
envelope.addEventListener('click', () => {
  envelope.classList.add('open');
  setTimeout(() => {
    setInterval(() => {
      Math.random() < 0.8 ? criarCoracaoImagem() : criarCoracao();
    }, 300);
  }, 500);
});

// Controle do botão da carta
document.addEventListener('DOMContentLoaded', () => {
  const btnCarta = document.getElementById('btn-carta');
  const cartaConteudo = document.getElementById('carta-conteudo');
  const titulo = document.querySelector('.message h1');
  
  function updateTimer() {
    const startDate = new Date('2024-07-01T00:00:00').getTime(); // Start date: July 1, 2024
    const now = new Date().getTime();
    const diff = now - startDate;

    if (diff > 0) {
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      document.getElementById('days').textContent = days;
      document.getElementById('hours').textContent = hours;
      document.getElementById('minutes').textContent = minutes;
      document.getElementById('seconds').textContent = seconds;
    }
  }

  if (btnCarta && cartaConteudo) {
    btnCarta.addEventListener('click', (e) => {
      e.stopPropagation();
      cartaConteudo.classList.add('aberta');
      btnCarta.style.display = 'none';
      titulo.style.display = 'none';
      // Start the timer when the card is opened
      updateTimer();
      setInterval(updateTimer, 1000);
    });

    document.addEventListener('click', () => {
      if (cartaConteudo.classList.contains('aberta')) {
        cartaConteudo.classList.remove('aberta');
        btnCarta.style.display = 'block';
        titulo.style.display = 'inline-block';
      }
    });

    cartaConteudo.addEventListener('click', (e) => {
      e.stopPropagation();
    });
  }
});
