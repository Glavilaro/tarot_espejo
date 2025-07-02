  const cartas = [
  { nombre: "El Loco", archivo: "el-loco.jpg" },
  { nombre: "El Mago", archivo: "el-mago.jpg" },
  { nombre: "El sumosacerdote", archivo: "el-sumosacerdote.jpg" },
  { nombre: "La Luna", archivo: "la-luna.jpg" },
  { nombre: "El Sol", archivo: "el-sol.jpg" },
  { nombre: "La Muerte", archivo: "la-muerte.jpg" },
  { nombre: "El Mundo", archivo: "el-mundo.jpg" }
];

function tirarCartas() {
  const seleccion = cartas.sort(() => 0.5 - Math.random()).slice(0, 3);
  const contenedor = document.getElementById("tirada");
  contenedor.innerHTML = "";

  seleccion.forEach((carta, index) => {
    const div = document.createElement("div");
    div.className = "carta";
    div.innerHTML = `
      <img src="./img/${carta.archivo}" alt="${carta.nombre}" />
      <h3>${["Pasado", "Presente", "Futuro"][index]}</h3>
      <p><strong>${carta.nombre}</strong></p>
    `;
    contenedor.appendChild(div);
  });
}
