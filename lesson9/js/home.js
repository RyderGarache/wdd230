const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
    .then(function (response){
        return response.json();
    })
    .then(function (townsObject) {
        console.table(townsObject);
        const towns = townsObject['towns'];

        for (let i = 0; i < towns.length; i++ ) {
               
            let card = document.createElement('section');
            let name = document.createElement('h1');
            let motto = document.createElement('h2');
            let yearFounded = document.createElement('p');
            let currentPopulation = document.createElement('p');
            let averageRainfall = document.createElement('p')
            // let events = document.createElement('p')
            let images = document.createElement('img');

            name.textContent = `${towns[i].name}`; 
            motto.innerHTML = `${towns[i].motto}`;
            yearFounded.innerHTML = `Year Founded: ${towns[i].yearFounded}`;
            currentPopulation.innerHTML = `Population: ${towns[i].currentPopulation}`;
            averageRainfall.innerHTML = `Annual Rain Fall: ${towns[i].averageRainfall}`;
            // events.innerHTML = `${towns[i].events}`
            images.src = `image/${towns[i].photo}`;
            images.alt = `${towns[i].name} ${i+1}`            
            images.setAttribute('loading', 'lazy');
                                                       
            card.appendChild(name);
            card.appendChild(motto);
            card.appendChild(yearFounded);
            card.appendChild(currentPopulation);
            card.appendChild(averageRainfall);
            card.appendChild(images)
            
            document.querySelector('div.cards').appendChild(card);
        }

    })