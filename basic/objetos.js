const pessoa = {
    nome: "Miquéias",
    idade: 20,

    SayHello: function (sexo){
        let frase = `${this.nome} diz que é um prazer conhecê-`
        frase = sexo.toLowerCase() === 'm' ? frase +`lo` : frase + `la`
        console.log(frase)
    }
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
pessoa.SayHello('f')


// É possível converter JSON para Object e vise-versa

let myJson = '{"nome":"Alexando"}'
let myObject = {
    nome: "Rodrigo",
    idade: 20
}


let jsonConvertidoParaObject = JSON.parse(myJson)
let objectConvertidoParaJson = JSON.stringify(myObject)

console.log( jsonConvertidoParaObject, ` -> ${typeof jsonConvertidoParaObject}
${objectConvertidoParaJson} -> ${typeof objectConvertidoParaJson}
    `)