// Definimos las variables que usaremos para tomar los datos que ingrese el usuario.
let estadActu;
let fechActu;
let idActu;
var InfoActu = [];
let opcionEnvio;
const formuActualiza = document.querySelector('#actuForm');
formuActualiza.addEventListener('submit',event =>{
    event.preventDefault();
    //Verificamos primero si el ultimo estado del usuario es P/Muerto.
    estadActu = document.getElementById("estActu1").value;
    console.log(estadActu);
    fechActu = document.getElementById("FechActu1").value;
    console.log(fechActu);
    console.log(idPasiente);
    infoActu = {
        id: idPasiente,
        fecha: fechActu,
        estado: estadActu,

    };
    opcionEnvio = {
        method: "POST",
			body: JSON.stringify(infoActu) ,
			headers:{
				'Content-Type': 'application/json'
      			// 'Content-Type': 'application/x-www-form-urlencoded',
			}
    }
    //console.log(estado);
    // Esto es para pushear el merge.
    if(resultadoE == 'NEGATIVO'){   
        alert("No es posible actualizar, paciente con resultado negativo.");
    }else{
        if(estado == "P/Muerto"){
            alert("Usuario Muerto, no es posible realizar actualización");
        }else{
        estado = estadActu;
        fetch('/actualizarEstado',opcionEnvio).then((response) => response.json())
				.then((json) => {
                    console.log(json);
                    //document.getElementById("est").innerHTML = estadActu;
                    //document.getElementById("fech").innerHTML = fechActu;
                    //Recibo los datos historicos del usuario.
                    console.log(json.rows3);
                    //Estos datos debo mostrarlos en una tabla.
                    if(json.rows3 !={}){
                      var temp = "";
                      // Empezamos el loop para ingresar estos datos a la tabla.
                      
                      json.rows3.forEach((u) => {
                          temp += "<tr>";
                          temp += "<td>"+u.Estado_Actual+"</td>";
                          temp += "<td>"+u.fecha_Actual+"</td></tr>";

                      });
                      // Terminamos el loop
                      document.getElementById("HistorialUsua").innerHTML = temp;
                      
                    }
                });
            }
        }
    
})
