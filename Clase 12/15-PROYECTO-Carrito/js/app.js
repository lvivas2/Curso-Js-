//Variables
 const carrito = document.querySelector('#carrito');
 const contenedorCarrito = document.querySelector('#lista-carrito tbody');
 const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
 const listaCursos = document.querySelector('#lista-cursos');
 let articulosCarrito = [];

 cargarEventListeners();
 function cargarEventListeners(){
     //cuando agregas un curso presionando "Agregar al carrrito"
     listaCursos.addEventListener('click', agregarCurso);

     //Elimina curso del carrito

     carrito.addEventListener('click', eliminarCurso);


     //Vaciar el carrito
     vaciarCarritoBtn.addEventListener('click', () => {
         articulosCarrito = []; //reiniciamos el arreglo
         
         limpiarHTML(); //Eliminamos todo el HTML
     })
 }

 //Funciones

 function agregarCurso(e) {
    //  el   e.preventDefault previene la accion de ir al enlace predeterminado en las etiquetas a href:"#"
     e.preventDefault();

     if(e.target.classList.contains('agregar-carrito')){
         const cursoSeleccionado = e.target.parentElement.parentElement;
         leerDatosCursos(cursoSeleccionado);
         
     }
 }

 //Elimina un curso de carrito

 function eliminarCurso(e){

     if(e.target.classList.contains('borrar-curso')){
         const cursoId = e.target.getAttribute('data-id');

         //Elimina del arreglo del articuloCarrito por el data-id

         articulosCarrito = articulosCarrito.filter( curso => curso.id !== cursoId);

         carritoHTML();
     }
 }



 //Lee el contenido del HTML al que le dimos click y extrae la información del curso


 function leerDatosCursos(curso){
    console.log(curso);

    // Crear un objeto con el contenido del curso actual
    const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),
        cantidad: 1
    }

    


    //Revisar si un elemento ya existe en el carrito 

    const existe = articulosCarrito.some( curso => curso.id === infoCurso.id );
    if(existe){
        //actualizamos la cantidad
        const cursos = articulosCarrito.map( curso => {
            if( curso.id === infoCurso.id) {
                curso.cantidad++;
                return curso; //retorna el objero actualizado

            } else {
                return curso; //retorna los objeros que no son los duplicados
            }
        });
        articulosCarrito = [...cursos];
    } else {
        //Agrega elemento al arreglo de carrito
        //el ...articulosCarrito es para tomar una copia del carrito 
        articulosCarrito = [...articulosCarrito, infoCurso];
    }


    // Agregar elementos al arreglo del carrito

    console.log(articulosCarrito);

    carritoHTML();
 }



 //Muestra el Carrito de compras en el HTML

 function carritoHTML(){

    //Limpiar el HTML
    limpiarHTML();

    articulosCarrito.forEach(curso => {
        const row = document.createElement('tr');
        const {imagen, titulo, precio, cantidad} = curso;
        row.innerHTML = 
        `
        <td>
            <img src="${imagen}" width="100">
        </td>
        <td>
            ${titulo}
        </td>
        <td>${precio}</td>
        <td>${cantidad}</td>
        <td>
        <a href="#" class="borrar-curso" data-id="${curso.id}"> X </a>
        </td>
        `;

        //Agrega el HTML del carrito en el tbody
        contenedorCarrito.appendChild(row);
    })
 }

 //Elimina los cursos tbody

 function limpiarHTML(){
    //  forma lenta
    //  contenedorCarrito.innerHTML = '';


    while(contenedorCarrito.firstChild){
        contenedorCarrito.removeChild(contenedorCarrito.firstChild);
    }
 }


// Formulario


$.validator.setDefaults( {
    submitHandler: function () {
        alert( "Muchas gracias, mensaje enviado con exito!" );
        
    }
 });
 
 
 $(document).ready(function(){
    $('#signupForm').validate({
       rules: {
          fullname: {
             required: true,
             minlength: 5
          },
          comments: {
             required: true
          },
         
        
          email: {
             required: true,
             email: true
          },
          agree: "required"
       },
       messages: {           
          fullname: {
             required: "Por favor ingresa tu nombre completo",
             minlength: "Tu nombre debe ser de no menos de 5 caracteres"
          },
          comments: "Por favor ingresa un comentario",
          password: {
             required: "Por favor ingresa una contraseña",
             minlength: "Tu contraseña debe ser de no menos de 5 caracteres de longitud"
          },
          confirm_password: {
             required: "Ingresa un password",
             minlength: "Tu contraseña debe ser de no menos de 5 caracteres de longitud",
             equalTo: "Por favor ingresa la misma contraseña de arriba"
          },
          email: "Por favor ingresa un correo válido",
          agree: "Por favor acepta nuestra política",
          luckynumber: {
             required: "Por favor"
          }
       },
       errorElement: "em",
       errorPlacement: function (error, element) {
          // Add the `help-block` class to the error element
          error.addClass("help-block");
 
          if (element.prop( "type" ) === "checkbox") {
             error.insertAfter(element.parent("label") );
          } else {
             error.insertAfter(element);
          }
       },
       highlight: function ( element, errorClass, validClass ) {
          $( element ).parents( ".col-sm-10" ).addClass( "has-error" ).removeClass( "has-success" );
       },
       unhighlight: function (element, errorClass, validClass) {
          $( element ).parents( ".col-sm-10" ).addClass( "has-success" ).removeClass( "has-error" );  
       } 
    });
 });