
const compra = {
    nombre: "Equipo de sonido",
    precio: 300,
    disponible: true,
    mostrarInfo: function(){
        console.log(`El producto: ${this.nombre} Tiene un precio de: ${this.precio}`)
    }
}

compra.mostrarInfo()



//Objetos literal

const producto = {
    nombre: "Lenovo ThinkPad",
    precio: 100,
    disponible: true
}
console.log(producto)

//Objeto Constructor 
function Producto(nombre, precio) {
    this.nombre = nombre
    this.precio = precio
    this.disponible = true
}

const productoII = new Producto('Pc Gamer', 500)
console.log(productoII)

const productoIII = new Producto('iMac',100)
console.log(productoIII)


// Objeto keys valus entries

const carrito = {
    nombre: "Tv 30 pulgadas",
    precio: 500,
    disponible: true
}
console.log(Object.keys(carrito)) 

console.log(Object.values(carrito))

console.log(Object.entries(carrito))