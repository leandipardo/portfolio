const d = document;
class ventanaWindows {
    constructor(id, alto, ancho, fullscreen){
        this.id = id;
        this.alto = alto;
        this.ancho = ancho;
        this.fullscreen = false;
    }
};
let a = new ventanaWindows("portfolio", 100, 50);
let $minimize = d.querySelector(".minimize"),
$maximize = d.querySelector(".maximize"),
$cerrar = d.querySelector(".cerrar"), 
$ventanaCuerpo = d.querySelector(".ventana-cuerpo");
console.log(a);
console.log(a.ancho = 3, a.ancho);




export default function comportamientoVentanas(w){
    d.addEventListener("click", (e)=>{
        if(e.target.matches(w) || e.target.matches(`${w} *`)){
            d.appendChild
        }else{
        }
    })
}