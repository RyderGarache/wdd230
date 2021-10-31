// let oLastModif = new Date(document.lastModified)
// document.querySelector("#updated").textContent = oLastModif;  

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


const menubutton = document.querySelector('.menu');
const mainnav = document.querySelector('.navigation')

menubutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

// To solve the mid resizing issue with responsive class on
window.onresize = () => {if (window.innerWidth > 760) mainnav.classList.remove('responsive')};

document.querySelector(".banner_close").addEventListener("click", function () {
  this.closest(".banner").style.display = "none";
})


