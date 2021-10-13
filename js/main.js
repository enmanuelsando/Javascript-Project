class Producto {

    constructor(type, title, artist, price, year, stock, img) {
        this.type = type || undefined;
        this.title = title.toUpperCase() || undefined;
        this.artist = artist || undefined;
        this.price = price || undefined;
        this.year = year || undefined;
        this.stock = stock || undefined;
        this.img = img || undefined;
    }
}

const baseDeDatos = [];
if (localStorage.baseDeDatos != null) {
    baseDeDatos = JSON.parse(localStorage.baseDeDatos);
    document.getElementById('productosAgregados').innerHTML = baseDeDatos.length;
}

const inventario = [];

inventario.push(new Producto('disc', '...and justice for all', 'Metallica', 34000, 1988, 12, "img/Metallica-...AndJusticeForaAll.jpg"));
inventario.push(new Producto('disc', 'Master of puppets', 'Metallica', 40000, 1986, 4, "img/metallicaMOP.jpg"));
inventario.push(new Producto('disc', 'The number of the Beast', 'Iron Maiden', 32000, 1982, 13, "img/ironmaidenTNOTB.jpg"));
inventario.push(new Producto('disc', "Let's Rock", 'The Black Keys', 27000, 2019, 9, "img/theblackkeysLR.jpg"));
inventario.push(new Producto('disc', 'The Slow Rush', 'Tame Impala', 28000, 2020, 2, "img/tameimpalaTSR.jpg"));
inventario.push(new Producto('tshirt', 'the black album', 'Metallica', 18000, undefined, 8, "img/metallicatshirt.jpeg"));
inventario.push(new Producto('tshirt', 'U.S. Tour 78', 'Black Sabbath', 24000, undefined, 5, "img/blacksabbathtshirt.jpg"));
inventario.push(new Producto('sweatshirt', 'The number of the beast sweatter', 'Iron Maiden', 35000, undefined, 7, "img/ironmaidensweatshirt.jpg"));
inventario.push(new Producto('sweatshirt', 'Alive sweatter', 'Pearl Jam', 30000, undefined, 1, "img/pearljamsweatshirt.jpg"));
inventario.push(new Producto('sweatshirt', 'kings of leon sweatshirt', 'kings of leon', 26000, undefined, 5, "img/kofsweatshirt.jpg"));
inventario.push(new Producto('other', 'rick mug', undefined, 7000, undefined, 5, "img/rickmug.jpg"));
inventario.push(new Producto('other', 'Grogu Toy', undefined, 56000, 2019, 10, "img/grogutoy.jpg"));



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
            <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#" 
            onclick="agregarAlCarrito('${producto.title}')">Agregar al carrito</a>
            </div>
        </div>
    </div>
</div>`
    });
    document.getElementById("productos").innerHTML = acumulador;

}

filtrarProductos();

//Carrito

function agregarAlCarrito(title) {
    const productoEncontrado = inventario.find(Producto => Producto.title === title);
    if (productoEncontrado != undefined) {
        baseDeDatos.push(productoEncontrado);
    } else {
        alert("No se encontró")
    }

    localStorage.agregarAlCarrito = JSON.stringify(baseDeDatos);
    document.getElementById("productosAgregados").innerHTML = baseDeDatos.length;

}

listaCarrito();

function listaCarrito(){
    let acumulador = ``;
    baseDeDatos.forEach((producto) => {
    acumulador += `<tr>
    <td> <img src="${producto.img}" width=100</td>
    <td>${producto.title}</td>
    <td>$ ${producto.price}</td>
    <td>
        <a href="#" class="borrar-producto bi bi-x-square" style="font-size: 30px" onclick="borrarProducto('${producto.title}')"></a>
    </td>
    </tr>`
    });
    $("#listado").html(acumulador)
}

//borrar productos del carrito
function borrarProducto(title){
    const productoEncontrado = baseDeDatos.filter(producto => producto.title != title);
    if (productoEncontrado.length > 0 ){
        baseDeDatos =  productoEncontrado
    }else{
        baseDeDatos = []
    }
    
    localStorage.carrito = JSON.stringify(carrito);
    document.getElementById("contador-carrito").innerHTML = carrito.length;
    listaCarrito(); 
    location.reload();
}

//calcular total a pagar

let precioTotal = 0
baseDeDatos.forEach(producto => {precioTotal  +=  producto.price });
$("#total").html("$ " + precioTotal);

//url base     https://api.mercadopago.com
// edpoint     /checkout/preferences

const totalFinal = {"items": [
    {
      "title": "Su compra en C-137",
      "description": "",
      "picture_url": "",
      "category_id": "",
      "quantity": 1,
      "currency_id": "CLP",
      "unit_price": precioTotal
  }]}






// const botones = document.createElement("div");

// botones.innerHTML = `<button onclick="filtroPorMayor()"> Productos Mayor de 30000$ </button>
//                         <button onclick="filtroPorMenor()">Productos Menor de 30000$</button>`;

// document.body.appendChild(botones);

//Se crean las cards 

// function filtroPorMayor() {
//     let mayor = inventario.filter(producto => producto.price >= 30000);

//     mayor.sort(function (a, b) {
//         let x = a.title.toLowerCase();
//         let y = b.title.toLowerCase();
//         if (x < y) {
//             return -1;
//         }
//         if (x > y) {
//             return 1;
//         }
//         return 0;
//     });

//     let acumulador = ``;
//     mayor.forEach((producto) => {
//         acumulador += `<div class="col mb-5" id="${producto.title}">
//     <div class="card h-100">
//         <!-- Product image-->
//         <img class="card-img-top" src="${producto.img}" alt="..." />
//         <!-- Product details-->
//         <div class="card-body p-4">
//             <div class="text-center">
//                 <!-- Product name-->
//                 <h5 class="fw-bolder">${producto.title}</h5>
//                 <h5 class="fw-bolder">${producto.artist}</h5>
//                 <!-- Product price-->
//                 $${producto.price}
//             </div>
//         </div>
//         <!-- Product actions-->
//         <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
//             <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#" 
//             onclick="agregarAlCarrito('${producto.title}')">Agregar al carrito</a>
//             </div>
//         </div>
//     </div>
// </div>`
//     });

//     console.log(mayor);
//     document.getElementById("productos").innerHTML = acumulador;

// }


// function filtroPorMenor() {
//     let menor = inventario.filter(producto => producto.price <= 30000);

//     menor.sort(function (a, b) {
//         let x = a.title.toLowerCase();
//         let y = b.title.toLowerCase();
//         if (x < y) {
//             return -1;
//         }
//         if (x > y) {
//             return 1;
//         }
//         return 0;
//     })

//     let acumulador = ``;
//     menor.forEach((producto) => {
//         acumulador += `<div class="col mb-5" id="${producto.title}">
//     <div class="card h-100">
//         <!-- Product image-->
//         <img class="card-img-top" src="${producto.img}" alt="..." />
//         <!-- Product details-->
//         <div class="card-body p-4">
//             <div class="text-center">
//                 <!-- Product name-->
//                 <h5 class="fw-bolder">${producto.title}</h5>
//                 <h5 class="fw-bolder">${producto.artist}</h5>
//                 <!-- Product price-->
//                 $${producto.price}
//             </div>
//         </div>
//         <!-- Product actions-->
//         <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
//             <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#" 
//             onclick="agregarAlCarrito('${producto.title}')">Agregar al carrito</a>
//             </div>
//         </div>
//     </div>
// </div>`
//     });

//     console.log(menor);
//     document.getElementById("productos").innerHTML = acumulador;


// }