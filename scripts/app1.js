
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

const cbbox = document.getElementById("combobox");

function selecionar(e) {
    e.preventDefault();

    i = Number(cbbox.value);

    imagem.setAttribute("src", `./pets/img/foto${i}.jpg`);
}

cbbox.addEventListener("change", selecionar);

const opacidade = document.getElementById("opacidade");

opacidade.addEventListener("input", function(e) {
    e.preventDefault();

    let valor = opacidade.value;

    imagem.setAttribute("style", `opacity:${valor}`);
});

const li1 = document.getElementById("li1");
const li2 = document.getElementById("li2");
const li3 = document.getElementById("li3");

li1.addEventListener("mouseover", function(e) {
    e.preventDefault();

    i = 1;
    imagem.setAttribute("src", `./pets/img/foto${i}.jpg`);
});

li2.addEventListener("mouseover", function(e) {
    e.preventDefault();

    i = 2;
    imagem.setAttribute("src", `./pets/img/foto${i}.jpg`);
});

li3.addEventListener("mouseover", function(e) {
    e.preventDefault();

    i = 3;
    imagem.setAttribute("src", `./pets/img/foto${i}.jpg`);
});