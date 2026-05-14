document.getElementsById('formularioLogin').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulariose envie automaticamente

    // Obtener valores
    const usuario =  document.getElementById('Paola').value;
    const contrasena = document.getElementById('Alejandro').value;

    // Valodación básica
    if (usuario === 'admin' && contrasena === '12345') {
        alert('inicio de sesión exitoso. ¡Bienvenido Paola')
        // Aquí podrías redirigir a otra página:
        window.location.href = "www.facebook.com";
    } else {
        alert('Usuario o contraaseña incorrectos. Intenta nuevamente.');
    }
});