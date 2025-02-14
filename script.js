const siButton = document.getElementById('siButton');
const noButton = document.getElementById('noButton');
const message = document.getElementById('message');
const gif = document.getElementById('gif');
const pregunta = document.getElementById('pregunta');
const sabiaQueDiriasQueSi = document.getElementById('sabiaQueDiriasQueSi');
const verInvitacionButton = document.getElementById('verInvitacionButton');
const invitacion = document.getElementById('invitacion');
const siguienteButton = document.getElementById('siguienteButton');
const ultimaParte = document.getElementById('ultimaParte');

let noCount = 0;

const messages = [
    "Di sí por favor",
    "Piénsalo de nuevo",
    "No te arrepentirás"
];

const gifs = [
    "osito1.gif",  // GIF para el primer "No"
    "osito2.gif",  // GIF para el segundo "No"
    "osito3.gif"   // GIF para el tercer "No"
];

noButton.addEventListener('click', () => {
    if (noCount < messages.length) {
        message.textContent = messages[noCount]; // Actualiza el mensaje
        gif.src = gifs[noCount]; // Cambia el GIF
        noCount++;
    } else {
        noButton.style.display = 'none'; // Oculta el botón "No" después de 3 intentos
    }
});

siButton.addEventListener('click', () => {
    pregunta.classList.add('hidden'); // Oculta la pregunta
    sabiaQueDiriasQueSi.classList.remove('hidden'); // Muestra el mensaje "Sabía que dirías que sí"

    // Lanza confeti
    confetti({
        particleCount: 150,
        spread: 60,
        origin: { y: 0.6 }
    });
});

verInvitacionButton.addEventListener('click', () => {
    sabiaQueDiriasQueSi.classList.add('hidden'); // Oculta el mensaje "Sabía que dirías que sí"
    invitacion.classList.remove('hidden'); // Muestra la invitación
});

siguienteButton.addEventListener('click', () => {
    invitacion.classList.add('hidden'); // Oculta la invitación
    ultimaParte.classList.remove('hidden'); // Muestra la última parte
});