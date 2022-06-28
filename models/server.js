const express= require('express');
const cors= require('cors');
const {dbConnection}= require('../database/config');

class Server{
    constructor(){
        this.app=express();
        this.port=process.env.PORT;

        //middlewares
        this.middlewares();

        //connect to database
        this.database();

        //paths of routes
        this.usuariosPath='/api/usuarios';

        //routes of my app
        this.router();
    }

    async database(){
        await dbConnection();
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