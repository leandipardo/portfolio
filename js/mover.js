const d = document;
//funcion creada por marta para mover ventanas.
export default function mover(caja) {
    let inter;
    const element = d.querySelectorAll(caja);
    const moveMouse = (e) => {
            element.forEach(el => { 
            el.dataset.mouseX = e.clientX;
            el.dataset.mouseY = e.clientY;
        });
    }

    
    d.addEventListener("mousemove", moveMouse);
    
    
    d.addEventListener("mousedown", (e) => {
        clearInterval(inter);
        if (e.target.matches(caja)) {
            let objeto = e.target;
            let correccion = {
                x: objeto.dataset.mouseX,
                y: objeto.dataset.mouseY,
                oldPosX: 0,
                oldPosY: 0
            };
            if (objeto.dataset.transformX !== undefined) {
                correccion.oldPosX = parseInt(objeto.dataset.transformX);
                correccion.oldPosY = parseInt(objeto.dataset.transformY);
            }
            
            inter = setInterval(() => {
                objeto.dataset.transformX = correccion.oldPosX + (objeto.dataset.mouseX - correccion.x);
                objeto.dataset.transformY = correccion.oldPosY + (objeto.dataset.mouseY - correccion.y);
                objeto.setAttribute("style", `transform: translate(${objeto.dataset.transformX}px, ${objeto.dataset.transformY}px)`);
            }, Infinity);
        }
    });
    d.addEventListener("mouseup", e => {
        clearInterval(inter);
    });

    // ---------------------touch screen-----------------------
    
    const moveTouch = (e) => {
        element.forEach(el => { 
            el.dataset.mouseX = e.touches[0].clientX;
            el.dataset.mouseY = e.touches[0].clientY;
        });
    }
    
    d.addEventListener("touchmove", moveTouch);
    d.addEventListener("touchstart", (e) => {
        clearInterval(inter);
        element.forEach(el => {
            if (el.matches(caja)) {
                el.dataset.mouseX = e.touches[0].clientX;
                el.dataset.mouseY = e.touches[0].clientY;
            }
        });
        if (e.target.matches(caja)) {
            let objeto = e.target;
            let correccion = {
                x: (objeto.dataset.mouseX),
                y: (objeto.dataset.mouseY),
                oldPosX: 0,
                oldPosY: 0
            };
            if (objeto.dataset.transformX !== undefined) {
                correccion.oldPosX = parseInt(objeto.dataset.transformX);
                correccion.oldPosY = parseInt(objeto.dataset.transformY);
            }
                inter = setInterval(() => {
                    objeto.dataset.transformX = correccion.oldPosX + (objeto.dataset.mouseX - correccion.x);
                    objeto.dataset.transformY = correccion.oldPosY + (objeto.dataset.mouseY - correccion.y);
                    console.log(correccion.x, correccion.y);
                    objeto.setAttribute("style", `transform: translate(${objeto.dataset.transformX}px, ${objeto.dataset.transformY}px)`);
                }, Infinity);
                
            }
    });
    d.addEventListener("touchend", e => {
            clearInterval(inter);
    });



}