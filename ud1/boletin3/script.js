// estilo
let colores = ["#FFD1DC", "#AEC6CF", "#77DD77", "#F49AC2", "#FFB347", "#CBAACB", "#FFFACD", "#B0E0E6", "#FF6961", "#C1E1C1"
];

let ejercicios = document.getElementsByClassName("ejercicio");

window.onload = function () {
    for (let i = 0; i < ejercicios.length; i++) {
        let colorAleatorio = Math.random() * colores.length;
        ejercicios[i].style.backgroundColor = colores[Math.floor(colorAleatorio)];
    }
}

// funciones
// Ejercicio 1
function cuenta_cifras() {
    let numero = Number(prompt("Introduce un numero: "));
    let contarCifra = 0;
    if (numero === 0) {
        contarCifra = 1;
    }
    while (numero > 0) {
        numero = Math.floor(numero / 10);
        contarCifra++;
    }
    console.log("El numero de cifras que tiene este numero es: " + contarCifra);
}

// Ejercicio 2
function pinta_triangulo() {
    let numero = Number(prompt("Introduce el numero de puntos: "));
    let triangulo = "";

    for (let i = 0; i < numero; i++) { // si let i = 1 usar lo comentado
        triangulo += "\n";
        /*
        triangulo += " ".repeat(numero - i);
        triangulo += "* ".repeat(i); */
        // Pintamos espacios
        for (let j = 0; j < numero - i; j++) {
            triangulo += " ";
        }
        // Pintamos asteriscos
        for (let k = 0; k < (2 * i - 1); k++) {
            triangulo += "*";
        }
        console.log(triangulo);
    }
}

// Ejercicio 3
function mostrar_menu() {
    var numeros = [];

    do {
        var opt = prompt("Seleciona una opcion: \n a) Introducir nuevo numero. \n b) Calcular maximo. \n c) Calcular minimo \n d) Calcular media. \n e) Salir.");
        switch (opt.toLowerCase()) {
            case 'a':
                introducir_numero();
                console.log("Numeros almacenados: ");
                console.table(numeros);
                break;
            case 'b':
                calcular_maximo(numeros);
                break;
            case 'c':
                calcular_minimo(numeros);
                break;
            case 'd':
                calcular_media(numeros);
                break;
            case 'e':
                salir();
                break;
        }
    } while (opt.toLowerCase() != 'e' && opt != null)

    function introducir_numero(){
        do{
            numeros = Number(prompt("Introduce numero: "));
        }while(numeros != 'a');

    }
}
