
const OPERADORES_POSIBLES = new Set(['+', '/', '*', '-']);
const CAMPO_TRABAJO = document.getElementById("campoTrabajo");
const CAMPO_OPERACION = document.getElementById("operacion");


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
        CAMPO_OPERACION.textContent = '';
    }
}

function esCampoTrabajoVacio() {
    return CAMPO_TRABAJO.textContent == '0';
}

function existeSimboloAlFinal(texto) {
    return OPERADORES_POSIBLES.has(texto.slice(-1));
}

function calcularResultado() {
    try {
        let expresion = CAMPO_TRABAJO.textContent;
        let resultado = Function(`"use strict"; return (${expresion})`)();
        CAMPO_OPERACION.textContent = expresion;
        CAMPO_TRABAJO.textContent = resultado;
    } catch (error) {
        CAMPO_TRABAJO.textContent = "Error";
    }
}