const express= require('express');
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const { request } = require('express');
const path = request('path');

const app = express();
// CONFIGURACION
app.set('port',process.env.PORT|| 4000);
app.set('vistas',path.join(__dirname,'vistas'));
app.engine('.hbs',exphbs({
    defaultLayout:'main',
    layoutsDir:path.join(app.get('vistas','layouts')),
    partialsDir:path.join(app.get('vistas')) 

}))

// 
app.use(morgan('dev'));

// rutas
app.use(require('./rutas/'));

//variables globales

// public

// servidor
app.listen(app.get('port'),() => {
    console.log('Server on port', app.get('port'));

})
