// window.addEventListener('load', function(){ //load espera que cargue todo el doc y DOMContentLoaded solo el HTML
// console.log("de papels")
// });
//ESTRUCTURA : variables con querys, listeners, acciones y funciones
const datos= {
    nombre:'',
    email:'',
    mensaje:''
}
const formulario=document.querySelector('.formulario');
const nombre=document.querySelector('#nombre');
const email=document.querySelector('#email');
const mensaje=document.querySelector('#mensaje');

nombre.addEventListener('input',leerTexto)
email.addEventListener('input', leerTexto);
mensaje.addEventListener('input', leerTexto);

formulario.addEventListener('submit', function(evento){
    evento.preventDefault();
    const{nombre, email, mensaje}=datos;
    if (nombre===''||email===''|| mensaje==='') {
        mostrarError('Todos los campos son obligatorios');
        return; //no se ejecuta lo siguiente por este returns
    }
    //alerta de enviado correctamente
    mostrarMensaje('Mensaje enviado correctamente');
    console.log('Enviando Formulario');
});
function mostrarMensaje(){
    const alerta =document.createElement('P');
    alerta.textContent=mensaje;
    alerta.classList.add('correcto');
    formulario.appendChild(alerta);
    setTimeout(()=>{
        alerta.remove();
    }, 10000)//
}
function leerTexto(e){
    datos[e.target.id]=e.target.value;//intruduce en cada campo el valor requerido y asi pone en cada uno mas ordenado el codigo
    console.log(datos);
}
function mostrarError(mensaje){
    const error= document.createElement('P');
    error.textContent=mensaje;
    error.classList.add('error');
    console.log(error);
    formulario.appendChild( error);

    setTimeout(()=>{
        error.remove();
    }, 10000)//
}


//                      EN UN FORMULARIO USAR SUBMIT EN OTROS USAR CLICK
// const btnEnviar=document.querySelector('.boton--primario')
// btnEnviar.addEventListener('click', function(evento){
//     evento.preventDefault();//basico para validd formulario

//     console.log("enviar formulario");
// })


