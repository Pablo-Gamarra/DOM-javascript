/*
Otra forma utilizando innerHTML menos performante 
pero escrita con menos código
*/
const lista = document.querySelector('#lista')

const arrayLista = ['item 1', 'item 2', 'item 3']

//innerHTML no permite utilizar fragment por eso creamos esa variable

let fragment = '' 
arrayLista.forEach(item => {
    //Alt+96 comillas invertidas
    fragment += ` 
    <li class="list">
        <b>Nombre: </b><sapan class="text-danger">${item}</sapan>
    </li>
    `
})

lista.innerHTML = fragment

/*
<li class="list">
    <b>Nombre: </b><span class="text-danger">descripción...</span>
</li>
*/