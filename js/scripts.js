const saludo = alert("Bienvenido a la mejor tienda musical de la tierra C-137!");

/*Eventos*/

function validarTelefono() {
  let telefono = document.getElementById("telefono");
  if (telefono.length != 9) {
    alert('El teléfono debe tener 9 números')
    telefono = undefined;
  } else {
    console.log(telefono)
  }
}

function validarAno() {
  let ano = document.getElementById('ano').value;
  if (ano > 2021) {
    alert("No puede ser del futuro")
  } else {
    console.log(ano)
  }
}

function mostrarDatos() {
  let nombre = document.getElementById('nombre').value;
  let artista = document.getElementById('artista').value;
  let ano = document.getElementById('ano').value;
  let telefono = document.getElementById('telefono').value;

  console.log(nombre, artista, ano, telefono)

  let valores = {
    nombre: nombre,
    artista: artista,
    ano: ano,
    telefono: telefono,
  }
  console.log(valores);

}

// manipulacion del DOM con JQuery

$(document).ready(function () {
  $('#deleteJquery').remove();
});

// respuesta a eventos por JQuery 

$(document).ready(function () {
  $("input").focus(function () {
    $(this).css("background-color", "yellow");
  });
  $("input").blur(function () {
    $(this).css("background-color", "green");
  });
});

//Animaciones

$(document).ready(function () {
  $("#button").click(function () {
    $("#p1").css("color", "green")
      .slideUp(2000)
      .slideDown(2000);
  });
});

// // Ajax con JSON

function GetDatos(){
  fetch('https://rickandmortyapi.com/api/character').then(response => {
    return response.json();
  }).then(response => {
    console.log(response);
  })
}

GetDatos();