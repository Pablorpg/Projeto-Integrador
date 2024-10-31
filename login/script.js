const usuario = document.querySelector(".retangulo-usuario");
const senha = document.querySelector(".retangulo-senha");
const mensagemUsuario = document.querySelector(".mensagem-1");
const mensagemSenha = document.querySelector(".mensagem-2");
const loginForm = document.querySelector("#loginForm");

loginForm.addEventListener("submit", (event) => {
    event.preventDefault();

    let hasError = false;

    if (usuario.value.trim() === "") {
        mensagemUsuario.textContent = "Campo obrigatório!";
        hasError = true;
    } else {
        mensagemUsuario.textContent = ""; 
    }

    if (senha.value.trim() === "") {
        mensagemSenha.textContent = "Campo obrigatório!";
        hasError = true;
    } else {
        mensagemSenha.textContent = ""; 
    }

    if (!hasError) {
        window.location.href = "../novidades/index.html";
    }
});
