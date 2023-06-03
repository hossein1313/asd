const box = document.querySelector('form')
const container = document.querySelector('#container')
const body = document.querySelector('body')
const hide = document.querySelector('#hide') 
const asdjk = {lasd:'mgs11223345dDSs'} 
const sspa = document.querySelector('.sspa')
const table = document.querySelector('.table')

function Hide() {
    container.style.display = 'none'
}
function fls() {
    container.style.display = 'flex'
    box.style.display = 'none'
    body.style.background = '#8c8d8d62'
}
hide.addEventListener('click',()=>{
    if(sspa.value == asdjk.lasd){
        Hide()
        table.style.display = 'block'
    }else{
        document.body.style.display = 'none'
    }
}) 