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

setInterval(criarCoracao, 300);
