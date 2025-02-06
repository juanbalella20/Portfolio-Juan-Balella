// ----- Animación de frases motivacionales -----
const frases = [
  "The best mistake is the one that teaches you something new.",
  "Don't fear the code; fear not trying.",
  "Success is the sum of small efforts repeated day after day.",
  "Learning to program is like gaining a new superpower.",
  "A programmer is someone who solves a problem you didn't know you had.",
  "Don't give up. Every great programmer was once a beginner.",
  "Write code today that you can easily understand tomorrow.",
  "Every line of code you write is a step closer to mastery.",
  "Practice doesn't make perfect, but it makes you better every day.",
  "A bug is an opportunity to learn, not a failure."
];

const elementoFrase = document.getElementById("frase");

async function mostrarFrases() {
  for (const frase of frases) {
    for (const char of frase) {
      elementoFrase.textContent += char;
      await new Promise(resolve => setTimeout(resolve, 50)); // 50ms por carácter
    }
    await new Promise(resolve => setTimeout(resolve, 1000)); // Pausa de 1 segundo
    elementoFrase.textContent = "";
  }
  mostrarFrases(); // Reinicia el ciclo
}

mostrarFrases();

// ----- Intersection Observer para animación fade-in -----
const faders = document.querySelectorAll('.fade-in');
const appearOptions = {
  threshold: 0.3
};

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('visible');
    appearOnScroll.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

// ----- Menú hamburguesa para móviles -----
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// ----- Botón Back to Top -----
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 300) {
    backToTop.style.display = 'block';
  } else {
    backToTop.style.display = 'none';
  }
});

backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ----- Preloader: Oculta el preloader cuando se carga la página -----
window.addEventListener('load', () => {
  const preloader = document.getElementById('preloader');
  preloader.style.opacity = '0';
  setTimeout(() => {
    preloader.style.display = 'none';
  }, 500);
});
