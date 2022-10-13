const prompt = require("prompt-sync")()

const num = Number(prompt("Número: "))

// varíavel q irá "acumular" a resposta (let) //

let resposta = ""

for (let i = 1; i <=num; i = i + 1){
    resposta = resposta + i + ", "
    console.log(resposta) //
    prompt()   //  //agurda ser digitado enter
}

console.log(`Números entre 1 e ${num}: ${resposta}`)