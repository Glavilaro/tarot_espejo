import { tirarCartas } from './tirada.js';
import { mostrarDescripcion } from './interpretacion.js';

document.getElementById("botonTirar").addEventListener("click", tirarCartas);
document.getElementById("tipoTirada").addEventListener("change", (e) => {
    mostrarDescripcion(e.target.value);
});


