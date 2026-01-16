opa = {
    "nome":"Miqueias",
    sobrenome: "santos"
}

class p{
    constructor(sobrenome){
        this.sobrenome = sobrenome
    }
}
epa = new p("miqueias")

console.log("sobrenome" in epa)

