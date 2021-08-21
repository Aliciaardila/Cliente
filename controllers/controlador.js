let etiqueta = document.getElementById("boton");
let foto = document.getElementById("foto");
let foto = document.getElementById("foto1");
let foto = document.getElementById("foto2");
let titulo = document.getElementById("titulo");
let titulo = document.getElementById("titulo1");
let titulo = document.getElementById("titulo2");
let audio = document.getElementById("audio");
let audio = document.getElementById("audio1");
let audio = document.getElementById("audio2");

etiqueta.addEventListener("click", cambiar);

function cambiar() {
    foto.src = "img/img2.jpg ";
    audio.src = "audio/cancion3.mp3";
    titulo.textContent = "the moon";
    titulo.classList.add("text-danger");
    titulo.classList.add("display-2");

    console.log(titulo.classList);

}