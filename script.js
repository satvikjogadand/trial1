// Simple fade-in animation
document.addEventListener('DOMContentLoaded', () => {
  const elements = document.querySelectorAll('section');
  elements.forEach(el => {
    el.style.opacity = '0';
    setTimeout(() => {
      el.style.transition = 'opacity 0.5s ease';
      el.style.opacity = '1';
    }, 100);
  });
});
