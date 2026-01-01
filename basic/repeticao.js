// Laço de repetição for

console.log("<<< Tabela de multiplicação >>>")
for(let i = 0; i <= 10; i++){
    console.log(` 3 * ${i} = ${3*i}`)
}

console.log("\n".repeat(2))

console.log("<<< Contagem de números pares e ímpares >>>")
let nPar = 0
let nImpar = 0
for(let i = 0; i <= 100; i++){
    i % 2 == 0 ? nPar++ : nImpar++;
}
console.log(`Entre 0 e 100 existe ${nPar} números pares e ${nImpar} números impares`)

console.log("\n".repeat(2))

// Laço de repetição for iterando diretamente em um array (for of)
console.log("<<< Frase vertical >>>")
for(const letra of "frase"){
    console.log(letra)
}

console.log("\n".repeat(2))

console.log("<<< Frase repetida >>>")
let c = 0
do{
    console.log("Essa mensagem se repetirá 3 vezes!")
    c ++
}while(c < 3);

console.log("\n".repeat(2))

console.log("<<< É par? >>>")
let num = 10
while(num > 0){
    console.log(`${num} é par? ${num-- % 2 == 0}`)
}
