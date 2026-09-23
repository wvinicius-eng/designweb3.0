const amigos = [] //utilizar com arrays 
const cadastro = document.getElementById("cadastro");
const nome = cadastro.nome;
const nasc = cadastro.nasc; /*pegar elementos especificos*/
const whatsapp = cadastro.whatsapp;
const lista = document.getElementById("lista");

cadastro.addEventListener("submit", function(e){
    e.preventDefault();
    let item = [nome.value, nasc.value, whatsapp.value];
    amigos.unshift(item);
    //limpar form
    cadastro.reset();
    // atualiza lista
    exbirLista();
});

function exbirLista(){
    let itens = "";
    for(let i = 0; i<amigos.length; i++){
        let item = amigos[i];//[nome, nasc, what]
        //criar botao remove
        let remover = `<button onclick=remover${i}>Remover</button>`
        //criaa uma tag li
        let li = `<li>${item[0]} | ${item[1]} | ${item[2]}`;
        // junta li noss intens 
        itens = itens + li;
    }

    lista.innerHTML = itens;
}

function remove(i){
    let item - amigos[i]; //[nome, nasc, what]
    let check = confirm(`deseja reamente excluor ${item[0]}?`);
    if (check == true){
        amigos.splice(i,1);//splice(posição inicial, qdt iten a remover)
    }
}