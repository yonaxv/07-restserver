const express = require('express');
const app = express();

const bcrypt = require('bcrypt');

const _ = require('underscore');
const Usuario = require('../models/usuario');
const usuario = require('../models/usuario');

app.get('/usuario',function(req,res){
    
    let desde = req.query.desde || 0;
    desde = Number(desde);

    let limite = req.query.limite || 5;
    limite = Number(limite)
    let estado ={
        estado: true
    };
    

    Usuario.find(estado,'nombre email role estado google img')
    .skip(desde)
    .limit(limite)
        .exec((err,usuarios)=>{
            if(err){
                return res.status(400).json({
                    ok:false,
                    err
                });
            };
            
            Usuario.count(estado,(err,conteo)=>{
                res.json({
                    ok:true,
                    usuarios,
                    cuantos:conteo
                })
            })

            
        });

})

app.post('/usuario',function(req,res){
    
    let body = req.body;

    let usuario = new Usuario({
        nombre: body.nombre,
        email: body.email,
        password: bcrypt.hashSync(body.password,10),
        role: body.role
    });

    usuario.save((err,usuarioDB)=>{
        if(err){
            return res.status(400).json({
                ok: false,
                err
            })
        };

        //usuarioDB.password = null;
        res.json({
            ok:true,
            usuario:usuarioDB
        });
    });
})
app.put('/usuario/:id',function(req,res){
    let id = req.params.id;
    let body = _.pick(req.body,['nombre','email','img','role','estado']);
    Usuario.findByIdAndUpdate(id,body,{new:true},(err,usuarioDB)=>{
        if(err){
            return res.status(400).json({
                ok: false,
                err
            })
        };

        res.json({
                ok:true,
                usuario: usuarioDB
            });
    })
    
})


app.delete('/usuario/:id',function(req,res){
    let id = req.params.id;
    let changeStatus = {
        estado: false
    };
    usuario.findByIdAndUpdate(id,changeStatus,{new: true},(err,usuarioDB)=>{
        if(err){
            return res.status(400).json({
                ok: false,
                err
            })
        };

        res.json({
                ok:true,
                usuario: usuarioDB
            });
    })
})
/*              ELIMINACION DE LA DB
app.delete('/usuario/:id',function(req,res){

    let id = req.params.id;

    Usuario.findByIdAndRemove(id,(err,usuarioDeleted)=>{
        if(err){
            return res.status(400).json({
                ok:false,
                err
            });
        };
        if(!usuarioDeleted){
            return res.status(400).json({
                ok:false,
                err:{
                    message:'Usuario no encontrado'
                }
            });
        }
        res.json({
            ok:true,
            usuario:usuarioDeleted
        })
    });

});*/

module.exports = app;