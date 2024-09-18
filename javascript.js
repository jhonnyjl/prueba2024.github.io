function isValidEmail(email) {
            const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return re.test(email);
        }

        function isValidURL(url) {
            const re = /^(ftp|http|https):\/\/[^ "]+$/;
            return re.test(url);
        }

        function showMessage(type, text) {
            const successAlert = document.getElementById('successAlert');
            const errorAlert = document.getElementById('errorAlert');
            
            if (type === 'success') {
                successAlert.textContent = text;
                successAlert.style.display = 'block';
                errorAlert.style.display = 'none';
            } else {
                errorAlert.textContent = text;
                errorAlert.style.display = 'block';
                successAlert.style.display = 'none';
            }
        }

        document.getElementById('registerForm').addEventListener('submit', function(event) {
            event.preventDefault();

            var email = document.getElementById('email').value;
            var redsocial1 = document.getElementById('redsocial1').value;
            var redsocial2 = document.getElementById('redsocial2').value;
            var mayorEdad = document.querySelector('input[name="mayorEdad"]:checked').value;
            var sexoFemenino = document.querySelector('input[name="sexoFemenino"]:checked').value;

            // Validar correo electrónico
            if (!isValidEmail(email)) {
                showMessage('error', 'Por favor ingresa un correo electrónico válido.');
                return;
            }

            // Validar URLs
            if (!isValidURL(redsocial1) || !isValidURL(redsocial2)) {
                showMessage('error', 'Por favor ingresa URLs válidas para las redes sociales.');
                return;
            }

            // Validación de restricciones
            if (localStorage.getItem('email') === email) {
                showMessage('error', 'Este correo ya ha sido registrado.');
                return;
            }

            if (redsocial1 === redsocial2) {
                showMessage('error', 'Las dos URLs de redes sociales no pueden ser iguales.');
                return;
            }

            if (mayorEdad !== 'si') {
                showMessage('error', 'Debes tener al menos 18 años.');
                return;
            }

            if (sexoFemenino !== 'si') {
                showMessage('error', 'Lo sentimos, no puedes registrarte.');
                return;
            }

            // Guardar correo en localStorage para prevenir el registro duplicado
            localStorage.setItem('email', email);

            // Mostrar mensaje de éxito
            showMessage('success', '¡Gracias por registrarte! Nos pondremos en contacto contigo pronto. Debido a que pueden presentarse perfiles falsos, se hace la solicitud de las 2 redes sociales, se verificará si cumplen con el objetivo.');
            
            // Enviar datos al servidor
            this.submit();
        });
