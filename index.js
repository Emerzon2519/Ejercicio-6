// Controles del fomrulario 
const usuario = document.getElementById("txtUsuario");
const msgValUsuario = document.getElementById("txtUsuario");

const nombre = document.getElementById("txtNombre");
const msgValNombre = document.getElementById("msgValNombre");

const pwd = document.getElementById("txtPwd");
const msgValPwd = document.getElementById("msgValPwd");

const pwd1 = document.getElementById("txtPwd1");
const msgValPwd1 = document.getElementById("msgValPwd");

const btnEnviar = document.getElementById("btnEnviar");

// Funcion de validacion
function Validar(){
// Input Usuario
let vusuario = usuario.value;
msgValUsuario.innerText ="";
let RegExpUser = /^[A-Z]+([\s]?[A-Za-z])*$/;

// Input Nombre
let vnombre = nombre.value;
msgValNombre.innerText ="";
let RegExpNom = /^[A-Z]+[0-9]+([\s]?[A-Za-z])*$/;


// Input Password

let vpwd = pwd.value;
msgValPwd.innerText ="";
let RegExpPwd = /^[A-Z]{1}[a-z]*[0-9]{1}/;

// Input Password1

let vpwd1 = pwd1.value;
msgValPwd1.innerText ="";
let RegExpPwd1 = /^[A-Z]{1}[a-z]*[0-9]{1}/;



    if(vusuario=="" || !RegExpUser.test(vusuario)){
    msgValUsuario.innerText = "Nombre inválido";
    }
    
    if(vnombre=="" || !RegExpNom.test(vnombre)){
    msgValNombre.innerText = "Nombre inválido";
    }
    
    if(vpwd.length<12 || !RegExpPwd.test(vpwd)){
    msgValPwd.innerText = "Error de contraseña";
    }

    if(vpwd1.length<12 || !RegExpPwd1.test(vpwd)){
    msgValPwd1.innerText = "Error de contraseña";
    }

    if(pwd === pwd1){
        msgValPwd1.innerText = "Son iguales las contraseñas"
    }else{
        msgValPwd1.innerText = "No son iguales las contraseñas"
    }
}

// dvfgd
btnEnviar.onclick = () => Validar();