const calcularImc = () =>{
    let peso = Number(document.querySelector('#peso').value)
    let alt = Number(document.querySelector('#alt').value)
    let imc = peso/alt**2
    let resultado = document.querySelector('h3')
    resultado.innerHTML = `Seu IMC é: ${imc}`
}