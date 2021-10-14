//login modal function
function loginModal() {
    $('#loginModal').modal('show');
    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    })
};

const usuarioEnLS = localStorage.getItem('username');

if (usuarioEnLS !== null){
document.getElementById('loginbtn').innerHTML = `<h4>Hola ${usuarioEnLS}!</h4>`;
}

let username = document.getElementById('uname');
let password = document.getElementById('password');


function login() {

    localStorage.setItem('username', username.value);
    localStorage.setItem('password', password.value);
    $('#loginModal').modal('hide');
}

