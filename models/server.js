const express= require('express');
const cors= require('cors');

class Server{
    constructor(){
        this.app=express();
        this.port=process.env.PORT;

        //middlewares
        this.middlewares();

        //paths of routes
        this.usuariosPath='/api/usuarios';

        //routes of my app
        this.router();
    }

    middlewares(){

        //cors
        this.app.use(cors());

        // parseo y lectura de body
        this.app.use(express.json());

        //public directory
        this.app.use(express.static('public'));
    }

    router(){
      this.app.use(this.usuariosPath,require('../routes/usuarios'));
    }

    listen(){
        this.app.listen(this.port,()=>{
            console.log('http://localhost:'+this.port);
        
        });
    }
}

module.exports=Server;