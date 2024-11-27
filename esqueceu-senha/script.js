const enviar = document.querySelector(".botao-enviar");
const usuario = document.querySelector(".retangulo-usuario");
const mensagem = document.querySelector(".mensagem");
const loadingScreen = document.getElementById("loading-screen");
const voltar = document.querySelector(".botao-voltar");

enviar.addEventListener("click", (event) => {
    event.preventDefault();

    if (usuario.value === "") {
        mensagem.textContent = "Campo obrigatório!";
    } else {
        mensagem.textContent = "";

        loadingScreen.style.display = 'flex';

        setTimeout(() => {
            window.location.href = "../informacoes/index.html";
        }, 5000); 
    }
});

voltar.addEventListener("click", (event) => {
    event.preventDefault();

    loadingScreen.style.display = 'flex';

    setTimeout(() => {
        window.location.href = "../index.html";
    }, 500); 
});
