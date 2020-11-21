
<<<<<<< HEAD

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
    window.location.replace(direccion);
    });
}
    
=======
let Usuario;
let Contraseña;
const Ingresar = document.querySelector('#FormIngreso');
var Usuario = document.getElementById("Usua");
console.log(Usuario);
var Contraseña = document.getElementById("Contra");
console.log(Contraseña);
let infomacion = {
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
Ingresar.addEventListener('submit',event =>{
    event.preventDefault();
    fetch('/',opciones).then((response) => response.json())
                .then((json) => {
                    console.log(json);
                });
});
>>>>>>> 3a2088668b9547c74274c88f3b835c19de8a3b7b
