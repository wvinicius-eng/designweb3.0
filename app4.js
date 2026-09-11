const from = document.getElementById("formcauculadora");
from.addEventListener("submit",caucular);
function caucular(e){
    e.preventDefault();
    let n1 = document.getElementById("n1").value;
    let n2 = document.getElementById("n2").value;
    let op = document.getElementById ("op").value;
    switch(op){
        case "+": alert(`resultado ${n1+n2}`);break;
        case "-": alert(`resultado ${n1-n2}`);break;
        case "*": alert(`resultado ${n1+n2}`);break;
        case "/": alert(`resultado ${n1-n2}`);break;
    }
}