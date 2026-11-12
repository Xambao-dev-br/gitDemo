const button = document.getElementById('button');
let contador = 0;
button.addEventListener('click', () => {
    contador++;
    button.innerText = contador;
})
