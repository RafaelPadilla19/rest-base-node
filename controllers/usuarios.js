const {response} = require('express');

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
const usuariosPost=(req,res=response)=>{
    const {nombre,edad}= req.body;
    res.json({
        msg:'post api',
        nombre,
        edad
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