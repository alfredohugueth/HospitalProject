const express = require('express');
const mysql = require('mysql');
const app = express();
var cons = require('consolidate');
const path = require('path');
app.engine('html',cons.swig);
app.set('view engine', 'html');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(__dirname + '/public'));
app.use(express.json({limit:'1mb'}));
require('dotenv').config();
// Base de datos
const database = mysql.createConnection({
    host: process.env.db_host, 
    user: process.env.db_user , 
    password: process.env.db_pass, 
    database: process.env.db_data, 
    port: process.env.db_port
});
database.connect((err,connection) =>{
	if (err){
		if (err.code === 'PROTOCOL_CONNECTION_LOST'){
			console.error('CONEXION CON BASE DE DATOS PERDIDA');
		}
		if (err.code === 'ER_CON_COUNT_ERROR'){
			 console.error('CONEXIONES OCUPADAS');
		}
	 if (err.code === 'ECONNREFUSED'){
		 console.error('CONEXION RECHAZADA');
	 }
	 }
	
	 console.log('Base de datos conectada')
});
// Formulario de ingreso. Entrada predeterminada.
app.get('/', function(req,res){
    res.render('login');

});
app.post('/',function(req,res){
    console.log(req);
    res.json({mensaje: "llego informacion del cliente"});
});
// Aca iria la creacion de la info de la base de datos.

app.on('listening', () => {
	const address = app.address();
	console.log(`server listening ${address.address}:${address.port}`);
});

app.listen('40000', function () {
    console.log('Todo en orden');
});