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

let baseDeDatos = [];
if (localStorage.baseDeDatos != null) {
    baseDeDatos = baseDeDatos = JSON.parse(localStorage.baseDeDatos);
    document.getElementById('contador-carrito').innerHTML = baseDeDatos.length;
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
