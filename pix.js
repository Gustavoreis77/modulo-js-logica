const prompt = require("prompt-sync")();

let saldo = Number(prompt("Digite seu saldo: "));
let preco = Number(prompt("Digite o preço: "));
let hora = Number(prompt("Digite o horário: "));
let limite = 5000

if (saldo < preco) {
    console.log("Saldo insuficiente!!")}

if ( hora >= 20 || hora < 5 ) {
    if (preco >= limite ) {
    console.log("Bloqueado!!") }} 
else {
    console.log("Transação aprovada")
    console.log("Seu novo saldo R$ ",saldo - preco.toFixed(2))}
// if ( hora < 20 || hora > 5 ) {
//     if  ( preco =< limite )
//     }
