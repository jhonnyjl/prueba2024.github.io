document.getElementById('registerForm').addEventListener('submit', function(event) {
            event.preventDefault();

            var email = document.getElementById('email').value;
            var redsocial1 = document.getElementById('redsocial1').value;
            var redsocial2 = document.getElementById('redsocial2').value;
            var mayorEdad = document.querySelector('input[name="mayorEdad"]:checked').value;
            var sexoFemenino = document.querySelector('input[name="sexoFemenino"]:checked').value;

            // Validación de restricciones
            if (localStorage.getItem('email') === email) {
                alert('Este correo ya ha sido registrado.');
                return;
            }

            if (redsocial1 === redsocial2) {
                alert('Las dos URLs de redes sociales no pueden ser iguales.');
                return;
            }

            if (mayorEdad !== 'si') {
                alert('Debes tener al menos 18 años.');
                return;
            }

            if (sexoFemenino !== 'si') {
                alert('Lo sentimos, no puedes registrarte.');
                return;
            }

            // Guardar correo en localStorage para prevenir el registro duplicado
            localStorage.setItem('email', email);

            // Mostrar mensaje de éxito
            document.getElementById('message').style.display = 'block';
            document.getElementById('message').textContent = '¡Gracias por registrarte! Nos pondremos en contacto contigo pronto. Se hará la verificación de sus redes sociales, una vez verificadas, se le enviará un código de invitación a su correo. Nos reservamos el derecho de admisión.';
        });