let resultado = 0


function sumar(producto, iva){
    resultado = producto * iva

}

sumar(Number(prompt('Ingrese el monto')),0.21)

console.log(resultado)


// =====


let edad = prompt('¿Qué edad tienes?')

let welcome = (edad < 18) ?
    function() { alert('Hola!')} :
    function() { alert('Saludos!');}

welcome()


// =====


const calculaArea = function(ancho, alto) {
    const area = ancho * alto
    return area
}

console.log(calculaArea(prompt('Ingrese el ancho'),prompt('Ingrese el alto')))