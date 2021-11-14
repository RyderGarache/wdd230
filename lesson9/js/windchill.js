// GET WINDCHILL
let regExp = /\d+/; 

let string = document.getElementById("speed").textContent;
let Speed = string.match(regExp);

let string2 = document.getElementById("temp").textContent;
let Temp = string2.match(regExp);

let WindChill =
  35.75 +
  0.6215 * Temp -
  35.75 * Math.pow(Speed, 0.16) +
  0.4275 * Temp * Math.pow(Speed, 0.16);

if (Temp > 50 && Speed > 3)
  document.getElementById("windchill").innerHTML = Math.round(WindChill) + " °F";
else document.getElementById("windchill").innerHTML = "not applicable";