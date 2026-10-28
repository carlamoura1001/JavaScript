let idade = 8;

do {
    console.log(`Não pode votar, tem ${idade} anos`);
    idade++
} while (idade < 16);

console.log(`Pode votar`);