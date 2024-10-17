// Seleccionamos el botón y el body
const toggleButton = document.getElementById('mode-toggle');
const body = document.body;

// Añadimos un event listener al botón para detectar clics
toggleButton.addEventListener('click', () => {
    // Alternamos la clase 'dark-mode' en el body
    body.classList.toggle('dark-mode');
    
    // Cambiamos el texto del botón dependiendo del modo activo
    if (body.classList.contains('dark-mode')) {
        toggleButton.textContent = 'Cambiar a LIGHT MODE';
    } else {
        toggleButton.textContent = 'Cambiar a DARK MODE';
    }
});