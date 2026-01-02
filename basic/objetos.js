const pessoa = {
    nome: "Miquéias",
    idade: 20
}
pessoa.corPele = "Moreno"
pessoa.notas = [5, 8, 3, 9]
console.log(pessoa)

delete pessoa.idade

console.log("Depois")
console.log(pessoa)

for(const chave in pessoa){
    console.log(`A propriedade ${chave} contém como valor ${pessoa[chave]}`)
}

console.log(`Todas as chaves são: ${Object.keys(pessoa)}`)