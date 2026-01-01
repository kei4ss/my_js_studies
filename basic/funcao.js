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

const dobro = number => console.log(`O dobro de ${number} é ${number * 2}`)
dobro(5)
dobro(10)

const quadrado = number => number ** 2
console.log(`O quadrado de 9 é ${quadrado(9)}`)


