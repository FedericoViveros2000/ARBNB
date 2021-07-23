document.addEventListener('DOMContentLoaded', e => {

    const $inputSearch = document.getElementById('input-search');
    const $btnSearch = document.getElementById('submit-search');
    const $fragment = document.createDocumentFragment();
    const $containerContent = document.querySelector('.container__main');


    let displayHotels = (json) => {

        const arrayShow = json.map((element) => {

            return `

            <article class="container__article">

                <figure class="container__article--img">

                     <img src="${element.photo}" alt = "Imagen de un hotel" class="container__article--images">

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


                return (word.city.toLowerCase().includes(citySearch) || word.country.toLowerCase().includes(citySearch))

            });


            displayHotels(result);


        } catch (err) {

            console.log("Estamos en el error: " + err);

        }

    }

    searchCity('');




})