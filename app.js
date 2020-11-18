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

  app.use(express.urlencoded({extended: false}));



// rutas
const customerRoutes = require('./routes/inicio');

// routes
app.use('/', customerRoutes);

app.get('/geomap', (request, response) => {
    response.sendFile(path.join(__dirname + '/views/mapgeo.html'));
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