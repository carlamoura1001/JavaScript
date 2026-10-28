let altura = prompt(`Qual sua altura em metros?`);
let peso = Number(prompt(`Qual seu peso em quilogramas?`));
let imc = peso/altura**2;

if(imc>=18.5 && imc<=24.9) {
    alert(`Você está com um peso saudável.`);
} else if(imc<18.5) {
    alert(`Você está abaixo do peso.`);
} else {
    alert(`Você está acima do peso.`);
}