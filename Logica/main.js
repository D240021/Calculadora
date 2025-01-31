

function sumar(){

    let campoTrabajo = document.getElementById("campoTrabajo");
    campoTrabajo.textContent = 10+1;

}

function mostrarEnCampoTrabajo(elementoHTML){

    let campoTrabajo = document.getElementById("campoTrabajo");

    if(this.esCampoTrabajoVacio()){
        campoTrabajo.textContent = elementoHTML.textContent;
        return;
    }

    campoTrabajo.textContent += elementoHTML.textContent;
}

function borrarContenido(){
    if(!this.esCampoTrabajoVacio()){
        let campoTrabajo = document.getElementById("campoTrabajo");
        campoTrabajo.textContent = 0;
    }
}

function esCampoTrabajoVacio(){
    return document.getElementById("campoTrabajo").textContent == '0';
}