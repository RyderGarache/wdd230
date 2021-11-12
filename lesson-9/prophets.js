const requestURL = 'https://byui-cit230.github.io/canvas-referenced/latter-day-prophets.json';

fetch(requestURL)
    .then(function (response){
        return response.json();
    })
    .then(function (prophetobject) {
        console.table(prophetobject);
        const prophet = prophetobject['prophets'];

        for (let i = 0; i < prophet.length; i++ ) {
               
            let card = document.createElement('section');
            let name = document.createElement('h2');
            let birthplace = document.createElement('p');
            let birthdate = document.createElement('p');
            let images = document.createElement('img');

            name.textContent = `${prophet[i].name} ${prophet[i].lastname}`; 
            birthdate.innerHTML = `Date of Birth: ${prophet[i].birthdate}`;
            birthplace.innerHTML = `Place of Birth: ${prophet[i].birthplace}`;
            images.src = `${prophet[i].imageurl}`;
            images.alt = `${prophet[i].name} ${prophet[i].lastname} - ${i+1}`            
            images.setAttribute('loading', 'lazy');
                     
                                  
            card.appendChild(name);
            card.appendChild(birthdate);
            card.appendChild(birthplace);
            card.appendChild(images);
            
            document.querySelector('div.cards').appendChild(card);
        }
});