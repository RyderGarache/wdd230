const apiUrl = 'http://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=420d442c65fe60516acb45bbd0c0810c'
fetch(apiUrl)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject)
    })

document.getElementById('current-temp').textContent = jsObject.city.cod;









