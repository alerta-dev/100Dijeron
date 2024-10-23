let rondaActual = 0;
let puntosEquipo1 = 0;
let puntosEquipo2 = 0;
let erroresEquipo1 = "";
let erroresEquipo2 = "";

// Preguntas por rondas
const preguntasRondas = [
  [
    { respuesta: "verga", puntos: 30 },
    { respuesta: "comida", puntos: 20 },
    { respuesta: "a ti bb 7w7", puntos: 10 },
    { respuesta: "makima", puntos: 5 }
  ],
  [
    { respuesta: "Respuesta 1 Ronda 2", puntos: 40 },
    { respuesta: "Respuesta 2 Ronda 2", puntos: 25 },
    { respuesta: "Respuesta 3 Ronda 2", puntos: 15 },
    { respuesta: "Respuesta 4 Ronda 2", puntos: 10 }
  ]
];

// Mostrar las respuestas de la ronda actual (esconderlas al principio)
function mostrarRonda() {
  for (let i = 1; i <= 4; i++) {
    document.getElementById(`respuesta${i}`).textContent = `${i}.............`;
    document.getElementById(`puntos${i}`).textContent = '';
  }
}

// Cambiar de ronda
function cambiarRonda(siguiente = true) {
  if (siguiente) {
    rondaActual = (rondaActual + 1) % preguntasRondas.length;
  } else {
    rondaActual = (rondaActual - 1 + preguntasRondas.length) % preguntasRondas.length;
  }
  resetearPanel();
  mostrarRonda();
}

// Mostrar una respuesta específica al presionar los botones
function mostrarRespuesta(num) {
  const respuesta = preguntasRondas[rondaActual][num - 1];
  document.getElementById(`respuesta${num}`).textContent = respuesta.respuesta;
  document.getElementById(`puntos${num}`).textContent = respuesta.puntos;
}

// Marcar un error para el equipo (y mostrar X debajo de los puntos)
function marcarError(numErrores, equipo) {
  if (equipo === 1) {
    erroresEquipo1 += "X ";
    document.getElementById("errores-equipo1").textContent = `Errores equipo 1: ${erroresEquipo1}`;
  } else {
    erroresEquipo2 += "X ";
    document.getElementById("errores-equipo2").textContent = `Errores equipo 2: ${erroresEquipo2}`;
  }
}

// Sumar puntos a un equipo
function sumarPuntos(equipo) {
  if (equipo === 1) {
    puntosEquipo1 += 10;
    document.getElementById("puntos-equipo1").textContent = `Puntos equipo 1: ${puntosEquipo1}`;
  } else {
    puntosEquipo2 += 10;
    document.getElementById("puntos-equipo2").textContent = `Puntos equipo 2: ${puntosEquipo2}`;
  }
}

// Restar puntos a un equipo
function restarPuntos(equipo) {
  if (equipo === 1) {
    puntosEquipo1 = Math.max(0, puntosEquipo1 - 10);
    document.getElementById("puntos-equipo1").textContent = `Puntos equipo 1: ${puntosEquipo1}`;
  } else {
    puntosEquipo2 = Math.max(0, puntosEquipo2 - 10);
    document.getElementById("puntos-equipo2").textContent = `Puntos equipo 2: ${puntosEquipo2}`;
  }
}

// Resetear el panel
function resetearPanel() {
  for (let i = 1; i <= 4; i++) {
    document.getElementById(`respuesta${i}`).textContent = `${i}.............`;
    document.getElementById(`puntos${i}`).textContent = '';
  }
  erroresEquipo1 = "";
  erroresEquipo2 = "";
  document.getElementById("errores-equipo1").textContent = "Errores equipo 1: ";
  document.getElementById("errores-equipo2").textContent = "Errores equipo 2: ";
}

// Iniciar con la primera ronda (y esconder las respuestas)
mostrarRonda();
