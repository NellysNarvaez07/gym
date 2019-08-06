const mongoose = require("mongoose");
const User = require("./model/usuario");
const Calificacione = require("./model/calificacione");
const Instructore = require("./model/instructore");
const Cliente = require ("./model/cliente");

class controller {
    constructor(){
        this.connect();
    }

    async connect(){
        try{
            await mongoose.connect('mongodb+srv://nellynarvaez34:32192609@cluster0-agr0q.mongodb.net/gimnasiofdl?authSource=admin&retryWrites=true&w=majority', {useNewUrlParser:true});
            console.log("Conectados a la base de datos")

        } catch(e){
            console.error(e)
        }

         }

setUsuario(usuario, res) {
    User.create(usuario, (err, nUsuario) => {
        res.send({status: 200, newUsuario: nUsuario})
    })
}

getUsers(res){
    User.find({}, (err, users)=>{
        if(err) throw err;

      res.send( users );
    })


    }

    getCalificaciones(res){
    Calificacione.find ({}, (err, calificacione) =>{
        if(err) throw err;
        res.send ( calificacione );
    })


    }

    getInstructore(res){
    Instructore.find({}, (err,instructore) => {
         if(err) throw err;
        res.send( instructore )
    })
    }

    setCliente(cliente,res){
        Cliente.create(cliente, (err, ncliente) => {
            if (err) throw err;
            res.send ({newCliente:ncliente})
        })
    }

    getCliente(res){
    Cliente.find({}, (err, Cliente) => {
if (err) throw err;

        res.send ( Cliente )
    })

    }


}
exports.controller = new controller()



