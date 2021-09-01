/*
Construimos un template como estructura fija sin renderizar
Luego la clonamos para visualizar
*/
const lista = document.querySelector('#lista')

const arrayLista = ['item 1', 'item 2', 'item 3']

const template = document.querySelector('#template-li').content

const fragment = document.createDocumentFragment()

arrayLista.forEach(item => {
    template.querySelector('.list span').textContent = item

    const clone = template.cloneNode(true)
    fragment.appendChild(clone)
})

lista.appendChild(fragment)

/*
<li class="list">
    <b>Nombre: </b><span class="text-danger">${item}</span>
</li>
*/