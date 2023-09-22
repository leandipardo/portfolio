let d = document;
//Establece modo sepia.
export default function sepia(button){
    d.addEventListener("click", (e)=>{
        if(e.target.matches(button)){
            document.body.classList.toggle("sepia-efect");
        }
    })
}