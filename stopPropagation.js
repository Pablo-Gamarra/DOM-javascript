const btn = document.querySelector('.btn-dark')

const bgSuccess = document.querySelector('.bg-success')

btn.addEventListener('click', (e) => {
    console.log('Dame click')
    e.stopPropagation()

})

bgSuccess.addEventListener('click', () => {
    console.log('click bgSuccess')
})