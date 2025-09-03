
import './App.css'
import Saludo from './Saludo'

function App() {
    let frutas = [];

    function mostrarColor(){
      let color = document.getElementById("nombreColor").value.toLowerCase();
      if(color === "rojo"){
        document.body.style.backgroundColor = "red";
      } else if (color === "azul"){
        document.body.style.backgroundColor = "blue";
      } else if (color === "verde"){
        document.body.style.backgroundColor = "green";
      } else if (color === "naranja"){
        document.body.style.backgroundColor = "#F49112";
      }else{
        alert("Este color no esta definido");
      }
    }

    function mostrarFruta(){
      let f = document.getElementById("fruta").value.toLowerCase();
      frutas.push(f);
      document.getElementById("listaFruta").textContent = frutas.join(", ");;

      let imagen = document.getElementById("imgFrutas");

      if(f === "manzana"){
        imagen.src = "../img/manzana.jpg"; 
      }else if(f === "pera"){
        imagen.src = "../img/pera.jpg";
      }else if(f === "naranja"){
        imagen.src = "../img/naranja.jpg";
      }else{
        imagen.src = "../img/blanco.jpg";
      }
    }

    function cambiarFondo(){
      body.style.bacgroundImage = 'url'
    }

  return (
    <main>
      <h1>Hola mundo</h1>
      <Saludo/>
        <h1>REACT</h1>

        <h2>Cambio de fondo de pantallas ( Rojo - Azul - Verde- Naranja)</h2>

        <h3>Ingrese cual de los 3 colores quiere ingresar</h3>
        <input type="text" id="nombreColor"></input>
        <button onClick={mostrarColor}>Mostrar color</button>
        <p></p>
      <h3>Ingrese una fruta en la lista</h3>
      <input type="text"  id="fruta"></input>
      <button onClick={mostrarFruta}> Mostrar fruta</button>
      <p id="listaFruta"></p>
      <br></br>
      <img src="../img/blanco.jpg" alt="" id="imgFrutas" width="200" height="200"></img>

      <button onClick={cambiarFondo}></button>
        

    </main>
  )
}

export default App
