const arrayUno = [1, 7, 8, 9, 2, 2, 5]

console.log(arrayUno.sort())

const arrayDos = [100, 500, 2, 43, 123, 12335]

console.log(arrayDos.sort((a, b) => {
    return a - b
}))



const arrayTres = [
    {nombre: 'Javier', apellido: 'Alarcon'},
    {nombre: 'Beatriz', apellido: 'Xero'},
    {nombre: 'Alejadro', apellido: 'Torres'},
    {nombre: 'Gabriel', apellido: 'Rojas'},
]

console.log(arrayTres.sort((a, b) => {
    if (a.nombre < b.nombre){
        return -1
    }  
    if (a.nombre > b.nombre){
        return 1
    }
    return 0
})

)


