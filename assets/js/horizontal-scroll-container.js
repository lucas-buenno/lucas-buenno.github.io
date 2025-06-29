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
      
      const isAtStart = scrollArea.scrollLeft <= 0;
      const isAtEnd = scrollArea.scrollLeft >= scrollArea.scrollWidth - scrollArea.clientWidth;
      

      if (isAtStart && isScrollingLeft) {
        return;
      }
      
      if (isAtEnd && isScrollingRight) {
        return; 
      }
      
      e.preventDefault();
      const newScrollLeft = scrollArea.scrollLeft + (isScrollingRight ? scrollSpeed : -scrollSpeed);
      scrollArea.scrollLeft = newScrollLeft;
    }
  }, { passive: false });
});