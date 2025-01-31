
const OPERADORES_POSIBLES = new Set(['+', '/', '*','-']);

function sumar(){

    let campoTrabajo = document.getElementById("campoTrabajo");
    campoTrabajo.textContent = 10+1;

}

function mostrarEnCampoTrabajo(elementoHTML) {
    let campoTrabajo = document.getElementById("campoTrabajo");
    let operadoresInicialesProhibidos = new Set(['+', '/', '*']);
    let contenidoElementoHTML = elementoHTML.textContent;

    if (this.esCampoTrabajoVacio() && !operadoresInicialesProhibidos.has(contenidoElementoHTML)) {
        campoTrabajo.textContent = contenidoElementoHTML;
        return;
    }

    if(existeSimboloAlFinal(campoTrabajo.textContent) && OPERADORES_POSIBLES.has(contenidoElementoHTML)){
        return;
    }   
    
    campoTrabajo.textContent += contenidoElementoHTML;
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

function existeSimboloAlFinal(texto) {
    return OPERADORES_POSIBLES.has(texto.slice(-1)); 
}