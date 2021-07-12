document.addEventListener('DOMContentLoaded', e => {

    const $containerMain = document.querySelector('.container__main'),
        $fragment = document.createDocumentFragment(),
        $btnSearch = document.getElementById('submit-search'),
        $inputSearch = document.getElementById('input-search')

        let hpCaracters = [];

    /* 
        ?Invocando la funcion searchCity para enviar un datos vacio y por ende que cague todos los datos de que existen
    */


    /* 
        ?Funcion asincrona la cual recibe los datos enviados del input y los filtra mediante el metodo filter por coincidencias
    */



    async function searchCity(citySearch) {


        try {

            const res = await fetch('js/stays.json')

            hpCaracters = await res.json();

            let search = hpCaracters.filter((word) => {


                return word.city.toLowerCase().includes(citySearch) || word.country.toLowerCase().includes(citySearch)


            })


            console.log(search);
            /* Enviando los datos a imprimir */
            //console.log(search);

            displayCharacters(search);


        } catch (err) {

            /* En caso de que ocurra un error */

            console.log(`Ha ocurrido un error: ${err}`)

        }



    }


    /* 
        TODO En esta funcion expresada lo que se hace es recibir los datos retornados por la funcion asincrona searchCity y a partir de ellos realizar la busqueda mediante el metodo map el cual crea un nuevo arreglo con la coincidencia de los datos introducidos
    */



    const displayCharacters = (data) => {

        console.log(data);


        const arrayShow = data.map(element => {

            let $containerArticle = document.createElement('article');

            $containerArticle.classList.add('container__article');

            //console.log(element.photo);

            $containerArticle.innerHTML = `
           
                        <figure class="container__article--img">
    
                            <img src="${element.photo}" alt = "Imagen de un hotel" class="container__article--images">
    
                        </figure>
    
                        <div class="container__article--caption">
    
                            <p class="container__article--host">Super Host</p>
                            <span class="container__article--span">${element.type}</span>
                            <span class="container__article--span"> <i class="fas fa-star icon-star"></i> ${element.rating}</span>
    
                        </div>
    
                        <h2 class="container__article--description">${element.title}</h2>
        
                    `;

            //console.log($containerArticle);
            $fragment.appendChild($containerArticle);

        })

        $containerMain.appendChild($fragment);


    }


    /* 
        TODO Asignando un evento al objeto $btnSearch (boton de busqueda) para que al dar click en el se extraigan los datos introducidos en el input y mediante este se filtre la informacion
    */





    //console.log(inputValue);

    /* 
        ? Enviando los datos del input a la funcion searchCity()
     */


        $inputSearch.addEventListener('keyup', e => {
            
            let inputValue = $inputSearch.value.toLowerCase();
    
            searchCity(inputValue);

        })


})