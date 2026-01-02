const realine = require("readline")
const input = realine.createInterface({
    input: process.stdin,
    output: process.stdout
})


console.log("<<< QUIZ >>>")
let pergunta1 = "1) Qual comando é usado para criar condições em JavaScript? \nA) do{}while()\nB) for \nC) break \nD)If/else \nResposta: "
let pergunta2 = "2) Qual comando é usado para quebrar um loop em JavaScript? \nA) do{}while()\nB) for \nC) break \nD)If/else \n Resposta: "


let points = 0

input.question(pergunta1, (resposta1)=>{
    if(resposta1.toLocaleLowerCase().includes("d")){
        points++
    }else{
        console.log("Você errou! A resposta certa é a letra D")
    }

    input.question(pergunta2, (resposta2)=>{
        if(resposta2.toLowerCase().includes("c")){
            points ++
        }
        console.log(`Parabéns! Você terminou com ${points} pontos`)
        input.close()
    })
})

