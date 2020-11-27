const express = require('express');
const mysql = require('mysql');
const app = express();
var cons = require('consolidate');
const path = require('path');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(__dirname + '/public'));
app.use(express.json({limit:'1mb'}));
require('dotenv').config();
myConnection = require('express-myconnection');

app.set('view engine', 'ejs');
// Base de datos


app.use(myConnection(mysql, {
	host: process.env.DB_HOST,
	user: process.env.DB_USER,
	password: process.env.DB_PASS,
	port: 3306,
	database: process.env.DB_DB,
  }, 'single')); 
  // Como lo hace alfredo
  const database = mysql.createConnection(
	  {
		host: process.env.DB_HOST,
		user: process.env.DB_USER,
		password: process.env.DB_PASS,
		port: 3306,
		database: process.env.DB_DB,	  
	  }
  );
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
	
	 console.log('Base de datos conectada');
});

  app.use(express.urlencoded({extended: false}));



// rutas
const customerRoutes = require('./routes/customer');
const admin = process.env.admin;
 
app.use('/', customerRoutes);
/*
app.get('/',(req,res)=>{
	res.render('login');
}) */
/*
app.post('/',function(req,res){
	var rol ;
	console.log(req.body);
	usuario = req.body.usuario;
	console.log(usuario);
	contraseña = req.body.contraseña;
	console.log(contraseña);
	// Realizo query a base de datos.
	let sql = "select rol from administracion where usuario = ? and contrasena = ?";
	let query = database.query(sql, [usuario, contraseña], (err, result) => {
		if (err){
		console.trace('error=' + err.message);
	};
		//Verificamos primero si existe este campo en la base de datos, en caso contrario, redireccionamos nuevamente a pagina con mensaje de usuario y contraseña incorrectos.
		var condi = result.length;
		// Aca verificamos si el string esta vacio.
		if(condi == 0){
			// usuario o contraseña incorrectas
			console.log("Usuario o contraseña incorrectos");
			Direccionrender = 'login';
			rol = '';
		}else{
			console.log("Entramos a condicional");
			rol = result[0].rol;
			console.log(rol);
			if(rol == "AYUDANTE"){
				console.log("Aca se re-dirigiria a funciones de ayudante.");
				
				
			}
			if(rol == "MEDICO"){
				console.log("Aca se re-dirigiria a funciones de doctor");
				Direccionrender = 'medico';
			}
			
		}
		console.log("Hora de re direccionar");
		res.json({rol: rol});
});
*/
app.get('/geomapold', (request, response) => {
    res.render('mapgeo');
});
app.get('/ayudante', (req,res)=>{
	res.render('ayudante');
});
app.get('/medico',(req,res) =>{
	res.render('medico');
}); 
//res.json({mensaje : "todo parece bien"});

// Aca iria la creacion de la info de la base de datos.

app.on('listening', () => {
	const address = app.address();
	console.log(`server listening ${address.address}:${address.port}`);
});

app.listen('40000', function () {
    console.log('Todo en orden');
});