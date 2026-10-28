let idade = Number(prompt(`Qual a sua idade?`));
if (idade<18) {
    alert(`Usuário menor de idade`);
} else if (idade>= 18 && idade < 60) {
    alert(`Usuário adulto`);
} else {
    alert(`Usuário idoso`);
}