var nasc = 2009; // REDECLARA A AVARIAVEL
let nome = "viny"; // NAO É POSSIVEL REDECLARAR A VAR
const viva = true; // NEM ATRIBUI NEM REDECLARA 

function calcidade(ano=2026){ //funcão que faz a ser chamada (ESCOPO FUNCTION)
    let idade = ano - nasc; //nascimento é igual a idade menos ano
    let menor; 
    
    if (idade < 18){
        let menor = true; // não pode ser vazada do seu escopo 
        var podebeber = false;
    }
    else{
        let menor = false;
        var podebeber = true; //var pode ser vazada fora do escopo
    }
    alert(`${nome} é menor de idade ? ${menor}\nIdade: ${idade}\n pode beber?:${podebeber}`)
    return idade // retorna idade do escopo function
}
calcidade();
// alert(`pode beber ${podebeber}`) // var vazA VARIAVEL DENTRO DO ESCOPO DA MESMA FUNÇÃO 
/*
alert(`Força da função : Idade ${idade}`)
erro pois var let nao existe fora do escopo0 dela 
*/
alert(`Força da função : Idade ${calcidade(2027)}`)