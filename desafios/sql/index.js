var mysql = require("mysql")

class db{
    constructor(){
        this.connection = mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "miqueias29092005",
            database: "example"
        })

        this.connection.connect((error)=>{
            if(error){
                console.log("Não consegui me conectar")
                throw error
            }
            console.log("Me conectei")
        })


        this.connection.query("CREATE TABLE IF NOT EXISTS game(name varchar(30));", 
            (error, result, fields)=>{
                if(error){
                    console.log("Não consegui criar a tabela Games")
                    throw error
                }
        })
    }

    insertGame(nome){
        let sql = "INSERT INTO game (name) values (?)"
        this.connection.query(sql, nome, (error, values, fields)=>{
            if(error){
                console.log("Não consegui criar um novo jogo")
                throw error
            }
            
        })
    }

    getAllGame(){
        let sql = "SELECT * FROM game;"
        this.connection.query(sql, (error, values, fields)=>{
            if(error){
                console.log("Não consegui pegar os elementos de Game")
                throw error
            }
            console.log(JSON.stringify(values))
        })
    }

    quit(){
        this.connection.end((error)=>{
            if(error){
                console.log("Não consegui finalizar sessão")
                throw error
            }
            console.log("Sessão finalizada!")
        })
    }
}

myDb = new db()
myDb.getAllGame()


myDb.quit()

