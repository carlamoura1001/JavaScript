// Agora através de uma variável, pegue um número de 1 a 7 e utilize o switch para informar o dia da semana, seguindo a seguinte regra:
// 1 - Segunda;
// 2 - Terça;
// 3 - Quarta;
// 4 - Quinta;
// 5 - Sexta;
// 6 - Sábado;
// 7- Domingo.
// Passe um console.log falando qual é a data referente o número.

let dia = Number(prompt(`Informe um número de 1 a 7 para saber o dia da semana correspondente a ele:`))
switch (dia) {
    case 1:
        console.log(`Segunda-feira`);
        break;
    case 2:
        console.log(`Terça-feira`);
        break;
    case 3:
        console.log(`Quarta-feira`);
        break;
    case 4:
        console.log(`Quinta-feira`);
        break;
    case 5:
        console.log(`Sexta-feira`);
        break;
    case 6:
        console.log(`Sábado`);
        break;
    case 7:
        console.log(`Domingo`);
        break;

    default:
        console.log(`Número inválido`);
        break;
}