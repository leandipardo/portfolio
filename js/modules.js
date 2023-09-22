const d = document;
import menuSlide from "./menu.js";
import smartphone from "./smartphone.js";
import explicacion from "./explicacion.js";
import time from "./time.js";
import mover from "./mover.js";
import abrirMenuIzq from "./menu_desplegable.js";
import sepia from "./sepia.js";
import darkMode from "./darkmode.js";
import cartelInicio from "./cartelInicio.js";
d.addEventListener("DOMContentLoaded", (e)=>{
    menuSlide(".button-menu",".menu",".ignore",".exe");
    abrirMenuIzq(".menu-desplegable", ".menu-derecho",".ignore2",".exe2");
    explicacion(".button-menu","#texto-ayuda");
    time();
    mover(".movible");
    sepia(".sepia-button");
    darkMode(".darkmode-button");
    cartelInicio();
});
d.addEventListener("mousewheel", (r)=>{
    smartphone(r);
})



