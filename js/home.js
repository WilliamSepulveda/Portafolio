const switchButton = document.getElementById('switch');
const lightButton = document.querySelector('.button');

switchButton.addEventListener('change', function() {
    // Alternar la clase 'night-mode' en el body
    document.body.classList.toggle('night-mode');

    // Agregar la clase de animación al botón
    lightButton.classList.add('animate'); 

    // Remover la clase después de que termine la animación
    setTimeout(() => {
        lightButton.classList.remove('animate');
    }, 1000); // Duración de la animación en milisegundos (ajusta según sea necesario)
});


