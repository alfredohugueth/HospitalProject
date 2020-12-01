let infoCliente;
let idPasiente;
let estado;
let resultadoE;
let opciones ={
    method: 'POST'
};
fetch('/infocliente').then((response) => response.json())
				.then((json) => {
                    console.log(json);
                    nombre = json.datoscliente[0].nombre;
                    cedula = json.datoscliente[0].cedula;
                    //estado = json.datoscliente[0].estado;
                    fecha1 = json.datoscliente[0].fecha_examen;
                    idPasiente = json.datoscliente[0].codigo_caso;
                    sexo = json.datoscliente[0].sexo;
                    direccionR = json.datoscliente[0].direccion_residencia;
                    direccionT = json.datoscliente[0].direccion_trabajo;
                    resultadoE = json.datoscliente[0].resultado_examen;
                    fechaNaci = json.datoscliente[0].fecha_nacimiento;
                    document.getElementById("Nomb").innerHTML = nombre;
                    document.getElementById("ced").innerHTML = cedula;
                    document.getElementById("fech").innerHTML = fecha1;
                    document.getElementById("cod").innerHTML = idPasiente;
                    document.getElementById("sex").innerHTML = sexo;
                    document.getElementById("nacim").innerHTML = fechaNaci;
                    document.getElementById("direRes").innerHTML = direccionR;
                    document.getElementById("direTra").innerHTML = direccionT;
                    document.getElementById("resulEx").innerHTML = resultadoE;
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
                      // Definimos estado como el ultimo reportado por el usuario.
                      tam = ((json.rows).length);
                      estado = (json.rows[tam-1].Estado_Actual);
                      console.log(estado);
                    }
                });
               