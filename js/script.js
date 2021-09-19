let oLastModif = new Date(document.lastModified)
document.querySelector("#updated").textContent = oLastModif;  

const d = new Date();
const year = d.getFullYear();
const fulldate = `${year}`;
document.querySelector("#year").textContent = fulldate;


