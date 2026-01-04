let agora = new Date()

console.log(agora)

console.log(`
    ano: ${agora.getFullYear()}
    mês (vai de 0 à 11): ${agora.getMonth()}
    dia: ${agora.getDate()}
    horário: ${agora.getHours()}:${agora.getMinutes()}:${agora.getSeconds()}
`)


const nascimento = new Date(2005, 8, 29)
const dataCNH = new Date("2015-09-10:10:30:000z") //ano-mes-dia:hora:minuto:segundosz

console.log(nascimento)
console.log(dataCNH)

console.log(`Data formatada BR: ${dataCNH.toLocaleDateString('pt-BR')}`)
console.log(`Data formatada US: ${dataCNH.toLocaleDateString('en-US')}`)