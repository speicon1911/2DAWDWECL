let colores = ["#FFD1DC", "#AEC6CF", "#77DD77", "#F49AC2", "#FFB347", "#CBAACB", "#FFFACD", "#B0E0E6", "#FF6961", "#C1E1C1"
];

let ejercicios = document.getElementsByClassName("ejercicio");

window.onload = function () {
    for (let i = 0; i < ejercicios.length; i++) {
        let colorAleatorio = Math.random() * colores.length;
        ejercicios[i].style.backgroundColor = colores[Math.floor(colorAleatorio)];
    }
}

function calcular_fibonacci() {
    let num = Number(prompt("Introduce un numero"));
    console.log("El valor fib(" + num + ") es: " + fibonacci(num));
}
function fibonacci(num) {
    let resultado;
    // Comprobamos los casos base
    if (num === 0) {
        resultado = 0;
    } else if (num === 1) {
        resultado = 1;
    } else {
        // Aqui esta la llamda recursiva
        resultado = fibonacci(num - 1) + fibonacci(num - 2);
    }
    return resultado;
}

function calcular_factorial(isRec) {
    let num = Number(prompt("Introduce un numero"));
    let resultado;
    if (isRec) {
        resultado = factorial_recursiva(num);
    } else {
        resultado = factorial_tradicional(num);
    }
    console.log("El valor fact(" + num + ") es: " + resultado);
}

function factorial_recursiva(num) {
    let resultado;
    if (num === 1) {
        resultado = 1;
    } else {
        resultado = num * factorial_recursiva(num - 1);
    }
    return resultado;
}

function factorial_tradicional(num) {
    let factorial = 1;
    for (let i = 1; i <= num; i++) {
        factorial *= i;
    }
    return factorial;
}
