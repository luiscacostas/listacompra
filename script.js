const productos = document.querySelector('#productos');
const listaCompra = document.querySelector('#listaCompra');
const fragmento = document.createDocumentFragment();

const objProductos = [
    {
        id: 1,
        name: 'Leche'
    },
    {
        id: 2,
        name: 'Lechuga'
    },
    {
        id: 3,
        name: 'Tomate'
    },
    {
        id: 4,
        name: 'Chocolate'
    },
    {
        id: 5,
        name: 'Cerveza'
    },
    {
        id: 6,
        name: 'Melocoton'
    } 
];

const objListaCompra = [];

document.addEventListener('DOMContentLoaded', ()=>{
    renderizarProductos();
})

productos.addEventListener('click', ({target})=>{
    if(target.matches('button')){
        let idButton = parseInt(target.id);
        let encontradoProducto = objProductos.find((producto) => producto.id === idButton);
        crearListaCompra(encontradoProducto);
    }
})

const renderizarProductos = ()=>{
    const ulProductos = document.createElement('UL');
    objProductos.forEach(({id, name}) =>{
        const liProductos = document.createElement('LI');
        const btnProductos = document.createElement('BUTTON');
        liProductos.textContent = name;
        btnProductos.textContent = 'Añadir';
        btnProductos.setAttribute('id', id)
        ulProductos.append(liProductos, btnProductos)
        fragmento.append(ulProductos);  
    })
    productos.append(fragmento);
}

const crearListaCompra = (encontradoProducto)=>{
    let encontrado = objListaCompra.find((producto) => producto.name === encontradoProducto.name);
    if (!encontrado){
        objListaCompra.push({id:`c${encontradoProducto.id}`, name:encontradoProducto.name , cantidad:1})
        console.log(objListaCompra)
    } else {
       encontrado.cantidad++;
    }
    renderizarListaCompra(objListaCompra)
}

const renderizarListaCompra = (objListaCompra)=>{
    listaCompra.innerHTML = '';
    const ulListaCompra = document.createElement('UL');
    objListaCompra.forEach(({id, name, cantidad}) =>{
        const liListaCompra = document.createElement('LI');
        const btnListaCompra = document.createElement('BUTTON');
        liListaCompra.textContent = `x${cantidad} ${name}`;
        btnListaCompra.textContent = 'Eliminar';
        btnListaCompra.setAttribute('id', id)
        ulListaCompra.append(liListaCompra, btnListaCompra)
        fragmento.append(ulListaCompra);  
    })
    listaCompra.append(fragmento);
}


