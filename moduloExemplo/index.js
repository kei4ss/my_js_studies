//const readline = require('readline')
import {createInterface} from 'readline'
import {saudacaoCompleta} from './saudar.js'
const input = createInterface(
    {
        input: process.stdin,
        output: process.stdout
    }
)

let pessoa = {}

input.question("Qual o seu nome? ", (nome)=>{
    input.question("Qual sua idade? ", (idade)=>{
        input.question("Qual sua profissão? ", (profissao)=>{
            pessoa.nome = nome
            pessoa.idade = idade
            pessoa.profissao = profissao

            console.log(pessoa)
            console.log(saudacaoCompleta(pessoa))

            input.close()
         })
    })
})