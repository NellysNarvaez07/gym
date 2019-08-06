const express = require("express");
const app = express();

const bodyParser = require("body-parser")

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

const { controller } = require("./controller")

app.get("/", (req,res) => {
    res.send("Hola mundo");
})

app.get("/users", (req, res) => {
    controller.getUsers(res)
})

app.post("/usuario", (req,res) => {
    let usuario = req.body;
    controller.setUsuario(usuario, res);
})

app.get("/calificaciones", (req,res) => {
    // let calificaciones = req.body;
    controller.getCalificaciones(res);

})

app.post("/calificaciones", (req,res) => {
   let calificaciones = req.body
   controller.setCalificaciones( calificaciones, res);
})
app.get("/instructore", (req,res) => {
    //let instructore = req.body;
    controller.getInstructore(res);
})

app.post("/instructore", (req,res) => {
    let instructore = req.body
    controller.getInstructore(instructore,res)
})
app.get("/cliente", (req,res) => {
controller.getCliente(res);

})

app.post("/cliente", (req,res) => {
     let cliente = req.body;
    controller.setCliente(cliente,res)

})


exports.app = app;