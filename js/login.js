//login modal function

function loginModal() {
    $('#loginModal').modal('show');
    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    })
};

let username = document.getElementById('uname');
let password = document.getElementById('password');

function login(){
    localStorage.setItem('username', username.value);
    localStorage.setItem('password', password.value);
    $('#loginModal').modal('hide');

document.getElementById('loginbtn').innerHTML = `<h4>Hola "${user.value}"!</h4>`;
}

