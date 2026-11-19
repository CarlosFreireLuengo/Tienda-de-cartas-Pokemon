// Animaciones al hacer scroll
const observer = new IntersectionObserver(entries =>
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add('visible');
  }), { threshold: 0.2 });
document.querySelectorAll('.animar').forEach(el => observer.observe(el));

// Carrusel de imágenes con Swiper.js
new Swiper('.hero-slider', {
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
});
