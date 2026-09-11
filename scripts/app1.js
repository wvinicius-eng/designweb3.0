let i = 1;

const imagem = document.getElementById("foto");
const botaoProx = document.getElementById("prox");
const botaoAnt = document.getElementById("ant");

function proximaImagem(e) {
    e.preventDefault();

    if (i < 6) {
        i = i + 1;
    }

    imagem.setAttribute("src", `./pets/img/foto${i}.jpg`);
}

function imagemAnterior(e) {
    e.preventDefault();

    if (i > 1) {
        i = i - 1;
    }

    imagem.setAttribute("src", `./pets/img/foto${i}.jpg`);
}

botaoProx.addEventListener("click", proximaImagem);
botaoAnt.addEventListener("click", imagemAnterior);

