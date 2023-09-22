const d = document,
$body = d.querySelector(".classDark");
let firstTime = true,
$div = document.createElement("div");
export default function cartelInicio(){
    $div.classList.add("parrafo-inicio");
    $div.innerHTML =`
    <p>Bienvenido.</p>`;
    $body.appendChild($div);
    setTimeout(() => {
        $div.style.opacity=1;
    }, 1);
    
    d.addEventListener("click",(e)=>{
        if (firstTime === true){
            $div.style.opacity=0;
            let $video = d.querySelector(".background-video");
            document.documentElement.requestFullscreen();
            $video.setAttribute("src",`/portfolio/assets/video/wallpaper dark mode.mp4`);
            firstTime = false;
            setTimeout(() => {
                $div.classList.toggle("parrafo-inicio");
            }, 2000);
        }
    })
}