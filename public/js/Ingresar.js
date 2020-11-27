

let Usuario;
let Contraseña;
let cont = 0;
const formLogin = document.querySelector('#FormIngreso');
formLogin.addEventListener('submit',event =>{
    event.preventDefault();
    Usuario = document.getElementById("username").value;
    console.log(Usuario);
    Contraseña = document.getElementById("pass").value;
    console.log(Contraseña);
    let informacion = {
        usuario: Usuario, 
        contraseña: Contraseña
    };
    console.log(informacion);
    const opciones = {
        method: 'POST',
	    body: JSON.stringify(informacion) ,
	    headers:{
	    'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
                        }
};
    if(cont == 0){
    enviar(opciones);
    cont = cont+1;
    }else{
        cont = cont+1;
    }
   
 
});

function enviar(opciones){
    fetch('/',opciones).then((response) => response.json())
    .then((json) => {
    console.log(json);
    let direccion = json.roles;
    if(direccion == 'MEDICO'){
    direccion = direccion+2;
    }
    window.location.replace(direccion);
    });
}
    
