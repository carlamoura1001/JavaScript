const calcularMedia = () =>{
    let nota1 = Number(document.querySelector('#nota1').value)
    let nota2 = Number(document.querySelector('#nota2').value)
    let media = (nota1+nota2)/2
    let resultado = document.querySelector('h3')
    resultado.innerHTML = `Sua média é: ${media}`
}