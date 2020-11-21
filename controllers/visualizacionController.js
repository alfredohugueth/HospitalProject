const controller = {};

controller.casos = (req, res) => {
  req.getConnection((err, conn) => {
    conn.query('SELECT COUNT(*) FROM registro_caso', (err, customers) => {
     if (err) {
      res.json(err);
     }
     res.render('customers', {
        data: customers
     });
    });
  });
};

