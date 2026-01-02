const pessoas = [
    {
        nome: "Miquéias",
        idade: 20,
        apelido: "Queias"
    },
    {
        nome: "Pedro",
        idade: 15,
        apelido: "Pedrinho"
    },
    {
        nome: "Isabella",
        idade: 32,
        apelido: "Isa"
    }
]

saudacoes = pessoas.map((pessoa) => {
    let frase = `Olá, ${pessoa.nome}! Posso te chamar de ${pessoa.apelido}? Vi aqui no sistema que você tem ${pessoa.idade} anos, correto? `
    frase = pessoa.idade < 18? 
                frase + "Por ser menor de idade, você não pode participar do nosso processo seletivo" 
                : frase + "Você tem a idade perfeita para estar conosco!"
    return frase
})

saudacoes.forEach(frase => console.log(frase + '\n'));