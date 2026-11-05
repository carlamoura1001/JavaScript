let num = [2, 4, 5, 6]

let novos = num.map((num) => {
    return num * 2  
})

let numeros = num.map((valores) => {
    return valores + 1
})
console.log(num);
console.log(novos);
console.log(numeros);

let idade = [22, 16, 19, 29]

let menores = idade.filter((idade)=>{
    return idade<18
})
console.log(idade);
console.log(menores);