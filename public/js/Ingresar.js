
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