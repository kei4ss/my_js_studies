class Pessoa{
    constructor(nome, idade, profissao){
        this.nome = nome
        this.idade = idade
        this.profissao = profissao
    }

    apresentar(){
        return `Olá! Me chamo ${this.nome}, tenho ${this.idade} anos e trabalho como ${this.profissao}`
    }
}

const p1 = new Pessoa("Miquéias", 20, "programador")
const p2 = new Pessoa("Lara", 22, "desenhista")

console.log(p1.apresentar())
console.log(p2.apresentar())