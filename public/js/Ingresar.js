
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
    enviar(opciones);
    cont = cont+1;

 
});

function enviar(opciones){
    fetch('/',opciones).then((response) => response.json())
    .then((json) => {
        console.log(json);
        //Verificamos que es lo que llega del server, y redireccionamos.
        let nombreRedi = json.rol;
        let direccion = "http://192.168.20.33:40000/";
        let nuevdireccion = direccion+nombreRedi;
        window.location.replace(nuevdireccion);
    });
}
    
