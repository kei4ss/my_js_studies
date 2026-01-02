// Função com argumento
function soma(num1, num2){
    return num1 + num2
}
console.log(`A soma de ${10} com ${5} é ${soma(10, 5)}`)

// arrow function
const multiplicar = (n1, n2) => {
    return n1 * n2
}
console.log(`A multipicação de ${10} com ${5} é ${multiplicar(10, 5)}`)

// Arrow function mais simples (sem retorno)
const dobro = number => console.log(`O dobro de ${number} é ${number * 2}`)
dobro(5)
dobro(10)

// Arrow function mais simples (Com retorno)
const quadrado = number => number ** 2
console.log(`O quadrado de 9 é ${quadrado(9)}`)


// HOF - Higher-Order function -> função que receb função no parametro

function calc(n1, n2, operation){
    return operation(n1, n2)
}
console.log(calc(10, 5, (n1, n2)=>n1+n2)) // A arrow function é um callback



console.log(`${"\n".repeat(2)}<<< Entendendo o This >>>`)
// Compreendendo o this
/*
this é uma palavra-chave especial que se 
efere ao contexto onde uma função está 
sendo executada.
*/
function Pessoa(nome){
    this.nome = nome

    setTimeout(
        function(){ 
            console.log(`Olá! eu me chamo ${this.nome}`) // this.nome será undefined, pois essa  função possui escopo prório
        },
        1000
    )
}

new Pessoa("João")

//  O problema da função dentro da setTimeout pode ser resolvido usando .bind()
// Para meio que 'juntar' os escopos

function Animal(nome){
    this.nome = nome

    setTimeout(
        function(){ 
            console.log(`${this.nome} emitiu um som`) // this.nome será undefined, pois essa  função possui escopo prório
        }.bind(this),
        1000
    )
}
new Animal("João")

// As arrows functions capturam o this do contexto onde foram criadas, então
// não é necessário o bind

function Gatinho(){
    this.idade = 4
    setTimeout(() => {
        console.log(`O gato de ${this.idade} anos, miou!`)
    }, 3000)
}
new Gatinho()



// Função de intervalo
let contador = 0
let intervalId = setInterval(() => { // Todo intervalo tem um id
    console.log(`${contador}s`)
    ++contador > 10 ? clearInterval(intervalId) : null // clearInterval é responsável por parar o loop
}, 1000 )
