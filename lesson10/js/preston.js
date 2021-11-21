const apiUrl = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=7e49321eeffa7af4f0684a6ae34320c6';

fetch(apiUrl)
.then((response) => response.json())
.then((jsObject) => {
    //console.log(jsObject);
    
    //console.log(jsObject.city)
    //console.log(jsObject.city.name);
    const afternoon = jsObject.list.filter(time => time.dt_txt.includes('18:00:00'));
    //console.log(afternoon);

    const temp = document.querySelector('.temp');
    const condition = document.querySelector('.currentWeather');
    const humidity = document.querySelector('.humidity');
    const windSpeed = document.querySelector('.windSpeed');
    
    let tempA = afternoon[0].main.temp.toFixed(0);
    let speed = afternoon[0].wind.speed;

    condition.textContent = afternoon[0].weather[0].description;
    temp.textContent = `${tempA}°F`;
    humidity.textContent = `${afternoon[0].main.humidity}%`;
    windSpeed.textContent = `${speed}mph`;
    
   
    const dayOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    let day = 0;
    afternoon.forEach(forecast =>{
       let imagesrc = `../icon/${forecast.weather[0].icon}.png`; 
        let description = forecast.weather[0].description;
        //console.log(forecast.weather[0].icon);
        let date = new Date(forecast.dt_txt);

         /*for later editing
         imagesrc;
        if (description === 'few clouds'){
          imagesrc = '../icon/fewclouds.png';
        }
        if (description === 'clear sky'){
          imagesrc = '../icon/sunny.png';
        }
        if (description === 'broken clouds'){
          imagesrc = '../icon/brokenclouds.png';
        }
        if (description === 'cloudy'){
          imagesrc = '../icon/cloudy.png';
        }*/


        document.querySelector(`.day${day + 1}`).textContent = dayOfWeek[date.getDay()];
        document.querySelector(`.temp${day + 1}`).textContent = forecast.main.temp + '°F';
        document.querySelector(`#icon${day + 1}`).setAttribute('src', imagesrc);
        document.querySelector(`#icon${day + 1}`).setAttribute('alt', description);
        day++;
        
    });