const prompt = require('prompt-sync')();
function gets(){
    let nome = prompt('Qual seu nome?\n');
    let nota1 = Number(prompt('Digite sua primeira nota:\n'))
    let nota2 = Number(prompt('Digite sua segunda nota:\n'))
    return {nome, nota1, nota2};
}
const {nome, nota1, nota2} = gets();

let aprovado = false
let media = (nota1+nota2)/2
if (media>=7){
    aprovado=true;
}
console.log(`Aprovado(a)?${aprovado}`);