const d = document,
b = d.querySelector("body");
let $zindex = 2,
id = 0,
$va = d.querySelector(".ventana-abierta"),
$middleMenuConteiner=d.querySelector(".middle-menu-conteiner");
import mover from "./mover.js";


export default function comportamientoVentanas(p,va){
    d.addEventListener("click", (e)=>{
        if(e.target.matches(p) || e.target.matches(`${p} *`)){
            let $section = d.createElement("section"),
            $div = d.createElement("div"),
            $input = d.createElement("input"),
            $input2 = d.createElement("input"),
            $input3 = d.createElement("input"),
            $div2 =d.createElement("div");
            $section.setAttribute("identificador",`${id}`);
            $section.classList.add("ventana-abierta");
            $section.classList.add("movible");
            $div.classList.add("window-buttons");
            $div2.classList.add("ventana-cuerpo");
            $input.classList.add("minimize");
            $input.setAttribute("name","minimizar");
            $input.setAttribute("type","button");
            $input.setAttribute("value","‒");
            $input2.classList.add("maximize");
            $input2.setAttribute("name","maximizar");
            $input2.setAttribute("type","button");
            $input2.setAttribute("value","◻");
            $input3.classList.add("cerrar");
            $input3.setAttribute("name","cerrar");
            $input3.setAttribute("type","button");
            $input3.setAttribute("value","✕");
            b.appendChild($section);
            $section.appendChild($div); 
            $section.appendChild($div2);
            $div.appendChild($input);
            $div.appendChild($input2);
            $div.appendChild($input3);
            mover(".movible");
            let $iconimg = d.createElement("img");
            $iconimg.setAttribute("identificador",`${id}`);
            $iconimg.classList.add("button-menu");
            $iconimg.setAttribute("src","/portfolio/assets/img/pdf icon.svg");
            $iconimg.setAttribute("alt","Icono de pdf");
            id++;
            $middleMenuConteiner.appendChild($iconimg);
        }
        if(e.target.matches(va)){

        }
    })
}