
window.onload = function() {
  const displayRGB = document.getElementById("rgb");
  const mensaje = document.getElementById("mensaje");
  const contenedorColores = document.getElementById("colores");
  const botonReset = document.getElementById("reset-boton");
  const botonFacil = document.getElementById("facil-boton");
  const botonDificil = document.getElementById("dificil-boton");
  let jugando = true;
  let dificultadFacil = false;
  let numOpciones = 6; 

  botonReset.addEventListener("click", jugarDeNuevo);
  botonFacil.addEventListener("click", function() {
    cambiarDificultad(true);
  });
  botonDificil.addEventListener("click", function() {
    cambiarDificultad(false);
  });

  const cajasColores = [];

  cambiarDificultad(false); 

  function cambiarDificultad(facil) {
    dificultadFacil = facil;
    numOpciones = dificultadFacil ? 3 : 6;
    jugarDeNuevo();
  }

  function iniciarJuego() {
    jugando = true;
    const colores = generarColoresAleatorios(numOpciones);
    const colorCorrecto = Math.floor(Math.random() * colores.length);

    displayRGB.textContent = colores[colorCorrecto];
    mensaje.textContent = "";

    contenedorColores.innerHTML = "";

    for (let i = 0; i < colores.length; i++) {
      const cajaColor = document.createElement("div");
      cajaColor.classList.add("huecos");
      cajaColor.style.backgroundColor = colores[i];
      cajaColor.addEventListener("click", function(e) {
        if (jugando) {
          if (e.target.style.backgroundColor === colores[colorCorrecto]) {
            mensaje.textContent = "Correcto";
            cambiarColores(colores[colorCorrecto]);
            jugando = false;
            selec.forEach(dentro => {
              dentro.style.backgroundColor=colorCorrecto;
          })
          } else {
            mensaje.textContent = "Inténtalo de nuevo";
            event.target.style.backgroundColor="rgb(35,35,35)"
          }
        }
      });
      cajasColores.push(cajaColor);
      contenedorColores.appendChild(cajaColor);
    }
  }

  function jugarDeNuevo() {
    cajasColores.length = 0;
    iniciarJuego();
  }

  function generarColoresAleatorios(cantidad) {
    const colores = [];
    for (let i = 0; i < cantidad; i++) {
      const rojo = Math.floor(Math.random() * 256);
      const verde = Math.floor(Math.random() * 256);
      const azul = Math.floor(Math.random() * 256);
      colores.push(`rgb(${rojo}, ${verde}, ${azul})`);
    }
    return colores;
  }

  function cambiarColores(color) {
    for (let i = 0; i < cajasColores.length; i++) {
      cajasColores[i].style.backgroundColor = color;
    }
  }
};