// const medias= [8.5, 6, 5, 9.2, ]
// let soma = 0
// let aprovados = 0
// console.log(medias.length)
// for (let i = 0; i < medias.length; i++) {
//     soma = soma + medias[i]
//     //  40.7
//     if (medias[i] >= 7) {
//         aprovados++
//     } 
// }

// console.log("Aprovados: " + aprovados);
// console.log("Media da turma: " + (soma / medias.length).toFixed(2))
const prompt = require("prompt-sync")()
const medias = []
let soma = 0
let aprovados = 0
let input
while (input != -1){
    input = Number(prompt("Próxima média: "))
    if (input >= 0){
        medias.push(input)
    }
    }
 for (let i = 0; i < medias.length; i++) {
     soma = soma + medias[i]
     //  40.7
     if (medias[i] >= 7) {
         aprovados++
     } 
 }

 console.log("Aprovados: " + aprovados);
 console.log("Media da turma: " + (soma / medias.length).toFixed(2))
