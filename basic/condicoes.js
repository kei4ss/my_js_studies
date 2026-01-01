let isMaiorIdade = true
let isAcompanhadoPelosPais = false

// Condicoes 
if (isMaiorIdade){
    console.log("Assite o filme")
}else if(!isMaiorIdade && isAcompanhadoPelosPais){
    console.log("Pode assistir por estar acompanhado")
}else{
    console.log("Não pode assistir, amigão")
}

// Operador ternário
isMaiorIdade ? console.log("Assiste esse filme") : console.log("Vai para casa")

// Valores Truthy e falsy
/*
Valores falsy são aqueles que, embora não sejam booleanos, são considerados como false
    - ""
    - null
    - undefined
    - 0

Valores truthy são aqueles que, embora não sejam booleanos, são considerados como true
    - Todos os outros valores
*/

// Switch case
dia = 2

switch(dia){
    case 1:
        console.log("Domingo")
        break
    case 2:
        console.log("Segunda-feira")
        break
    case 3:
        console.log("terça-feira")
        break
    case 4:
        console.log("quarta-feira")
        break
    case 5:
        console.log("quinta-feira")
        break
    case 6:
        console.log("sexta-feira")
        break
    case 7:
        console.log("sábado")
        break
    default:
        console.log("Insira um valor de 1 até 7")
    
}