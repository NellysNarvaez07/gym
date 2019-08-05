
const express = require("express");
const app = express();
const { Controller } = require("./Controller")

app.get("/", (req, res) => {
  res.send("gimnasio");
});

app.get("/users", (req, res) => {
  let users = [
    { name: "Jhon", lastName: "Doe", age:  30 },
    { name: "María", lastName: "Sharápova", age: 32 }
  ];
  res.send(users);
});

app.get("/usuarios", (req, res) => {
  let usuarios = [
    { apodo: "jose", contraseña: '12345', id_instructores:22 }

  ];
  res.send(usuarios);
});
app.get("/cientes", (req, res) => {
  let clientes = [
    { nombre1: "maria", nombre2: "camila", apellido1: "eljach", apellido2: "restan", cedula: '1003125207', correo: "nemanama@hotmail.com", telefono: '3022507542', peso_inicial: "80 kg", peso_final: "53 kg", fecha_inicial: "15/07/2019", fecha_final: "18/10/2019", id_usuarios:18 }

  ];
  res.send(clientes);
});

app.get("/instructores", (req, res) => {
    let instructores = [
        {nombre1: "rodolfo", nombre2: "manuel", apellido1: "sanchez", apellido2: "navarro", telefono: '312777214', cedula: '26039987', correo: "alumarmol@hotmail.com", id_usuarios:18 }

    ];
    res.send(instructores);
});

app.get("/calificaciones", (req, res) => {
    let calificaciones = [
        {nombre1: "mario", nombre2: "emiliano", apellido1: "martinez", apellido2: "anaya", correo:"marioe@hotmail.com", cedula: '38039593', metodo_enseñanza: "crossfit", recomendacion: "hacer dieta y tomar mucha agua", rutina: "sentadillas traseras con peso", id_instructores:22 }

    ];
    res.send(calificaciones);
});


exports.app = app;
