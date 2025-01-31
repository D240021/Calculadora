

function sumar(){

    let campoTrabajo = document.getElementById("campoTrabajo");
    campoTrabajo.textContent = 10+1;

}

function mostrarEnCampoTrabajo(elementoHTML){

    let campoTrabajo = document.getElementById("campoTrabajo");
    campoTrabajo.textContent = elementoHTML.textContent;
}

function borrarContenido(){
    let campoTrabajo = document.getElementById("campoTrabajo");
    campoTrabajo.textContent = 0;
}