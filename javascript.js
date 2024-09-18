document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var email = document.getElementById('email').value;
    var redsocial1 = document.getElementById('redsocial1').value;
    var redsocial2 = document.getElementById('redsocial2').value;
    var mayorEdad = document.querySelector('input[name="mayorEdad"]:checked').value;
    var sexoFemenino = document.querySelector('input[name="sexoFemenino"]:checked').value;

    // Validar correo electrónico
    if (!isValidEmail(email)) {
        showMessage('error', 'El correo electrónico ingresado no es válido.');
        return;
    }

    // Validar URLs
    if (!isValidURL(redsocial1)) {
        showMessage('error', 'La URL de la primera red social no es válida.');
        return;
    }

    if (!isValidURL(redsocial2)) {
        showMessage('error', 'La URL de la segunda red social no es válida.');
        return;
    }

    // Validar mayor de edad
    if (mayorEdad === 'no') {
        showMessage('error', 'Debes tener al menos 18 años para registrarte.');
        return;
    }

    // Validar cromosomas
    if (sexoFemenino === 'no') {
        showMessage('error', 'Solo se aceptan personas con cromosomas XX.');
        return;
    }

    // Si todas las validaciones pasan, redirigir a la página de agradecimiento
    window.location.href = 'gracias.html';

    // Limpiar el formulario
    this.reset();
});
