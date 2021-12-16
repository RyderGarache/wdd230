const d = new Date();
const year = d.getFullYear();
const fulldate = `${year}`;
const options = {
  weekday: "long",
  day: "numeric",
  month: "long",
  year: "numeric",
};
const date = d.toLocaleDateString(undefined, options);
document.getElementById("updated").innerHTML = date;
document.querySelector("#year").textContent = fulldate;


const managua = 'https://api.openweathermap.org/data/2.5/forecast?id=3617763&units=imperial&appid=b2d53b90d433bca897a17243f31cbf12';

fetch(managua)
.then((response) => response.json())
.then((jsObject) => {   
    const objectFilter = jsObject.list.filter(time => time.dt_txt.includes('18:00:00'));

    const temperature = document.querySelector('.temperature');
    const currently = document.querySelector('.currently');
    const humidity = document.querySelector('.humidity');
    const windSpeed = document.querySelector('.speed');

    currently.innerHTML = objectFilter[0].weather[0].description;
    temperature.innerHTML = `${objectFilter[0].main.temp.toFixed(0)}`;
    humidity.innerHTML = `${objectFilter[0].main.humidity}`;
    windSpeed.innerHTML = `${objectFilter[0].wind.speed}`;
    
    const days = [
          'Sunday', 
          'Monday', 
          'Tuesday', 
          'Wednesday', 
          'Thursday', 
          'Friday', 
          'Saturday']
    var move = 1;
      
    objectFilter.forEach(forecast =>{             
      document.querySelector(`.day${move}`).textContent = days[new Date(forecast.dt_txt).getDay()];
      document.querySelector(`.temp${move}`).textContent = forecast.main.temp + '°F';
      document.querySelector(`.img${move}`).setAttribute('src', `icon/${forecast.weather[0].icon}.png`);
      document.querySelector(`.img${move}`).setAttribute('alt', forecast.weather[0].description);
      ++move;
        
    });
});

function imgBig(x) {
  x.style.height = "70px";
  x.style.width = "70px";
}

function imgNormal(x) {
  x.style.height = "50px";
  x.style.width = "45px";
}

let regExp = /\d+/; 

let string = document.querySelector('.speed').textContent;
let Speed = string.match(regExp);

let string2 = document.querySelector('.temperature').textContent;
let Temp = string2.match(regExp);

let WindChill =
  35.75 +
  0.6215 * Temp -
  35.75 * Math.pow(Speed, 0.16) +
  0.4275 * Temp * Math.pow(Speed, 0.16);


if (Temp <= 50 && Speed > 3)
  document.querySelector('.windchill').innerHTML = Math.round(WindChill) + " °F";
else document.querySelector('.windchill').innerHTML = "not applicable";





