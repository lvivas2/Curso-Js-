let baseDatos = []

function agregar() {
    class Persona {
        constructor(name, mail, phone, location, menssage) {
            this.name = name
            this.mail = mail
            this.phone = phone
            this.location = location
            this.menssage = menssage
        }
    }


    let nameCapturar = document.getElementById("fullname").value
    let mailCapturar = document.getElementById("email").value
    let phoneCapturar = document.getElementById("phone").value
    let locationCapturar = document.getElementById("location").value
    let menssageCapturar = document.getElementById("menssage").value

    nuevoSujeto = new Persona(nameCapturar, mailCapturar, phoneCapturar, locationCapturar, menssageCapturar)
    console.log(nuevoSujeto)


    baseDatos.push(nuevoSujeto)
    console.log(baseDatos)
}