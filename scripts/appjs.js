//entrada e saida 
let nasc = prompt("Digite seu ano de nascimento: ")

nasc = parseInt(nasc); //parseint converter string em inteiro

let viva = confirm("se você esta viva> clique em ok.") //confirm tem um campo de texto pra vc confirmar

if(viva){
    alert(`voce trem ${2026-nasc} anos.`)
}else{
    alert("voce morreu.")
}