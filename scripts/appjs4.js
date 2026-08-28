let nasc = prompt("Digite seu data de nascmento: ");
nasc = parseInt(nasc)

let fds = confirm("se hoje for final de semana, clique ok")
let idade = 2026 - nasc;

alert(`voce é maior de idade : ${idade >= 18}`)
alert(`Hoje é final e semana: ${fds}`);

if(idade >= 18 && fds){
    alert("vocÊ pode beber")
}else{
    alert("Você não pode beber")
}