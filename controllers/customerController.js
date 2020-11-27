const controller = {};
let datoscliente = {};
let idrec = 0;
controller.login = (req,res) =>{
  res.render('login');
}

controller.list = (req, res) => {
  req.getConnection((err, conn) => {
    conn.query('SELECT * FROM administracion', (err, customers) => {
     if (err) {
      res.json(err);
     }
     res.render('customers', {
        data: customers
     });
    });
  });
};
controller.sendinfo = (req,res) =>{
    var rol ;
	  console.log(req.body);
	  usuario = req.body.usuario;
	  console.log(usuario);
	  contraseña = req.body.contraseña;
    console.log(contraseña);
    //res.json({mensaje:"la conexion cliente servidor fue exitosa."});
    //Conectamos a database.
    req.getConnection((err,connection) =>{
      let quer = "select rol from administracion where usuario = ? and contrasena = ?";
      connection.query(quer,[usuario,contraseña],(err,result) =>{
        if(err){
          res.json(err);
        };
        //Verificamos primero si existe este campo en la base de datos, en caso contrario, redireccionamos nuevamente a pagina con mensaje de usuario y contraseña incorrectos.
        var condi = result.length;
        console.log(condi);
        // Aca verificamos si el string esta vacio.
		    if(condi == 0){
			  // usuario o contraseña incorrectas
			  console.log("Usuario o contraseña incorrectos");
        //res.redirect('/');
        res.json({roles: '/'});
    }else{
			console.log("Entramos a condicional");
      rol = result[0].rol;
      console.log(rol);
      //console.log("Aca se re-dirigiria a funciones de ayudante.");
      res.json({roles:rol});
			
			
  }
      });
    })
}
controller.ayudante = (req,res) =>{
    res.render('registarCaso');
}


    let data0;
    let data1;
    var data2;
    var data3;
    var data4;
controller.medico = (req, res) => {
  
  

  req.getConnection((err, conn) => {
   
    conn.query("SELECT COUNT(*) FROM registro_casos WHERE sexo = ? ", ["MASCULINO"], (err, rows) => {
     data0= rows
    console.log(data0);
    
    });
   conn.query("SELECT COUNT(*) FROM registro_casos  ", (err, rows) => {
      data1 =rows
       console.log(rows);
    
    });
    conn.query("SELECT COUNT(*) FROM registro_casos WHERE sexo = ?", ["FEMENINO"], (err, rows) => {
      
      data2= rows;    
     console.log(rows);
  
    });
  conn.query("SELECT COUNT(*) FROM registro_casos WHERE resultado_examen = ?", ["POSITIVO"], (err, rows) => {
       
       
        data3= rows
      
      console.log(rows);

  });
  conn.query("SELECT COUNT(*) FROM registro_casos WHERE resultado_examen = ?", ["NEGATIVO"], (err, rows) => {
    
    res.render('index', {
      data4: rows,
      data0,
      data1,
      data2,
      data3,
    }) 
    
   console.log(rows);
   
   });
});

};
controller.save = (req, res) => {
  const data = req.body;
  console.log(req.body)
  req.getConnection((err, connection) => {
    
    connection.query("INSERT INTO administracion set ?", [data], (err, customer) => {
      if (err){
        res.json(err)
      }
      
      console.log(customer)
      res.redirect('/ADMINISTRADOR');
    })
  })
};

controller.edit = (req, res) => {
  const { id } = req.params;
  req.getConnection((err, conn) => {
    conn.query("SELECT * FROM administracion WHERE cedula = ?", [id], (err, rows) => {
      res.render('customers_edit', {
        data: rows[0]
      })
    });
  });
};

controller.update = (req, res) => {
  const { id } = req.params;
  const newCustomer = req.body;
  console.log(newCustomer);
  req.getConnection((err, conn) => {
    
  conn.query('UPDATE administracion set ? where cedula = ?', [newCustomer, id], (err, rows) => {
    
    res.redirect('/ADMINISTRADOR');
  });
  });
};

