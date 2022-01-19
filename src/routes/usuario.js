const express = require('express');
const app = express();


app.get('/usuario',function(req,res){
    res.json('GET hello world LOCAL');
})

app.post('/usuario',function(req,res){
    
    let body = req.body;

    if(body.nombre === undefined){
        res.status(400).json({
            ok:false,
            message:'Es necesario el nombre'
        })
    }
    
    res.json({
        persona: body
    });
})
app.put('/usuario/:id',function(req,res){
    let id = req.params.id;
    res.json({
        id
    });
})
app.delete('/usuario',function(req,res){
    res.json('DELETE hello world');
})

module.exports = app;