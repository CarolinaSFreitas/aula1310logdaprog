const prompt = require("prompt-sync")()

const num = Number(prompt("Número: "))

console.log(`Tabuada do ${num}`)
console.log("-".repeat(20))

for (let i = 1; i <= 10; i = i + 1){
    const resultado = num * i
    console.log(`${num} x ${i} = ${resultado}`)
}