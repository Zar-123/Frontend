function Saludo() {

    function saludarboton(){
       alert("HOLA!") 
    }

  return (
    <>
      <img src="../img/saludo.gif" alt="" /> <br />
      <button onClick={saludarboton}>Boton de saludo</button>
    </>
  )
}

export default Saludo
