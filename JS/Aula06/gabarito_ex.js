// Crie um array unidimensional com os nomes de 4 jogos, passe os elementos 1 e 3 na tela .
let jogos = ["RD2", 'GTAV', 'MW3', 'GOW']
console.log(jogos[1]);
console.log(jogos[3]);

// Crie um array bidimensional seguindo os seguintes critérios, o array bidimensional deve conter uma lista com 3 linhas e 3 colunas, mostre os elementos em tela através do console log.
let novo_array = [
//        0     |    1      |     2
    ["elemento1","elemento2","elemento3",], // 0
    ["elemento4","elemento5","elemento6",], // 1
    ["elemento7","elemento8","elemento9",]  // 2
]
// Agora você deve extrair 2 valores de sua escolha do array e guardá-los em variáveis.
// let elemento1 = novo_array.pop()
let elemento1 = novo_array[0][2]
console.log(elemento1);
// Substitua 3 valores do array e mostre o resultado em tela.

novo_array[1][1] = "marco"

console.log(novo_array);