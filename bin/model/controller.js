const mongoose = require("mongoose");
const User = require("./models/User");

class controller {
    constructor(){
        this.connect();
    }

    async connect(){
        try{
            await mongoose.connect("mongodb+srv://nellynarvaez34:<zcWj2E4#4Ki.Kn3>@cluster0-agr0q.mongodb.net/gimnasio?retryWrites=true&w=majority"{useNewUrlParser:true});
            console.log("Conectados a la base de datos")

        } catch(e){
            console.error(e)
        }

         }

getUsers(res){
    User.find({}, (err, users)=>{
        if(err) throw err;

      res.send( users );
    })


    }
}

exports.controller = new controller()



