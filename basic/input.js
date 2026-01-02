const readline = require("readline") // Import de biblioteca 
const leitor = readline.createInterface(
    {
        input : process.stdin,
        output: process.stdout
    }
)


let a = leitor.question("Qual o seu nome? ", (n)=>{
    console.log(`Olá, ${n}`)
    leitor.close()
    return n
})



