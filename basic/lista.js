animais = ["Coelho", "Macaco", "Zebra", "Leão", "Baleia", "Pato"]

console.log(`Os animais guardado são: ${animais}`)
console.log(`Vamos adicionar o animal Peixe e remover o Macaco ${'\n'}`)
animais.push("Peixe")
animais.splice(1, 1) // A partir de uma determinada posição, pode remover n elementos
// animais.shift() remove o primeiro elemento

animais.forEach((element, index) => {
    console.log(`${index} -> ${element}`)
});

const numeros = [1, 2, 3, 4, 5, 6, 7]
// filtragem
const impares = numeros.filter(number => number % 2 !== 0)
//map
const dobro = numeros.map(number => number * 2)

console.log(`Números originais: ${numeros} \nNúmeros ímpares: ${impares} \nDobro: ${dobro}`)


// set : Estrutura de elementos únicos
const mySet = new Set()
mySet.add(1)
mySet.add(4)
mySet.add(4)
console.log(mySet)


// map: Chave-valor

const myMap = new Map()

myMap.set("Miquéias", 20)
myMap.set("Pedro", 19)

console.log(myMap)
myMap.forEach((value, key)=>{
    console.log(`O aluno ${key} contém ${value} pontos`)
})

const mapDoido = new Map()
const funcao = ()=>{console.log("Eu sou uma função")};
mapDoido.set(funcao, "Esse é o valor da função dentro do map")
console.log(mapDoido.get(funcao))

