const d = document;
//Detecta boton, que modo esta y cambia video a respectivo modo.
export default function darkMode(btn){
let $themeBtn = d.querySelector(btn),
$selectors = d.querySelector("[data-dark]"),
$video = d.querySelector(".background-video");
let ubiVideo = `/portfolio/assets/video/wallpaper light mode.mp4`;
d.addEventListener("click", (e)=>{
    if(e.target.matches(btn)){
        $selectors.classList.toggle("classLight");
        $video.setAttribute("src",`${ubiVideo}`)
        if(ubiVideo === `/portfolio/assets/video/wallpaper light mode.mp4`){
            ubiVideo = `/portfolio/assets/video/wallpaper dark mode.mp4`;
            
        }else if(ubiVideo === `/portfolio/assets/video/wallpaper dark mode.mp4`){
            ubiVideo = `/portfolio/assets/video/wallpaper light mode.mp4`;
        }
    }
})
}