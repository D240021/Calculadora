
const OPERADORES_POSIBLES = new Set(['+', '/', '*', '-']);
const CAMPO_TRABAJO = document.getElementById("campoTrabajo");



function mostrarEnCampoTrabajo(elementoHTML) {
    let operadoresInicialesProhibidos = new Set(['+', '/', '*']);
    let contenidoElementoHTML = elementoHTML.textContent;

    if (this.esCampoTrabajoVacio() && !operadoresInicialesProhibidos.has(contenidoElementoHTML)) {
        CAMPO_TRABAJO.textContent = contenidoElementoHTML;
        return;
    }

    if (existeSimboloAlFinal(CAMPO_TRABAJO.textContent) && OPERADORES_POSIBLES.has(contenidoElementoHTML)) {
        return;
    }

    CAMPO_TRABAJO.textContent += contenidoElementoHTML;
}


function borrarContenido() {
    if (!this.esCampoTrabajoVacio()) {

        CAMPO_TRABAJO.textContent = 0;
    }
}

function esCampoTrabajoVacio() {
    return CAMPO_TRABAJO.textContent == '0';
}

function existeSimboloAlFinal(texto) {
    return OPERADORES_POSIBLES.has(texto.slice(-1));
}

function calcularResultado() {

    let operador = CAMPO_TRABAJO.match("/[+-*/]/")[0];

}