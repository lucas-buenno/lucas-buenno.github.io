window.addEventListener('DOMContentLoaded', () => {
  const scrollArea = document.getElementById('imgScrollGallery');
  let isHovering = false;

  // Verifica se o elemento existe
  if (!scrollArea) {
    console.error('Elemento imgScrollGallery não encontrado');
    return;
  }

  // Adiciona evento para detectar quando o mouse entra no container
  scrollArea.addEventListener('mouseenter', () => {
    isHovering = true;
  });

  // Adiciona evento para detectar quando o mouse sai do container
  scrollArea.addEventListener('mouseleave', () => {
    isHovering = false;
  });

  // Evento de scroll do mouse
  scrollArea.addEventListener('wheel', (e) => {
    if (isHovering) {
      const scrollSpeed = 400;
      const isScrollingRight = e.deltaY > 0;
      const isScrollingLeft = e.deltaY < 0;
      
      // Verifica se está no início (esquerda) e tentando rolar para a esquerda
      const isAtStart = scrollArea.scrollLeft <= 0;
      // Verifica se está no final (direita) e tentando rolar para a direita
      const isAtEnd = scrollArea.scrollLeft >= scrollArea.scrollWidth - scrollArea.clientWidth;
      
      // Se está no início e tentando rolar para a esquerda, permite scroll vertical
      if (isAtStart && isScrollingLeft) {
        return; // Não previne o comportamento padrão
      }
      
      // Se está no final e tentando rolar para a direita, permite scroll vertical
      if (isAtEnd && isScrollingRight) {
        return; // Não previne o comportamento padrão
      }
      
      // Caso contrário, previne o scroll vertical e faz o scroll horizontal
      e.preventDefault();
      const newScrollLeft = scrollArea.scrollLeft + (isScrollingRight ? scrollSpeed : -scrollSpeed);
      scrollArea.scrollLeft = newScrollLeft;
    }
  }, { passive: false });
});