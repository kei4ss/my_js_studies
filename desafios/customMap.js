function customMap(array, callback){
    newArray = []

    for(let index = 0; index < array.length; index++){
        newArray.push(callback(array[index]))
    }
    return newArray
}

const m = n => n*2

a = [2, 3, 4]
b = a.map(m)
c = customMap(a, m)

console.log(b)
console.log(c)
