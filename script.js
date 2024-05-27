const productos = document.querySelector('#productos');
const listaCompra = document.querySelector('#listaCompra');
const fragmento = document.createDocumentFragment();

const arrProductos = ['Leche', 'Lechuga', 'Tomate', 'Chocolate', 'Cerveza', 'Melocoton'];

document.addEventListener('DOMContentLoaded', ()=>{
    renderizarProductos();
})

const renderizarProductos = ()=>{
    const ulProductos = document.createElement('UL');
    arrProductos.forEach(producto=>{
        const liProductos = document.createElement('LI');
        const btnProductos = document.createElement('BUTTON');
        liProductos.textContent = producto;
        btnProductos.textContent = 'Añadir';
        btnProductos.setAttribute('value', producto)
        ulProductos.append(liProductos, btnProductos)
        fragmento.append(ulProductos);  
    })
    productos.append(fragmento);
}


