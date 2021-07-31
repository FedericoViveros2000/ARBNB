export default function clickFilter(json) {

    const $containerContentSearch = document.querySelector('.container__main');

    const $containerContentFilter = document.querySelectorAll('.container__article');

    console.log($containerContentSearch);

    $containerContentFilter.forEach(content => {

        content.addEventListener('click', e => {

            let id = content.getAttribute('value')

            //console.log(id);

            const hotelSelect = json.filter(hotel => hotel.id == id)

            console.log(hotelSelect);

            arraySelect(hotelSelect)

            //location.href = './layouts/info.html';


        });
        
        let arraySelect = (hotel) => {

            const arrayHotel = hotel.map((element) => {

                return `

         
                 <article class="container__article--buscar">

                     <figure class="container__article--buscar--images">

                         <img src="${element.photo}" alt = "Imagen de un hotel" class="container__article--buscar--images" loading="lazy">

                    </figure>

                    <div class="container__article--caption">

                        <p class="container__article--host">Super Host</p>
                       
                        <span class="container__article--span">${element.type}</span>

                        <span class="container__article--span"> <i class="fas fa-star icon-star"></i> ${element.rating}</span>

                    </div>

                    
                    
                    
                    <div class="container__article--specs">
                    <h2 class="container__article--description">${element.title}</h2>

                        <p class="container__article--paragraph--specs">Ciudad: ${element.city}</p>
                        <p class="container__article--paragraph--specs">País: ${element.country}</p>
                        <p class="container__article--paragraph--specs">Cantidad de personas: ${element.maxGuests}</p>
                        <p class="container__article--paragraph--specs">Habitaciones: ${element.beds}</p>
                       

                    </div>
                    
                    </article>
                    
             `;



            }).join('');

            $containerContentSearch.innerHTML = arrayHotel;

        }
        


    })

}