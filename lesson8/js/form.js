let event1 = new Date()
let options1 = {
    day: "numeric",
  };
let date1 = event1.toLocaleDateString(undefined, options1);
localStorage.setItem('date',date1)



sessionStorage.setItem('date',date1)


let n1 = localStorage.getItem('date')
let n2 = sessionStorage.getItem('date')
let dif = n1-n2;

document.getElementById('visit').innerHTML = "It has been " + dif + " days since you were last here";

function adjustRating(rating) {
    document.getElementById("ratingvalue").innerHTML = rating;
}
