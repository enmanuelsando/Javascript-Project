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

baseDeDatos.push(new Producto('disc', '...and justice for all', 'Metallica', 34000, 1988, 12, "img/Metallica-...AndJusticeForaAll.jpg"));
baseDeDatos.push(new Producto('disc', 'Master of puppets', 'Metallica', 40000, 1986, 4, "img/metallicaMOP.jpg"));
baseDeDatos.push(new Producto('disc', 'The number of the Beast', 'Iron Maiden', 32000, 1982, 13, "img/ironmaidenTNOTB.jpg"));
baseDeDatos.push(new Producto('disc', "Let's Rock", 'The Black Keys', 27000, 2019, 9, "img/theblackkeysLR.jpg"));
baseDeDatos.push(new Producto('disc', 'The Slow Rush', 'Tame Impala', 28000, 2020, 2, "img/tameimpalaTSR.jpg"));
baseDeDatos.push(new Producto('tshirt', 'the black album', 'Metallica', 18000, undefined, 8, "img/metallicatshirt.jpeg"));
baseDeDatos.push(new Producto('tshirt', 'U.S. Tour 78', 'Black Sabbath', 24000, undefined, 5, "img/blacksabbathtshirt.jpg"));
baseDeDatos.push(new Producto('sweatshirt', 'The number of the beast sweatter', 'Iron Maiden', 35000, undefined, 7, "img/ironmaidensweatshirt.jpg"));
baseDeDatos.push(new Producto('sweatshirt', 'Alive sweatter', 'Pearl Jam', 30000, undefined, 1, "img/pearljamsweatshirt.jpg"));
baseDeDatos.push(new Producto('sweatshirt', 'kings of leon sweatshirt', 'kings of leon', 26000, undefined, 5, "img/kofsweatshirt.jpg"));
baseDeDatos.push(new Producto('other', 'rick mug', undefined, 7000, undefined, 5, "img/rickmug.jpg"));
baseDeDatos.push(new Producto('other', 'Grogu Toy', undefined, 56000, 2019, 10, "img/grogutoy.jpg"));


const saludo = alert("Bienvenido a la mejor tienda musical de la tierra C-137!")

let botones = document.createElement("div");

botones.innerHTML = `<button onclick="filtroPorMayor()"> Productos Mayor de 30000$ </button>
                        <button onclick="filtroPorMenor()">Productos Menor de 30000$</button>`;

document.body.appendChild(botones);

function filtroPorMayor() {
    let mayor = baseDeDatos.filter(producto => producto.price >= 30000);

    mayor.sort(function (a, b) {
        let x = a.title.toLowerCase();
        let y = b.title.toLowerCase();
        if (x < y) {
            return -1;
        }
        if (x > y) {
            return 1;
        }
        return 0;
    });

    let acumulador = ``;
    mayor.forEach((producto) => {
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
            <button onclick="borrarDelCarrito('${producto.title}')">Eliminar esta card</button>
            </div>
        </div>
    </div>
</div>`
    });

    console.log(mayor);
    document.getElementById("productos").innerHTML = acumulador;
    // document.write(acumulador);

}


function filtroPorMenor() {
    let menor = baseDeDatos.filter(producto => producto.price <= 30000);

    menor.sort(function (a, b) {
        let x = a.title.toLowerCase();
        let y = b.title.toLowerCase();
        if (x < y) {
            return -1;
        }
        if (x > y) {
            return 1;
        }
        return 0;
    })

    let acumulador = ``;
    menor.forEach((producto) => {
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
            <button onclick="borrarDelCarrito('${producto.title}')">Eliminar esta card</button>
            </div>
        </div>
    </div>
</div>`
    });

    console.log(menor);
    document.getElementById("productos").innerHTML = acumulador;
    // document.write(acumulador);


}



// document.write(acumulador);

function showProductos() {
    baseDeDatos.forEach(producto => {
        console.log(producto.title)
    })
}

showProductos();