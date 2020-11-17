const controller = {};
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
			  res.redirect('/');
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
    res.render('ayudante');
}
controller.medico = (req,res) =>{
  res.render('medico');
}
controller.save = (req, res) => {
  const data = req.body;
  console.log(req.body)
  req.getConnection((err, connection) => {
    
    connection.query("INSERT INTO administracion set ?", [data], (err, customer) => {
      if (err){
        res.json(err)
      }
      
      console.log(customer)
      res.redirect('/');
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
    
    res.redirect('/');
  });
  });
};

controller.delete = (req, res) => {
  const { id } = req.params;
  req.getConnection((err, connection) => {
    connection.query('DELETE FROM administracion WHERE cedula = ?', [id], (err, rows) => {
     res.redirect('/');
    });
  });
}

module.exports = controller;

