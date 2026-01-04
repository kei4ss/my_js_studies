const pessoa = {
    nome: "Miquéias",
    idade: 20,
    profissao: "programador"
}

// Exemplos de destructuring
const {nome, idade} = pessoa
const saudar = ({profissao})=>{
    console.log(`Olá, ${profissao}`)
}


console.log(nome, idade)
saudar(pessoa)