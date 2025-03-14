const relogioAnalogico = document.querySelector(".relogioAnalogico");
const horaDigital = document.querySelector('.hora');
const minutoDigital = document.querySelector('.minuto');

const horaAnal = document.querySelector('.horaAnal');
const minutoAnal = document.querySelector('.minutoAnal');
const segundoAnal = document.querySelector('.segundoAnal');
const turno = document.querySelector('.turno');

function verificarTurno(hora) {
    hora < 12 ? turno.innerText = 'AM' : turno.innerText = 'PM'; 
}

function atualizarRelogio() {

   const data = new Date();
   let hora = String(data.getHours());
   let minuto = String(data.getMinutes());
   let segundo = String(data.getSeconds());

   verificarTurno(hora);
   horaDigital.innerText = hora.padStart(2, "0");
   minutoDigital.innerText = minuto.padStart(2, "0");

   let grausSegundo = 6 * segundo - 90;
   let grauMinuto = (6 * minuto) + (segundo * 0.1)  - 90;
   let grauHoras = (30 * hora) + (minuto * 0.5)  - 90; 

   console.log(`grauSegundos: ${grausSegundo}`);
   console.log(`grauMinutos: ${grauMinuto}`);
   console.log(`grauHoras: ${grauHoras}`);

   horaAnal.style.transform = `rotate(${grauHoras}deg)`;
   minutoAnal.style.transform = `rotate(${grauMinuto}deg)`;
   segundoAnal.style.transform = `rotate(${grausSegundo}deg)`;

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
    btnNext.style.display = 'none';
    btnPrev.style.display = 'block';
    
    
});

btnPrev.addEventListener("click", (event) => {
    event.preventDefault();
    
    containerDigital.style.transform = 'translateX(0)';
    containerAnalogico.style.transform = 'translateX(100vw)';
    btnPrev.style.display = 'none';
    btnNext.style.display = 'block';

});

setInterval(atualizarRelogio, 1000);