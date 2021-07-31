import clickFilter from "./filter.js";
document.addEventListener('DOMContentLoaded', e => {


    const $inputSearch = document.getElementById('input-search');
    const $btnSearch = document.getElementById('submit-search');
    const $fragment = document.createDocumentFragment();
    const $containerContent = document.querySelector('.container__main');
    const $btnMode = document.getElementById('btn-dark');


    /* Para el dark mode */

    $btnMode.addEventListener('click', e => {

        document.body.classList.toggle('dark-mode')


        if (document.body.classList.contains('dark-mode')) {

            localStorage.setItem('mode', 'true');


        } else {

            localStorage.setItem('mode', 'false');

        }



    })

    /* Para comprobar si el modo oscuro ya se activo previamente */

    if (localStorage.getItem('mode') === 'true') {

        document.body.classList.add('dark-mode');

        $btnMode.setAttribute('checked', true);


    } else {

        document.body.classList.remove('dark-mode')

    }

    let displayHotels = (json) => {

        const arrayShow = json.map((element) => {

            return `

            
            <article class="container__article" value="${element.id}">

                <figure class="container__article--img">

                     <img src="${element.photo}" alt = "Imagen de un hotel" class="container__article--images" loading="lazy">

               </figure>

                <div class="container__article--caption">

                    <p class="container__article--host">Super Host</p>

                    <span class="container__article--span">${element.type}</span>

                    <span class="container__article--span"> <i class="fas fa-star icon-star"></i> ${element.rating}</span>

                </div>

                <h2 class="container__article--description">${element.title}</h2>


            </article>
            
            `;



        }).join('');

        $containerContent.innerHTML = arrayShow;

        // console.log(arrayShow);

       
       


    }



    $btnSearch.addEventListener('click', e => {

        let inputValue = $inputSearch.value.toLowerCase();

        searchCity(inputValue)

    })

    async function searchCity(citySearch) {

        try {

            let res = await fetch('js/stays.json');

            let data = await res.json();


            let result = data.filter((word) => {

                return (word.city.toLowerCase().includes(citySearch) || word.country.toLowerCase().includes(citySearch));

            });


            displayHotels(result);
            clickFilter(result);


        } catch (err) {

            console.log("Estamos en el error: " + err);

        }

    }

    searchCity('');




})