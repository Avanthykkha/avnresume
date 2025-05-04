document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        card.style.boxShadow = '0 0 10px #b2e4c3';
      });
      card.addEventListener('mouseleave', () => {
        card.style.boxShadow = 'none';
      });
    });
  });
  