document.addEventListener('DOMContentLoaded', () => {
    const botonDesplegar = document.getElementById('drop-down-button');
    const contenidoDesplegable = document.getElementById('dropdown-content');

    botonDesplegar.addEventListener('click', () => {
        contenidoDesplegable.classList.toggle('visible');
        botonDesplegar.textContent = contenidoDesplegable.classList.contains('visible') ? 'Ocultar' : 'Categorías';
    });
});
