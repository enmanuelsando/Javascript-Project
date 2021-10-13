//Cards y filtrar

filtrarProductos();

function filtrarProductos(filtro = 'default') {
    let nuevosProductos = (filtro != "default") ?
        inventario.filter(producto => producto.type == filtro) :
        inventario;

    let acumulador = ``;
    nuevosProductos.forEach((producto) => {
        acumulador += `<div class="col mb-5" id="${producto.title}">
    <div class="card h-100">
        <!-- Product image-->
        <img class="card-img-top" src="${producto.img}" alt="..." />
        <!-- Product details-->
        <div class="card-body p-4">
            <div class="text-center">
                <!-- Product name-->
                <h5 class="fw-bolder">${producto.title}</h5>
                <h5 class="fw-bolder">${producto.artist}</h5>
                <!-- Product price-->
                $${producto.price}
            </div>
        </div>
        <!-- Product actions-->
        <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
            <div class="text-center"><a class="btn btn-outline-dark mt-auto"
            onclick="agregarAlCarrito('${producto.title}')">Agregar al carrito</a>
            </div>
        </div>
    </div>
</div>`
    });
    document.getElementById("productos").innerHTML = acumulador;

}



//Carrito

function agregarAlCarrito(title) {
    const productoEncontrado = inventario.find(producto => producto.title === title);
    if (productoEncontrado != undefined) {
        baseDeDatos.push(productoEncontrado);
    } else {
        alert("No se encontró")
    }

    localStorage.baseDeDatos = JSON.stringify(baseDeDatos);
    document.getElementById("contador-carrito").innerHTML = baseDeDatos.length;

}