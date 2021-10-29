window.addEventListener('scroll', function () {

    function fade(direction){

        let imagen = document.querySelectorAll('.img__' + direction)

    for (let i = 0; i < imagen.length; i++) {

        let altura = window.innerHeight / 1.3

        let distancia = imagen[i].getBoundingClientRect().top


        console.log(altura)
        console.log(distancia)

        imagen[i].classList.add('transform_' + direction)


        if (distancia <= altura) {

            imagen[i].classList.add('img__aparece')
        }
        else {

            imagen[i].classList.remove('img__aparece')
        }


    }

    }
    
    fade('up') 
    fade('right')
    fade('left')  
    










})