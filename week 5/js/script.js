// const buttonA = document.querySelector('#button_A');
// const headingA = document.querySelector('#heading_A');

// buttonA.onclick = function() {
//   let name = prompt('What is your name?');
//   alert('Hello ' + name + ', nice to see you!');
//   headingA.textContent = 'Welcome ' + name;
// }

 window.onload = function() {
            window.datas = [];
        }

        function favchap() {
            let datas = document.getElementById('texto').value;

            datas.push(dato);
        }

        function mostrarArreglo() {
            let resultado = document.getElementById('resultado');
            resultado.innerHTML = '';

            for (const dato of datos) {
                let datoParrafo = document.createElement('p');
                datoParrafo.innerText = dato;

                resultado.appendChild(datoParrafo);
            }
        }