let pessoa = {
    nome: "Miquéias",
    idade: 20,
    profissao: "programador"
}

// let pessoa2 = pessoa | Referência de memória

let pessoa2 = {...pessoa} // cópia | spread
pessoa2.nome = "Fernando"

let pessoa3 = { ...pessoa, idade: 25, temCNH: true} // spread

console.log(pessoa)
console.log(pessoa2)
console.log(pessoa3)


const {profissao, ...restante} = pessoa //Rest operator
console.log(`
    nome: ${profissao}
    resto das informações:`, restante)




// spread & rest com array

frutas = ["Banana", "laranja"]
// frutas2 = frutas | referência de memória 
frutas2 = [...frutas] // Cópia
frutas2[0] = "Uva"
frutas2.push("Abacaxi")

console.log(frutas)
console.log(frutas2)

const [primeira, ...resto] = frutas2
console.log(primeira, "\n", resto)

