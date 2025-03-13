const relogioAnalogico = document.querySelector(".relogioAnalogico");
const horaDigital = document.querySelector('.hora');
const minutoDigital = document.querySelector('.minuto');

const horaAnal = document.querySelector('.horaAnal');
const minutoAnal = document.querySelector('.minutoAnal');
const segundoAnal = document.querySelector('.segundoAnal');

function atualizarRelogio() {
   const data = new Date();
   horaDigital.innerText = String(data.getHours()).padStart(2, "0");
   minutoDigital.innerText = String(data.getMinutes()).padStart(2, "0");
}

// const botaoAnt = document.querySelector('.antPainel');
// const botaoProx = document.querySelector('.proxPainel');
const containerDigital = document.querySelector('.containerDigital');
const containerAnalogico = document.querySelector('.containerAnalogico');

const btnNext = document.querySelector(".proxPainel");
const btnPrev = document.querySelector(".antPainel");

btnNext.addEventListener("click", (event) => {
    event.preventDefault();

    containerDigital.style.transform = 'translateX(-100vw)';
    containerAnalogico.style.transform = 'translateX(0)';
    
});

btnPrev.addEventListener("click", (event) => {
    event.preventDefault();
    
    containerDigital.style.transform = 'translateX(0)';
    containerAnalogico.style.transform = 'translateX(100vw)';
});

setInterval(atualizarRelogio, 1000);