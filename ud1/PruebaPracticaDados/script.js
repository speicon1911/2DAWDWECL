// Constantes
const CARAS = 6;
const LIMIT = 3;

// Variables globales
let nombre;
let edad;
let activaJuego = false;
let sumaTotal = 0;
let cuentaTiradas = 0;
let max = 0;
let min = Infinity;
let f_inicio = null;
let f_fin = null;

// Funciones
function iniciar_juego() {
    console.log("Se ha iniciado el juego");
    nombre = prompt("Introduce tu nombre:");
    edad = Number(prompt("Introduce tu edad:"));
    f_inicio = new Date();
    if (nombre && edad.valueOf(Number)) {
        activaJuego = true;
    } else {
        return activaJuego;
    }
}

function lanzar_dados() {
    var sumaPuntos = 0;

    if (activaJuego === true) {
        console.log("Lanzando dados...");
        do {
            var dado1 = Math.floor(Math.random() * CARAS) + 1;
            // var dado2 = dado1;
            var dado2 = Math.floor(Math.random() * CARAS) + 1;
            sumaTotal = dado1 + dado2;
            sumaPuntos += sumaTotal;
            cuentaTiradas++;

            console.log("Primer dado: " + dado1);
            console.log("Segundo dado: " + dado2);
            console.log("El jugador " + nombre + " ha obtenido " + sumaPuntos + " en esta tirada.");
            console.log("Llevas: " + cuentaTiradas + " tiradas");

        } while (dado1 === dado2 && cuentaTiradas <= LIMIT);
        if (cuentaTiradas > LIMIT) {
            sumaTotal = 0;
            console.log("Has llegado a mas de 3 tiradas por lo que se reinicia tu progreso")
            sumaPuntos = 0;
            console.log("Puntuacion: " + sumaTotal);
        }

    } else {
        console.error("Debes iniciar el juego primero");
    }

    // Actualizamos estadistica
    if (sumaPuntos > max) {
        max = sumaPuntos;
    }
    if (sumaPuntos < min) {
        min = sumaPuntos;
    }

}

function mostrar_estadistica() {
    console.log("Se ha tirado " + cuentaTiradas + " veces");
    console.log("El valor minimo obtenido es " + min);
    console.log("El valor maximo obtenido es " + max);
    console.log("La puntuacion media por tirada es " + (sumaTotal / cuentaTiradas).toFixed(2));

}

function salir() {
    activaJuego = false;
    f_fin = new Date();
    console.log("Fin del juego. Has estado jugando " + ((f_fin - f_inicio)/1000) + " segundos");
}
