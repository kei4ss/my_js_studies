function customReduce(elements, callback, initialValue = 0){
    let acumulador = initialValue

    for(let index = 0; index < elements.length; index++){
        console.log(`${elements[index]} | ${acumulador}`)
        acumulador = callback(acumulador, elements[index])
    }
    return acumulador
}

a = [1, 2, 3]
console.log(customReduce(a, (acumulador, element)=> {return acumulador + element}))