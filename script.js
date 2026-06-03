// Funcionalidad para el menú hamburguesa
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    
    if (navLinks.classList.contains('active')) {
        menuToggle.textContent = '✕';
    } else {
        menuToggle.textContent = '☰';
    }
});

// Función para verificar el juego seleccionado y reproducir el MP3
function verificar(juego) {
    const resultado = document.getElementById('resultado');
    const sonido = document.getElementById('sonido-clic');
    
    // Reproducir el archivo MP3 (reinicia el audio si se vuelve a clickear rápido)
    sonido.currentTime = 0;
    sonido.play();

    // Lógica para mostrar la respuesta en pantalla
    if (juego === 'minecraft') {
        resultado.textContent = "¡Excelente elección! 🌍 Minecraft es un clásico interactivo de creatividad.";
        resultado.style.color = "lightgreen";
    } else if (juego === 'roblox') {
        resultado.textContent = "¡Genial! 🎮 Roblox cuenta con millones de mundos creados por la comunidad.";
        resultado.style.color = "cyan";
    } else if (juego === 'fortnite') {
        resultado.textContent = "¡Buenísimo! 🪂 Fortnite sigue dominando las temporadas de Battle Royale.";
        resultado.style.color = "magenta";
    }
}

