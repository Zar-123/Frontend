
let frutas = [];

document.getElementById("mostrarCantidad").addEventListener("click", () =>{
    let p = document.getElementById("palabra").value;
    document.getElementById("cantidadFinal").textContent = p.length;
});

document.getElementById("mostrarMayus").addEventListener("click", () =>{
    let pM = document.getElementById("palabraMayus").value;
    document.getElementById("palabraFinal").textContent = pM.toUpperCase();
});

document.getElementById("mostrarFruta").addEventListener("click", () =>{
    let f = document.getElementById("fruta").value.toLowerCase();
    frutas.push(f);
    document.getElementById("listaFruta").textContent = frutas.join(", ");;

    let imagen = document.getElementById("imgFrutas");

    if(f === "manzana"){
        imagen.src = "../img2/manzana.jpg"; 
    }else if(f === "pera"){
        imagen.src = "../img2/pera.jpg";
    }else if(f === "naranja"){
        imagen.src = "../img2/naranja.jpg";
    }else{
        imagen.src = "../img2/blanco.jpg";
    }

    /*if(f == "manzana"){
        document.body.style.backgroundImage = "img/manzana.jpg";
    }else if(f == "pera"){
        document.body.style.backgroundImage = "img/pera.jpg";
    }else if(f == "naranja"){
        document.body.style.backgroundImage = "img/naranja.jpg"
    }else{
        document.body.style.backgroundImage = "";
    }*/
});
