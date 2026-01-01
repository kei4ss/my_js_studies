/*
Tipos de variáveis
1 - var : Acessível globalmente
2 - let: Acessível no escopo: Função, condição, loop
3 - const: Constantes
*/

// Testando o escopo de variáveis do tipo var
console.log("<<< Exemplo usando o var >>>")
var name = "Alex"
function changeName(){ name = "Pedro"}
changeName()
console.log("A variável era Alex, agora é", name)
console.log("*".repeat(20))

// Testando o escopo de variáveis do tipo let
console.log("<<< Exemplo usando o let >>>")
let idade = 10
function changeIdade(){ idade = 5 }
console.log("A variavel era 10, agora é", idade)
console.log("*".repeat(20))

// hoisting
console.log("Chamei a varável antes de defini-lá", lol)
var lol = "Eu sou a variável lol"

//Tipos de variáveis
let ano = 2025
let pessoa = "João"
let isRegistered = false
const pi = 3.14
let parents = null

function phrase(data){
    console.log("O valor", data, " é do tipo", typeof data)
}

phrase(ano)
phrase(pessoa)
phrase(isRegistered)
phrase(pi)
phrase(parents)
