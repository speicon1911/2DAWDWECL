// Ejercicio 2
function pintar_ruta() {
    console.log("El acceso a la ruta C:\\\\usaurio\\tarda 1'23\", algo considerado \"lento\" en la actialidad");
}

// Ejercicio 3
function pintar_ruta_v2(){
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
function muestra_potencia(){
    var num = 2* Math.pow(10,-9);
    console.log(num);
}