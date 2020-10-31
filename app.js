const express = require('express');
const mysql = require('mysql');
const app = express();
var cons = require('consolidate');
const path = require('path');
app.engine('html',cons.swig);
app.set('view engine', 'html');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(__dirname + '/public'));
app.get('/',function (req, res) {
    res.render('plantilla');
});
app.on('listening', () => {
	const address = app.address();
	console.log(`server listening ${address.address}:${address.port}`);
});

app.listen('40000', function () {
	console.log('Todo en orden');
});