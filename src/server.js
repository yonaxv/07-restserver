require('./config/config')

const express = require('express');
const app = express();

const mongoose = require('mongoose');

const bodyParser =require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

//Conf global de rutas
app.use(require('./routes/index'))


app.get('/',function(req,res){
    res.json('hello world');
});



mongoose.connect(process.env.URL,(err,res)=>{
    if(err) throw err;
    console.log('base de datos ONLINE');
});


app.listen(process.env.PORT,()=>{
    console.log('escuchando puerto:',process.env.PORT);
});