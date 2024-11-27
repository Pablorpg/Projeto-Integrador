const sair = document.querySelector(".link-sair");
var menuItem = document.querySelectorAll(".item-menu");
const inf = document.querySelector(".link-inf")
const desempenho = document.querySelector(".link-desempenho");
const suporte = document.querySelector(".link-suporte")
const conta = document.querySelector(".link-conta")
const loadingScreen = document.getElementById("loading-screen");

function selectLink() {
    menuItem.forEach((item) =>
        item.classList.remove("ativo")
    );
    this.classList.add("ativo");
}

menuItem.forEach((item) =>
    item.addEventListener("click", selectLink)
);

var btnExp = document.querySelector("#btn-exp");
var menuSide = document.querySelector(".menu-lateral");

btnExp.addEventListener("click", function () {
    menuSide.classList.toggle("expandir");
});

sair.addEventListener("click", (event) => {
    event.preventDefault();
    window.location.href = "https://www.google.com";
});

inf.addEventListener("click", (event) => {
    event.preventDefault();
    loadingScreen.style.display = 'flex';

    setTimeout(() => {
        window.location.href = "../informacoes/index.html";
    }, 100); 
})

suporte.addEventListener("click", (event) => {
    event.preventDefault()
    loadingScreen.style.display = 'flex';

    setTimeout(() => {
        window.location.href = "../suporte/index.html";
    }, 100); 
})

desempenho.addEventListener("click", (event) => {
    event.preventDefault()
    loadingScreen.style.display = 'flex';

    setTimeout(() => {
        window.location.href = "../desempenho/index.html";
    }, 100); 
})

conta.addEventListener("click", (event) => {
    event.preventDefault()
    loadingScreen.style.display = 'flex';

    setTimeout(() => {
        window.location.href = "../conta/index.html";
    }, 100); 
})

