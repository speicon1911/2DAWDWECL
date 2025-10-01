let nombre;
var edad;
var activaJuego = false;

function iniciar_juego() {
    console.log("Se ha iniciado el juego");
    nombre = prompt("Introduce tu nombre:");
    edad = Number(prompt("Introduce tu edad:"));
    if (nombre && edad.valueOf(Number)) {
        activaJuego = true;
    } else {
        return activaJuego;
    }
}

function lanzar_dados() {
    var cuentaTiradas = 0;
    var sumaPuntos = 0;
    const maxTiradas = 3;

    if (activaJuego === true) {
        console.log("Lanzando dados...");
        do {
            var dado1 = Math.floor(Math.random() * 6) + 1;
            // var dado2 = dado1;
            var dado2 = Math.floor(Math.random() * 6) + 1;
            var sumaTotal = dado1 + dado2;
            sumaPuntos += sumaTotal;
            cuentaTiradas++;

            console.log("Primer dado: " + dado1);
            console.log("Segundo dado: " + dado2);
            console.log("El jugador " + nombre + " ha obtenido " + sumaPuntos + " en esta tirada.");
            console.log("Llevas: " + cuentaTiradas + " tiradas");

        } while (dado1 === dado2 && cuentaTiradas <= maxTiradas);
        if (cuentaTiradas > maxTiradas) {
            sumaTotal = 0;
            console.log("Has llegado a mas de 3 tiradas por lo que se reinicia tu progreso")
            sumaPuntos = 0;
            console.log("Puntuacion: " + sumaTotal);
        }

    } else {
        console.error("Debes iniciar el juego primero");
    }
}

function mostrar_estadistica(){
    console.log("Se ha tirado " + cuentaTiradas + " veces");
}
