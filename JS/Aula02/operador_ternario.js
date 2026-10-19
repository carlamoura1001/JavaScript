// operador unario | 1 elemento

let nome = "Carlos Daniel"
let idade = 22
let matriculado = true
let nota = 9.5

//typeof - testa o tipo de dado que tenha na variavel

console.log(nome);
console.log(`Tipo de dado: ${typeof nome}`);
console.log(`===========================`);

console.log(idade);
console.log(`Tipo de dado: ${typeof idade}`);
console.log(`===========================`);

console.log(matriculado);
console.log(`Tipo de dado: ${typeof matriculado}`);
console.log(`===========================`);

// operador binario | 2 elementos

let curso = idade >= 15 && nota >= 6
console.log(`Aluno aprovado para o curso: ${curso}`);

// operador ternario | 3 elementos

let valor = 1500
//Valor mínimo - 2k
// teste ? verdadeiro | falso

let resposta = valor >= 2000 ? "Vou a praia" : "Vou ficar em casa"

console.log(resposta);