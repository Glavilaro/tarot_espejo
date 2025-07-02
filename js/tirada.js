import { cartas } from './cartas.js';
import { obtenerInterpretacion } from './interpretacion.js';

export function tirarCartas() {
  const tipoSeleccionado = document.getElementById("tipoTirada").value;
  const contenedor = document.getElementById("tirada");
  contenedor.innerHTML = "";

  const seleccion = cartas.sort(() => 0.5 - Math.random()).slice(0, 3);

  seleccion.forEach((carta, index) => {
    const texto = obtenerInterpretacion(carta.nombre, tipoSeleccionado);

    const div = document.createElement("div");
    div.className = "carta";
    div.innerHTML = `
      <img src="./img/${carta.archivo}" alt="${carta.nombre}" />
      <h3>${["Pasado", "Presente", "Futuro"][index]}</h3>
      <p><strong>${carta.nombre}</strong></p>
      <p>${texto}</p>
    `;
    contenedor.appendChild(div);
  });
}




