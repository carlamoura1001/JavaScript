console.log(`A pessoa pode votar?`);

const voto = 16;
let idade = 10;

if (idade >= 16 && idade < 70) {
    console.log(`Pessoa, pode votar!`);
} else if (idade >= 70) {
    console.log(`Voto optativo!`);
} else {
    console.log(`Não pode votar!`);
}

console.log(`Fim!`);