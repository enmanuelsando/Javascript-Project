

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


listaCarrito();

function listaCarrito() {
    let acumulador = ``;
    baseDeDatos.forEach((producto) => {
        acumulador += `<tr>
    <td> <img src="${producto.img}" width=130</td>
    <td>${producto.title}</td>
    <td>$ ${producto.price}</td>
    <td>
        <a href="#" class="borrar-producto bi bi-x-square" style="font-size: 30px" onclick="borrarProducto('${producto.title}')"></a>
    </td>
    </tr>`
    });
    document.getElementById("listado").innerHTML = acumulador;
}


//borrar productos del carrito
function borrarProducto(title) {
    const productoEncontrado = baseDeDatos.filter(producto => producto.title != title);
    if (productoEncontrado.length > 0) {
        baseDeDatos = productoEncontrado
    } else {
        baseDeDatos = []
    }

    localStorage.baseDeDatos = JSON.stringify(baseDeDatos);
    document.getElementById("contador-carrito").innerHTML = baseDeDatos.length;
    listaCarrito();
    location.reload();
}

//calcular total a pagar

let precioTotal = 0
baseDeDatos.forEach(producto => {precioTotal += producto.price});
$("#total").html("$ " + precioTotal);


const totalFinal = {
    "items": [{
        "title": "Su compra en C-137",
        "description": "",
        "picture_url": "https://github.com/enmanuelsando/Javascript-Project/blob/main/img/vynildisc.png",
        "category_id": "",
        "quantity": 1,
        "currency_id": "CLP",
        "unit_price": precioTotal
    }]
}

function pagar(i) {
    let totalFinal = i;
    let cliente = localStorage.getItem('uname');
    let password = localStorage.getItem('password');

    if (precioTotal === 0) {
        swal({
            title: "El carrito esta vacio!",
            text: "Seleciona tus productos",
            icon: "warning",
            button: "ok!",
        }).then(function () {
            window.location = "index.html";
        });
    } else if (cliente.value === '' || password.value === '') {
        swal({
            title: "Completa los Datos!",
            text: "para poder contactarnos.",
            icon: "warning",
            button: "ok!",
        })
    } else {
        $.ajaxSetup({
            headers: {
                'Authorization': 'Bearer TEST-2126268000141506-092522-168d7240ca77684a5987f0bd5c377b9c-830672308',
                'Content-Type': 'application/json'
            }
        });

        $.post("https://api.mercadopago.com/checkout/preferences", JSON.stringify(totalFinal), (respuesta, status) => {
            urlPago = respuesta.init_point
            window.open(`${urlPago}`);
        });
        localStorage.removeItem('carrito');
        swal({
            title: "Gracias por tu compra!",
            text: "nos comunicaremos a la brevedad",
            icon: "success",
            button: "ok!",
        }).then(function () {
            window.location = "index.html";
        });
    }
}

