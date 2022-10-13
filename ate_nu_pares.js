const prompt = require("prompt-sync")()

const num = Number(prompt("Número: "))

console.log(`Números pares entre 1 e ${num}`)

for (let i = 2; i <= num; i = i + 2) {
    console.log(i)
}

//--------------OUTRA FORMA, MAS MENOS EFICIENTE---------------------//

console.log(`Números pares entre 1 e ${num}`)

for (let i = 1; i <= num; i = i + 1) {
    if (i % 2 == 0) {
        console.log(i)
    }
}
