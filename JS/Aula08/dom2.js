let primeiro_elemento = document.querySelector('#titulo')
primeiro_elemento.innerHTML = 'Olá, Gelado!'

// # -> É por nome de ID
// . -> É por nome de classe

let segundo_elemento = document.querySelectorAll('.par')
segundo_elemento[1].innerText = 'textinho'