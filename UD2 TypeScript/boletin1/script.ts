// Ejercicio 1
// Realiza un programa que haciendo uso del objeto DATE, crees una variable para saludar al usuario con un alerta tras abrir la aplicación indicando la hora y la fecha actual. Haz también que se muestre por consola una hora posterior y una hora anterior.
function ej1(): void {
    // No existe date primitivo
    let fecha: Date = new Date();
    console.log("Hoy es: " + fecha.getDate() + "/" + (fecha.getMonth() + 1) + "/" + fecha.getFullYear());
    console.log("Son las: " + fecha.getHours() + ":" + fecha.getMinutes() + ":" + fecha.getSeconds())

    console.log("Hora posterior: " + (fecha.getHours() + 1) + ":" + fecha.getMinutes() + ":" + fecha.getSeconds());
    console.log("Hora anterior: " + (fecha.getHours() - 1) + ":" + fecha.getMinutes() + ":" + fecha.getSeconds());
}

/* Crea una función que haciendo uso de las expresiones regulares permita validar el formato de una dirección de correo electrónico. Recuerda que estas son las normas que lo validan:
// a. El carácter @ es obligatorio y separa la primera y segunda parte del correo
// b. La primera parte acepta letras minúsculas, mayúsculas, caracteres numéricos y los siguientes carácteres. #*+&’!%@?{^}”
// c. La primera parte acepta todos los caracteres punto (.) que se deseen pero no puede ser ni el primer ni el último carácter ni tampoco pueden ir seguidos.
d. La segunda parte acepta puntos, dígitos, guiones y letras.
*/
// Ejercicio 2
function validar_correo(): void {
    //let expReg: RegExp = /lo_que_sea/
    let expReg: RegExp = new RegExp("lo_que_sea");

    // Primero nos aseguramos que no es nulo (porque no puedo alamcenar un nulo en un HTMLInputElement)
    if (document.getElementById("email") != null) {
        let mensajeOK = document.createElement('span');
        let email = document.getElementById("email") as HTMLInputElement;
        if (expReg.test(email.value)) {
            mensajeOK.textContent = "Email correcto";
        }else{
            mensajeOK.textContent = "Email incorrecto"
        }
    }
}
