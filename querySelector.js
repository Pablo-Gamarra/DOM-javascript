//Utilizamos "fragment" para evitar el reflow en el renderizado
const lista = document.querySelector('#lista')

const arrayLista = ['item 1', 'item 2', 'item 3']

const fragment = document.createDocumentFragment()

arrayLista.forEach(item => {
    const li = document.createElement('li')
    li.classList.add('list')

    const b = document.createElement('b')
    b.textContent = 'Nombre: '
    li.appendChild(b)

    const span = document.createElement('span')
    span.classList.add('text-danger')
    span.textContent = item
    li.appendChild(span)

    fragment.appendChild(li)
})

lista.appendChild(fragment)

/* 
Este es el trozo de código de HTML que queremos realizar
en Fragment con JS

<li class="list">
    <b>Nombre: </b><span class="text-danger">descripción...</span>
</li>
*/



