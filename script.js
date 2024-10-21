let rondaActual = 0;
let puntosEquipo1 = 0;
let puntosEquipo2 = 0;
let erroresEquipo1 = 0;
let erroresEquipo2 = 0;

const preguntasRondas = [
  [
    { respuesta: "Respuesta 1 Ronda 1", puntos: 30 },
    { respuesta: "Respuesta 2 Ronda 1", puntos: 20 },
    { respuesta: "Respuesta 3 Ronda 1", puntos: 10 },
    { respuesta: "Respuesta 4 Ronda 1", puntos: 5 }
  ],
  [
    { respuesta: "Respuesta 1 Ronda 2", puntos: 40 },
    { respuesta: "Respuesta 2 Ronda 2", puntos: 25 },
    { respuesta: "Respuesta 3 Ronda 2", puntos: 15 },
    { respuesta: "Respuesta 4 Ronda 2", puntos: 10 }
  ]
];

// Mostrar las respuestas de la ronda actual
function mostrarRonda() {
  const respuestas = preguntasRondas[rondaActual];
  respuestas.forEach((item, index) => {
    document.getElementById(`respuesta${index + 1}`).textContent = item.respuesta;
    document.getElementById(`puntos${index + 1}`).textContent = item.puntos;
  });
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

// Mostrar una respuesta específica
function mostrarRespuesta(num) {
  const respuesta = preguntasRondas[rondaActual][num - 1];
  document.getElementById(`respuesta${num}`).textContent = respuesta.respuesta;
  document.getElementById(`puntos${num}`).textContent = respuesta.puntos;
}

// Marcar un error
function marcarError(numErrores) {
  if (numErrores === 1) erroresEquipo1++;
  if (numErrores === 2) erroresEquipo2++;
  if (numErrores === 3) console.log("Error máximo");
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
    document.getElementById(`respuesta${i}`).textContent = '.............';
    document.getElementById(`puntos${i}`).textContent = '';
  }
}

// Iniciar con la primera ronda
mostrarRonda();
