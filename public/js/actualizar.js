// Definimos las variables que usaremos para tomar los datos que ingrese el usuario.
let estadActu;
let fechActu;
let idActu;
var InfoActu = [];
let opcionEnvio;
const formuActualiza = document.querySelector('#actuForm');
formuActualiza.addEventListener('submit',event =>{
    event.preventDefault();
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
    fetch('/actualizarEstado',opcionEnvio).then((response) => response.json())
				.then((json) => {
                    console.log(json);
                    document.getElementById("est").innerHTML = estadActu;
                    document.getElementById("fech").innerHTML = fechActu;
                })
})
