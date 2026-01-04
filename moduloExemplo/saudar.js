export function saudacaoCompleta({nome, idade, profissao}){
    let maioridade = idade >= 18 ? "maior de idade" : "menor de idade"
    return `Olá, ${nome}! Tudo bem? Vi que você tem ${idade} anos, logo você é ${maioridade}. Vi também que você atua como ${profissao}! Seja bem vindo à equipe!`
}

