let infoCliente;
let idPasiente;
let estado;
let opciones ={
    method: 'POST'
};
fetch('/infocliente').then((response) => response.json())
				.then((json) => {
                    console.log(json);
                    nombre = json.datoscliente[0].nombre;
                    cedula = json.datoscliente[0].cedula;
                    estado = json.datoscliente[0].estado;
                    fecha1 = json.datoscliente[0].fecha;
                    idPasiente = json.datoscliente[0].codigo_caso;
                    document.getElementById("Nomb").innerHTML = nombre;
                    document.getElementById("ced").innerHTML = cedula;
                    document.getElementById("est").innerHTML = estado;
                    document.getElementById("cod").innerHTML = idPasiente;
                    document.getElementById("fech").innerHTML = fecha1;
                });
fetch('/HistorialUsua').then((response) => response.json())
                .then((json) =>{
                    //Recibo los datos historicos del usuario.
                    console.log(json.rows);
                    //Estos datos debo mostrarlos en una tabla.
                    if(json.rows !={}){
                      var temp = "";
                      // Empezamos el loop para ingresar estos datos a la tabla.
                      
                      json.rows.forEach((u) => {
                          temp += "<tr>";
                          temp += "<td>"+u.Estado_Actual+"</td>";
                          temp += "<td>"+u.fecha_Actual+"</td></tr>";

                      });
                      // Terminamos el loop
                      document.getElementById("HistorialUsua").innerHTML = temp;

                    }
                })