const switchButton = document.getElementById('switch');
const img2 = document.getElementById('img2');
const lightButton = document.querySelector('.button');
let isLightOn = false; 
switchButton.addEventListener('change', function() {
    // Alternar la clase 'night-mode' en el body
    document.body.classList.toggle('night-mode');

    if (document.body.classList.contains('night-mode')) {
        toggleLight(true); 
    } else {
        toggleLight(false); 
    }
});

// Agregar un evento al botón para cambiar el estado de la luz
lightButton.addEventListener('click', function() {
    toggleLight(); // Alternar el estado de la luz
});

// Función para alternar el estado de la luz
function toggleLight(turnOn = !isLightOn) {
    isLightOn = turnOn; // Cambia el estado de la luz

    if (isLightOn) {
        img2.classList.remove('light-on');
        img2.classList.add('light-off');
        
        // Añadir clase para animación
        lightButton.classList.add('light-active'); 
        setTimeout(() => {
            lightButton.classList.remove('light-active'); 
        }, 1000); 
    } else {
        img2.classList.remove('light-off');
        img2.classList.add('light-on');
    }
}
