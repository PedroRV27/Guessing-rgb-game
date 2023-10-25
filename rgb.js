window.onload = function() {
  const displayRGB = document.getElementById("rgb");
  const mensaje = document.getElementById("mensaje");
  const contenedorColores = document.getElementById("colores");
  const botonReset = document.getElementById("reset-boton");
  let colores = generarColoresAleatorios(6);
  let colorCorrecto = Math.floor(Math.random() * 6);
  let jugando = true;

  botonReset.addEventListener("click", jugarDeNuevo);

  const cajasColores = [];

  iniciarJuego();

  function iniciarJuego() {
    jugando = true;
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
            cambiarColores(colores[i]);
            jugando = false;
          } else {
            mensaje.textContent = "Inténtalo de nuevo";
          }
        }
      });
      cajasColores.push(cajaColor);
      contenedorColores.appendChild(cajaColor);
    }
  }

  function jugarDeNuevo() {
    colores = generarColoresAleatorios(6);
    colorCorrecto = Math.floor(Math.random() * 6);
    cambiarColores(colores[colorCorrecto]);
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
    for (let i = 0; i < colores.length; i++) {
      cajasColores[i].style.backgroundColor = color;
    }
  }
};