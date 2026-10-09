const amigos = [];

//utilizar com arrays

const cadastro = document.getElementById("cadastro");

const nome = cadastro.nome;

const nasc = cadastro.nasc;

const whatsapp = cadastro.whatsapp;

const lista = document.getElementById("lista");

let editandoo = null;

cadastro.addEventListener("submit", function(e) {

    e.preventDefault();

    let item = [nome.value, nasc.value, whatsapp.value];

    if (editandoo == null){

        let check = amigos.find(item => item[0] == nome.value);

        if (check == undefined){

            amigos.unshift(item);

            cadastro.reset();

        }else{

            alert(`${nome.value} já cadastrado`)

        }

    }else{

        // se editando diferente de nulo, atualizar

        let amigo = amigos[editandoo] //[nome,nasc,whatsapp]

        amigo[0] = nome.value;

        amigo[1] = nasc.value;

        amigo[2] = whatsapp.value;

    }

    exibirLista();

});

exibirLista();

function exibirLista() {

    let itens = "";

    for(let i = 0; i < amigos.length; i++) {

        let item = amigos[i];

        //criar botao remove

        let remover = `<button onclick="remove(${i})">Remover</button>`;

        //criar uma tag li

        let li = `<li>${item[0]} | ${item[1]} | ${item[2]} ${remover}</li>`;

        //junta li nos intens

        itens = itens + li;

    }

    lista.innerHTML = itens;

}

function remove(i) {

    let item = amigos[i]; //[nome,nasc,whatsapp]

    let check = confirm(`Deseja realmente excluir ${item[0]}?`);

    if (check == true){

        amigos.splice(i, 1); //splice(posição inicial, qdt item a remover)

    }

    exibirLista();

}