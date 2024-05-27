document.addEventListener('DOMContentLoaded', ()=>{

    const productos = document.querySelector('#productos');
    const listaCompra = document.querySelector('#listaCompra');
    const fragmento = document.createDocumentFragment();
    let localStorageProductos = JSON.parse(localStorage.getItem("productos")) || [];

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

    let objListaCompra = localStorageProductos;

    document.addEventListener('click', ({target})=>{
        if (target.matches('#productos button')) {
            let idButton = parseInt(target.id);
            let encontradoProducto = objProductos.find((producto) => producto.id === idButton);
            crearListaCompra(encontradoProducto);
        }
        if (target.matches('#listaCompra button')) {
            let idButton = target.id;
            let encontradoListaCompra = localStorageProductos.find((producto) => producto.id === idButton);
            localStorageProductos = localStorageProductos.filter((obj) => {return obj.name !== encontradoListaCompra.name});
            objListaCompra = localStorageProductos.filter((obj) => {return obj.name !== encontradoListaCompra.name});
            localStorage.setItem("productos", JSON.stringify(localStorageProductos));
            renderizarListaCompra(localStorageProductos);
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
            ulProductos.append(liProductos, btnProductos);
            fragmento.append(ulProductos);  
        })
        productos.append(fragmento);
    }

    const crearListaCompra = (encontradoProducto)=>{
        let encontrado = objListaCompra.find((producto) => producto.name === encontradoProducto.name);
        if (!encontrado){
            objListaCompra.push({id:`c${encontradoProducto.id}`, name:encontradoProducto.name , cantidad:1});
        } else {
            encontrado.cantidad++;
        }
        insertionLocalStorage(objListaCompra);
    }

    const insertionLocalStorage = (objListaCompra) => {
        localStorage.setItem("productos", JSON.stringify(objListaCompra));
        localStorageProductos = JSON.parse(localStorage.getItem("productos")) || [];
        renderizarListaCompra(localStorageProductos);
    }

    const renderizarListaCompra = (localStorageProductos)=>{
        listaCompra.innerHTML = ''; 
        const ulListaCompra = document.createElement('UL');
        localStorageProductos.forEach(({id, name, cantidad}) =>{
            const liListaCompra = document.createElement('LI');
            const btnListaCompra = document.createElement('BUTTON');
            liListaCompra.textContent = `x${cantidad} ${name}`;
            btnListaCompra.textContent = 'Eliminar';
            btnListaCompra.setAttribute('id', id);
            ulListaCompra.append(liListaCompra, btnListaCompra)
            fragmento.append(ulListaCompra);  
        })
        listaCompra.append(fragmento);
    }
    renderizarProductos();
    renderizarListaCompra(localStorageProductos);
})
