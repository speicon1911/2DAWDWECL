let colores = ["#FFD1DC", "#AEC6CF", "#77DD77", "#F49AC2", "#FFB347", "#CBAACB", "#FFFACD", "#B0E0E6", "#FF6961", "#C1E1C1"
];

let ejercicios = document.getElementsByClassName("ejercicio");

window.onload = function() {
    for(let i = 0; i = ejercicios.length; i++){
        let colorAleatorio = Math.random() * colores.length;
        ejercicios[i].style.backgroundColor = colores[Math.floor.colorAleatorio];
    }
}