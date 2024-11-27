document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const usuario = document.querySelector('.retangulo-usuario').value;
    const senha = document.querySelector('.retangulo-senha').value;

    if (usuario && senha) {
        window.location.href = "informacoes/index.html";
    } else {
        alert('Por favor, preencha todos os campos.');
    }
});
