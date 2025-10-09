function es_bisiesto() {
    let anio = Number(prompt("Introduce el año: "));

    if ((anio % 4 === 0 && anio % 100 !== 0) || anio % 400 === 0) {
        console.log("El año es " + anio + " bisiesto")
    } else {
        console.log("El año " + anio + " no es bisiesto")
    }
}

function calificacion() {
    let nota = Number(prompt("Introduce la nota: "));

    if (isNaN(nota)) {
        console.log("No es un argumento valido")
    } else {
        switch (true) {
            case nota < 5:
                console.log("Suspenso");
                break;
            case nota >= 5 && nota < 6:
                console.log("Susficiente");
                break;
            case nota >= 6 && nota < 7:
                console.log("Bien");
                break;
            case nota >= 7 && nota < 9:
                console.log("Notable");
                break;
            case nota >= 9 && nota <= 10:
                console.log("Sobresaliente");
                break;
            default:
                console.log("No es un argumento valido")
        }
    }
}

function generar_contraseña() {
    let letras = "abcdefghijklmnopqrstuvwxyz";
    let caracteres = "1234567890()/=*#?";
    let contraseña = "";

    let numero_caracteres = Number(prompt("Indica el tamaño de la contraseña: "));

    let es_fuerte = numero_caracteres > 12;

    if (es_fuerte) {
        let conjunto = letras + caracteres;
        for (let i = 0; i < numero_caracteres; i++) {
            let indice = Math.floor(Math.random() * conjunto.length);
            contraseña += conjunto[indice];
        }
        console.log("Contraseña fuerte:", contraseña);
    } else {
        for (let i = 0; i < numero_caracteres; i++) {
            let indice = Math.floor(Math.random() * letras.length);
            contraseña += letras[indice];
        }
        console.log("Contraseña débil:", contraseña);
    }
}

function suma_n_recursiva(){
    
}