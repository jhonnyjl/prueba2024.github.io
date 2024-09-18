function isValidEmail(email) {
            var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return re.test(email);
        }

        function isValidURL(url) {
            var re = /^(https?:\/\/)[^\s/$.?#].[^\s]*$/i;
            return re.test(url);
        }

        function showMessage(type, message) {
            var messageBox = document.getElementById('messageBox');
            messageBox.className = 'message-box ' + type;
            messageBox.innerText = message;
            messageBox.style.display = 'block';
        }

        document.getElementById('registerForm').addEventListener('submit', function(event) {
            var email = document.getElementById('email').value;
            var redsocial1 = document.getElementById('redsocial1').value;
            var redsocial2 = document.getElementById('redsocial2').value;
            var mayorEdad = document.querySelector('input[name="mayorEdad"]:checked').value;
            var sexoFemenino = document.querySelector('input[name="sexoFemenino"]:checked').value;

            // Validar correo electrónico
            if (!isValidEmail(email)) {
                showMessage('error', 'El correo electrónico ingresado no es válido.');
                event.preventDefault(); // Evita el envío
                return;
            }

            // Validar URLs
            if (!isValidURL(redsocial1)) {
                showMessage('error', 'La URL de la primera red social no es válida.');
                event.preventDefault(); // Evita el envío
                return;
            }

            if (!isValidURL(redsocial2)) {
                showMessage('error', 'La URL de la segunda red social no es válida.');
                event.preventDefault(); // Evita el envío
                return;
            }

            // Validar mayor de edad
            if (mayorEdad === 'no') {
                showMessage('error', 'Debes tener al menos 18 años para registrarte.');
                event.preventDefault(); // Evita el envío
                return;
            }

            // Validar cromosomas
            if (sexoFemenino === 'no') {
                showMessage('error', 'Solo se aceptan personas con cromosomas XX.');
                event.preventDefault(); // Evita el envío
                return;
            }
        });
