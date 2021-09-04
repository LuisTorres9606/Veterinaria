var app = angular.module('myApp', []);

app.controller('validateCtrl', function ($scope) {

});

function dash() {

    var user = document.getElementById("user").value;
    var password = document.getElementById("password").value;

    if (user == "Admin" && password == "123*") {
        this.open("Disponibles.html","_self");
    }
    else
    {
        var Err = 'El usuario o la contraseña son incorrectos'
        document.getElementById('Error').innerText = Err;
    }
}