const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
    .then(function (response){
        return response.json();
    })
    .then(function (townsObject) {
        console.table(townsObject);
        const towns = townsObject['towns'];

        for (i = 0; i < 1; i++ ) {
               
            let card = document.createElement('section');
            let name = document.createElement('h1');
            let motto = document.createElement('h2');
            let yearFounded = document.createElement('p');
            let currentPopulation = document.createElement('p');
            let averageRainfall = document.createElement('p')
            let images = document.createElement('img');

            name.textContent = `${towns[0].name}`; 
            motto.innerHTML = `${towns[0].motto}`;
            yearFounded.innerHTML = `Year Founded: ${towns[0].yearFounded}`;
            currentPopulation.innerHTML = `Population: ${towns[0].currentPopulation}`;
            averageRainfall.innerHTML = `Annual Rain Fall: ${towns[0].averageRainfall}`;
            card.setAttribute('class', 'sodasprings');
            images.src = `image/${towns[0].photo}`;
            images.alt = `${towns[0].name} ${i+1}`;            
            images.setAttribute('loading', 'lazy');
                                                       
            card.appendChild(name);
            card.appendChild(motto);
            card.appendChild(yearFounded);
            card.appendChild(currentPopulation);
            card.appendChild(averageRainfall);
            card.appendChild(images)
            
            document.querySelector('div.homecards').appendChild(card);

            let card1 = document.createElement('section');
            let name1 = document.createElement('h1');
            let motto1 = document.createElement('h2');
            let yearFounded1 = document.createElement('p');
            let currentPopulation1 = document.createElement('p');
            let averageRainfall1 = document.createElement('p')
            let images1 = document.createElement('img');

            name1.textContent = `${towns[2].name}`; 
            motto1.innerHTML = `${towns[2].motto}`;
            yearFounded1.innerHTML = `Year Founded: ${towns[2].yearFounded}`;
            currentPopulation1.innerHTML = `Population: ${towns[2].currentPopulation}`;
            averageRainfall1.innerHTML = `Annual Rain Fall: ${towns[2].averageRainfall}`;
            card1.setAttribute('class', 'fishhaven');
            images1.src = `image/${towns[2].photo}`;
            images1.alt = `${towns[2].name} ${i+1}`;            
            images1.setAttribute('loading', 'lazy');
                                                       
            card1.appendChild(name1);
            card1.appendChild(motto1);
            card1.appendChild(yearFounded1);
            card1.appendChild(currentPopulation1);
            card1.appendChild(averageRainfall1);
            card1.appendChild(images1)
            
            document.querySelector('div.homecards2').appendChild(card1);

            let card2 = document.createElement('section');
            let name2 = document.createElement('h1');
            let motto2 = document.createElement('h2');
            let yearFounded2 = document.createElement('p');
            let currentPopulation2 = document.createElement('p');
            let averageRainfall2 = document.createElement('p')
            // let events = document.createElement('p')
            let images2 = document.createElement('img');

            name2.textContent = `${towns[6].name}`; 
            motto2.innerHTML = `${towns[6].motto}`;
            yearFounded2.innerHTML = `Year Founded: ${towns[6].yearFounded}`;
            currentPopulation2.innerHTML = `Population: ${towns[6].currentPopulation}`;
            averageRainfall2.innerHTML = `Annual Rain Fall: ${towns[6].averageRainfall}`;
            card2.setAttribute('class', 'prestonhome');
            images2.src = `image/${towns[6].photo}`;
            images2.alt = `${towns[6].name} ${i+1}`;            
            images2.setAttribute('loading', 'lazy');
                                                       
            card2.appendChild(name2);
            card2.appendChild(motto2);
            card2.appendChild(yearFounded2);
            card2.appendChild(currentPopulation2);
            card2.appendChild(averageRainfall2);
            card2.appendChild(images2)
            
            document.querySelector('div.homecards3').appendChild(card2);
        }

    })