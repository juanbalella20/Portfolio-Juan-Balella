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


// Inicializa EmailJS (reemplaza YOUR_USER_ID con tu ID real)
emailjs.init("YOUR_USER_ID");

// Maneja el envío del formulario de contacto
document.getElementById("contact-form").addEventListener("submit", function(event) {
  event.preventDefault(); // Evita que el formulario se envíe de forma tradicional

  // Prepara los parámetros que serán enviados a través de EmailJS
  const templateParams = {
    from_name: document.getElementById("nombre").value,
    from_email: document.getElementById("correo").value,
    message: document.getElementById("mensaje").value,
    to_email: "jbalella@fi.uba.ar"
  };

  // Envía el correo usando el servicio y la plantilla configurados en EmailJS
  emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", templateParams)
    .then(function(response) {
      console.log('SUCCESS!', response.status, response.text);
      // Muestra una alerta estética al usuario
      Swal.fire({
        title: 'Message Sent!',
        text: 'Your message has been sent successfully.',
        icon: 'success',
        confirmButtonColor: '#5D99C2'
      });
      // Opcional: reinicia el formulario
      document.getElementById("contact-form").reset();
    }, function(error) {
      console.log('FAILED...', error);
      Swal.fire({
        title: 'Error',
        text: 'There was an error sending your message. Please try again later.',
        icon: 'error',
        confirmButtonColor: '#5D99C2'
      });
    });
});

