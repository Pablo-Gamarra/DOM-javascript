
const btnAumentar = document.querySelector('.btn-info')

const btnDisminuir = document.querySelector('.btn-danger')

const span = document.getElementById('span')

let contador = 0

btnAumentar.addEventListener('click', () => {
    console.log('me diste aumentar')
    contador++
    span.textContent = contador
})

btnDisminuir.addEventListener('click', () => {
    console.log('me diste disminuir')
    contador--
    span.textContent = contador
})
