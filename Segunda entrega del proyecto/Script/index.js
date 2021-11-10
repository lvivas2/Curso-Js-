// eventos de scroll

window.addEventListener('scroll', function(){
    let header = this.document.querySelector('header');
    header.classList.toggle('abajo', window.scrollY > 0)
});

const reservaButton = document.getElementById("reservaButton");
const cancha = document.getElementById("cancha");
const canchaUno = document.getElementById("canchaUno");
const canchaDos = document.getElementById("canchaDos");
const volverCanchas = document.getElementById("volverCanchas")
const formulario = document.getElementById("formulario")

reservaButton.addEventListener("click", function(){
    cancha.classList.add("reserva");
    canchaUno.classList.add("reserva");
    canchaDos.classList.add("reserva");

  
});

volverCanchas.addEventListener("click", function(){

    formulario.classList.add ("removerFormulario")
    if(volverCanchas.classList("removerFormulario")){
        cancha.classList.remove("reserva")
        canchaUno.classList.remove("reserva");
    canchaDos.classList.remove("reserva");
    }
    

}); 

