

let nombre = prompt('Ingrese su nombre') 
let apellido = prompt('Ingrese su apellido') 


let nombreCompleto = nombre + " " + apellido + " " + "Estudiante de Coder"

console.log(nombreCompleto)

const añoActual = 2021

let año = prompt('Ingrese su año de nacimiento')

año = Number( año )

let edad = añoActual - año 

console.log("Edad:" + edad)

if ( edad >= 18 && edad <= 60){
    alert('Usted puede pasar')
} else{
    alert('Usted no puede pasar')
}





