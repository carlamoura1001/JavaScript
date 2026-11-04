let titulo = document.getElementById('titulo')

titulo.style.color = 'pink'
titulo.innerHTML = 'GRIPADO!'

let lista = document.getElementsByClassName('lista')[1]
//lista.style.color = 'red'

for(let num = 0; num<lista.lenght; num++){
    lista[num].style.color = 'red'
}

let paragrafo = document.getElementsByTagName('p')
paragrafo[1].style.color = 'blue';