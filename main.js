
// Lenis Smooth Scroll
const script = document.createElement('script');
script.src = 'https://unpkg.com/@studio-freight/lenis@1.0.39/dist/lenis.min.js';
document.head.appendChild(script);

script.onload = () => {
  const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smooth: true,
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);
};

// Intersection Observer for animations
document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.fade-in, .card').forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
  });
});
