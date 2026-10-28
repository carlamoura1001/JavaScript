let nome = ['Kevin', 'Marco','Myky', 'Yasmim']
console.log(nome);

//shift() remove o elemento no início do array deslocando todos os elementos em uma posição
let aluno_removido = nome.shift()
console.log(nome);
console.log(aluno_removido);

// unshift() insere um elemento no início do array
nome.unshift('Gabriel')
console.log(nome);