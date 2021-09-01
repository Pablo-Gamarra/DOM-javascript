/*
Event Delegation - Stop Propagation
*/
const container = document.querySelector('.container')

const span = document.getElementById('span')

let contador = 0

container.addEventListener('click', (e) => {
    //console.log(e.target.classList.contains('btn-info'))

    if(e.target.classList.contains('btn-info')) {
        contador++
        span.textContent = contador
    }
    
    if(e.target.classList.contains('btn-danger')) {
        contador--
        span.textContent = contador
    }
    /*
    Ejecutamos la siguiente sentencia 
    para que no se ejecute junto al siguiente evento
    */
    e.stopPropagation()
})

document.body.addEventListener('click', () => {
    console.log('diste click')
})