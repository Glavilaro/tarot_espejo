const cartas = [
    { nombre: "El Loco", archivo: "el-loco.jpg" },
    { nombre: "El Mago", archivo: "el-mago.jpg" },
    { nombre: "El sumosacerdote", archivo: "el-sumosacerdote.jpg" },
    { nombre: "La Luna", archivo: "la-luna.jpg" },
    { nombre: "El Sol", archivo: "el-sol.jpg" },
    { nombre: "La Muerte", archivo: "la-muerte.jpg" },
    { nombre: "El Mundo", archivo: "el-mundo.jpg" },
    { nombre: "El carro", archivo: "el-carro.jpg" },
    { nombre: "El ermtaño", archivo: "el-ermitaño.jpg" },
    { nombre: "la sacerdotisa", archivo: "la-sacerdotisa.jpg" },
    { nombre: "La estrella", archivo: "la-estrella.jpg" },
    { nombre: "la torre", archivo: "la-torre.jpg" },
    { nombre: "La emperatriz", archivo: "la-emperatriz.jpg" },
    { nombre: "la rueda", archivo: "la-rueda.jpg" },
    { nombre: "La templanza", archivo: "la-templanza.jpg" },
    { nombre: "la justicia", archivo: "la-justicia.jpg" },
    { nombre: "los amantes", archivo: "los-amantes.jpg" },
    { nombre: "el emperador", archivo: "el-emperador.jpg" },
    { nombre: "La fuerza", archivo: "la-fuerza.jpg" },
    { nombre: "el colgado", archivo: "el-colgado.jpg" },
    { nombre: "el diablo", archivo: "el-diablo.jpg" },
    { nombre: "el juicio", archivo: "el-juicio.jpg" }
    
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
