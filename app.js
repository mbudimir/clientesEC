//Requires
var express = require('express');
var mongoose = require('mongoose');

//Inicializate
var app = express();

//coneccion a la db
mongoose.connection.openUri('mongodb://localhost:27017/ClientesEC',
(err,res)=>{
    if(err) throw err;
    console.log('mongo server puerto 27017')
})

//Rutas
app.get('/',(req,res,next)=>{
    res.status(201).json({
        ok: true,
        mensaje:'realizado correctamente'
    });
});

app.listen(3000,()=>{
    console.log('express server puerto 3000')
});