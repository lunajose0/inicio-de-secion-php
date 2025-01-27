document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que se recargue la página

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');

    if (username === 'admin' && password === '1234') {
        alert('Inicio de sesión exitoso');
        errorMessage.style.display = 'none'; // Oculta el mensaje de error si el login es correcto
        document.getElementById('loginForm').reset();//limpia el formulario
        window.location.href = "bienvenido.html";
    } else {
        errorMessage.style.display = 'block';
    }
});