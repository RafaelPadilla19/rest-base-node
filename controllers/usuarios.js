const {response} = require('express');
const Usuario = require('../models/usuario');

const usuariosGet=(req,res=response)=>{
    const {order,nombre='no name'} = req.query;


    res.json({
        msg:'get api',
        order,
        nombre
    });
}

const usuariosPut=(req,res=response)=>{
    const id= req.params.id;
    res.json({
        msg:'put api',
        id
    });
}
const usuariosPost=async (req,res=response)=>{
    const body= req.body;
    const usuario= new Usuario(body);
    
    await usuario.save();

    res.json({
        msg:'post api',
        usuario
    });
}
const usuariosDelete=(req,res=response)=>{
    
    res.json({
        msg:'delete api'
    });
}

module.exports={
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete
}