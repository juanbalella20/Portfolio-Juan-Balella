// Arreglo de frases motivacionales
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

// Elemento HTML donde se mostrarán las frases
const elementoFrase = document.getElementById("frase");

// Función para mostrar todas las frases letra por letra
async function mostrarFrases() {
  for (let i = 0; i < frases.length; i++) { // Recorre el array de frases
    const frase = frases[i];
    for (let j = 0; j < frase.length; j++) { // Recorre cada letra de la frase
      elementoFrase.innerText += frase[j]; // Añade la letra actual
      await new Promise(resolve => setTimeout(resolve, 50)); // Espera 50ms
    }
    await new Promise(resolve => setTimeout(resolve, 1000)); // Pausa 1 segundo tras la frase
    elementoFrase.innerText = ""; // Limpia el contenedor antes de la siguiente frase
  }
  mostrarFrases(); // Reinicia el ciclo infinito
}

// Inicia el ciclo al cargar la página
mostrarFrases();
