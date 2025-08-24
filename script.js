const buscar = document.querySelector(".buscar")
const boton = document.querySelector(".btn")
const ingrese = document.querySelector(".ingrese")

boton.addEventListener("click", ()=>{
    console.log("click reconocido")
    ingrese.classList.toggle("active") //toggle alterna entre eliminar si ya tiene y añadir si aun no tiene la clase 
    ingrese.focus() //al dar click al boton automaticamente aparece el curso para escribir
})