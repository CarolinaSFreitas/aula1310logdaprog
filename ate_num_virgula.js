const prompt = require("prompt-sync")()

const num = Number(prompt("Número: "))

// varíavel q irá "acumular" a resposta (let) //
let resposta = ""

for (let i = 1; i <= num; i = i + 1){
    if(i < num) {
        resposta = resposta + i + ", "
    } else{
        resposta = resposta + i 
    }
}

console.log(`Números entre 1 e ${num}: ${resposta}`)

////OUTRA FORMA DE FAZER////

// varíavel q irá "acumular" a resposta (let) //
let resposta2 = ""

for (let i = 1; i < num; i = i + 1){
   resposta2 = resposta2 + i + ", "
}
resposta2 = resposta2 + num

console.log(`Números entre 1 e ${num}: ${resposta}`)