controller.delete = (req, res) => {
  const { id } = req.params;
  req.getConnection((err, connection) => {
    connection.query('DELETE FROM administracion WHERE cedula = ?', [id], (err, rows) => {
     res.redirect('/ADMINISTRADOR');
    });
  });
}

controller.savecaso = (req, res) => {
  const data = req.body;
  console.log(req.body)
  req.getConnection((err, connection) => {
    
    connection.query("INSERT INTO registro_casos set ?", [data], (err, customer) => {
      if (err){
        res.json(err)
      }
      
      console.log(customer)
      res.redirect('/AYUDANTE');
    })
    console.log(data);
  })
};
controller.gestionarcas = (req,res) =>{
  res.render('gestionar');
}
controller.busqueda = (req,res) =>{
  // Revisamos en el servidor la informacion que hemos recibido.
  console.log(req.body.busqueda);
  const busq = req.body.busqueda;
  req.getConnection((err, connection) =>{
    connection.query("SELECT * from registro_casos where codigo_caso = ? or cedula = ? or nombre = ?",[busq,busq,busq],(err,rows) =>{
      if(err){
        res.json(err);
      }
      else{
      console.log(rows.length);
      const tamarow = rows.length;
      if(tamarow == 0){  // Es decir que no hay ningun valor en la base de datos con esta info
        res.redirect('/GESTIONAR');
      }else{
        // Aca va a posisionarse el siguiente paso. 
      res.render('Paciente');
      //res.json(rows);
        datoscliente = rows;
        idrec = rows[0].codigo_caso;
      }
      }
    })
  })

}
controller.prueba = (req,res) =>{
    res.render('datosgestionar');
}
controller.pacient = (req,res) =>{
    res.json({datoscliente});
}

controller.actualiz = (req,res) =>{
  console.log(req.body);
  
  idrec = req.body.id;
  fechrec = req.body.fecha;
  estrec = req.body.estado;

  // Hacemos el query para actualizar los datos del usuario.
  req.getConnection((err, connection)=>{
    connection.query("UPDATE actualiza_estado set estado = ?,fecha = ? where codigo_caso = ?;",[estrec,fechrec,idrec],(err,rows) =>{
      if(err){
        console.log(err);
      }else{
      //res.json({mensaje:"Todo bien por ahora"});
      }
    });
    // Ahora enfoquemonos a acumular los datos de actualizacion de cada usuario.
   
  })
  req.getConnection((err2,connection2)=>{
    connection2.query('insert into estados_UsuariosAlfre (codigo_consulta, fecha_Actual, Estado_Actual) values (?,?,?)',[idrec,fechrec,estrec],(err2,row2) =>{
      if(err2){
        console.log(err2);
      }else{
        console.log("Todo sigue bien");
      }
    })
    //Ahora realizemos query de los datos que son recibidos del usuario para ubicarlos en la pagina en forma de tabla.
    
  })
  console.log(idrec);
  req.getConnection((err3,connection3)=>{
    connection3.query('select fecha_Actual, Estado_Actual from estados_UsuariosAlfre where codigo_consulta = ? ORDER BY fecha_Actual ASC',[idrec],(err4,rows3) =>{
      if(err4){
        console.log(err);
      }else{
        res.json({rows3});
        console.log("Datos de tabla actualizados.");
      }
    });
  });

}
controller.getdatusuario = (req,res) =>{
  // Realizamos el en caso de que se haya digitado algun parametro correcto.
  console.log(datoscliente);
  console.log(idrec);
  if(datoscliente.length != 0){
    //Hacemos query
    req.getConnection((err,connection) =>{
      connection.query('select fecha_Actual, Estado_Actual from estados_UsuariosAlfre where codigo_consulta = ? ORDER BY fecha_Actual ASC;',[idrec],(err,rows) =>{
        if(err){
            console.log(err);
        }else{
          res.json({rows});
        }
      });
    });
  }else{
    res.json({mensaje:"no hay datos"});
  }
};


module.exports = controller;

