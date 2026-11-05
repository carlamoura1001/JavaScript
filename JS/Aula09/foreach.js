let nomes = ['João', 'Eduardo', 'Eduarda', 'Gabriela']
//              0        1          2           3

//elemento, índice, array
nomes.forEach((nome, numero, sala) => {
    console.log(`E-mail enviado para: ${nome}`);
    console.log(`Seu número na chamada é ${numero + 1}`);
    console.log(`Sua turma é ${sala}`);
    console.log(`=======================`);
})