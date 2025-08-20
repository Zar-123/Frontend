colores = ["red", "green", "blue" ];
n = 0;
let resultado;

document.getElementById("cambiarColor").addEventListener("click", () =>{ 
    document.body.style.backgroundColor = colores[n];
    n = (n+1) % colores.length;
});

document.getElementById("mostrarNombre").addEventListener("click", () => {
    let nombre = document.getElementById("nombre").value;

    document.getElementById("nombreMostrado").textContent = nombre;
});

document.getElementById("cambiarImagen").addEventListener("click", () =>{
    imagen = document.getElementById("img");

    if(imagen.src.includes("img/esqleto2.webp")){
        imagen.src = "img/walter.jpg"; 
    } else if(imagen.src.includes("img/walter.jpg")){
        imagen.src = "img/gifesqleto.gif";
    } else{
        imagen.src = "img/esqleto2.webp";
    }
});

document.getElementById("suma").addEventListener("click", () =>{
    let n1 = parseInt(document.getElementById("numero1").value);
    let n2 = parseInt(document.getElementById("numero2").value);

    resultado = n1 + n2;
    document.getElementById("Resultado").textContent = resultado

})

document.getElementById("resta").addEventListener("click", () =>{
    let n1 = parseInt(document.getElementById("numero1").value);
    let n2 = parseInt(document.getElementById("numero2").value);

    resultado = n1 - n2;
    document.getElementById("Resultado").textContent = resultado

})

document.getElementById("multiplicacion").addEventListener("click", () =>{
    let n1 = parseInt(document.getElementById("numero1").value);
    let n2 = parseInt(document.getElementById("numero2").value);

    resultado = n1 * n2;
    document.getElementById("Resultado").textContent = resultado

})

document.getElementById("division").addEventListener("click", () =>{
    let n1 = parseInt(document.getElementById("numero1").value);
    let n2 = parseInt(document.getElementById("numero2").value);

    resultado = n1 / n2;
    document.getElementById("Resultado").textContent = resultado

})

