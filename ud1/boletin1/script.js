// Ejercicio 2
function pintar_ruta() {
    console.log("El acceso a la ruta C:\\\\usaurio\\tarda 1'23\", algo considerado \"lento\" en la actialidad");
}

// Ejercicio 3
function pintar_ruta_v2() {
    var substring1 = "El acceso a la ruta C:\\\\usuario\\tarda 1'23\", algo";
    var substring2 = " considerado \"lento\" en la actualidad";
    console.log(substring1 + substring2);
}

// Ejercicio 1
function saludar() {
    var edad = window.prompt("Introduce tu edad");
    if (edad >= 18) {
        console.log("Eres mayor de edad");
    } else {
        console.log("Eres menor de edad");
    }
}

// Ejercicio 4
function muestra_potencia() {
    var num = 2 * Math.pow(10, -9);
    console.log(num);
}

// Ejercicio 5
function muestra_n_en_distintas_bases(num) {
    //Trasnforma el num a binario
    var numDecimal = num.toString(2);
    console.log("El número " + num + " en binario es: " + numDecimal);
}

// Ejercicio 6
function divide_entre_0(num) {
    var resultado = num / 0;
    var resultado = + num;
    console.log("El resultado es: " + resultado);
}

// Ejercicio 7
function divide_entre_0_v2(num) {
    var resultado = num / 0;
    console.log("El resultado es: " + resultado);
}
// Ejercicio 8
function muestra_el_max_number(num) {
    var suma = Number.MAX_VALUE + num;
    console.log("El resultado es: " + suma);
    BigInt(Number.MAX_VALUE);
    console.log("El resultado con BigInt es: " + BigInt(Number.MAX_VALUE) + BigInt(num));
}

// Ejercicio 10
function check_ambito_variable() {
    let prueba = 5;
    console.log("La variable prueba tiene como valor " + prueba);
    {
        var prueba2 = 10;
        console.log("Insisto. La variable prueba tiene como valor " + prueba + " tambien dentro del bloque anidado");
        console.log("Ademas, el bloque inferior alberga la variable prueba2 que vale " + prueba2);
    }
    console.log("Por ultimo, desde el bloque principal, intento acceder al valor de una variable interna: " + prueba2);
}
// Let en ambito de bloque
// Var en ambito de funcion
// Si se declara una variable con var dentro de un bloque, se puede acceder a ella desde fuera del bloque, pero si se declara con let, no se puede acceder a ella desde fuera del bloque.

// Ejercicio 11
function definir_y_mostrar_array() {
    let array = ["Alberto", "Beatriz", "Carlos", "Diana", "Elena"];

    /* for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    } */
    console.table(array);
}

// Ejercicio 12
function contar_y_temporizar() {

    let valor = 0;

    let initTime = new Date();

    for (let i = 0; i < 100000000; i++) {
        valor += 10;
    }

    let endTime = new Date();

    console.log("Valor: ", valor);
    console.log("El algoritmo ha tardado: " + ((endTime - initTime)/1000) + " segundos");
}