//Extensões: Node.js exec, Javascript ES6, code runner
//Escopo global
//Pode ser redeclarada
//Tipo: String (texto)
//Tipo: Number (float ou int, indiferente)
//Não mais utilizado
var nome_aluno01 = 'Carlos Daniel' 
var idade_aluno01 = 23

//Escopo de bloco
//NÃO pode ser redeclarado
//Tipo: String (texto)
//Tipo: Number (float ou int, indiferente)
let nome_aluno02 = 'Carol Paixão'
let idade_aluno02 = 20 

// NÃO pode ter seu valor redefinido
// NÃO pode ser redeclarada
const bebida = 18
const media = 7

let recreio30m = true

//Tipos de dados
// Tipo Booleano - true | false
// Tipo number - 2 | 2.0
// Tipo string - "nome" | 'nome' | `nome`


// Declaração de variável
// let - escopo de bloco (Pode ter seu valor redefinido mas não redeclarada)
// var - escopo global (pode ser redeclarada e redefinida - NÃO USAR)
// const - constante (não pode ser redeclarada e nem redefinida)

let nome = 'Ritinha'
let jogo = "Subway-Surfers"
let idade = 19
let joga_na_aula = true

console.log("Olá, Mundo!")
console.log("Olá "+ nome);
console.log("Olá", nome);

console.log(`Olá, ${nome}! Vocês está jogando na aula? ${joga_na_aula}!`);//1
console.log('Olá, '+nome+"! Você está jogando na aula? "+joga_na_aula+"!")//2

let nota1 = 10
let nota2 = 9

let mediaAluno = (nota1 + nota2) / 2

console.log(`Média aluno: ${mediaAluno}`);

console.log(`Ok`);