let soma = 0;
let num;
do {
    num = Number(prompt(`Digite um número ou digite zero para sair:`));
    soma = soma + num;
} while (num!==0);
alert(`Soma: ${soma}`);