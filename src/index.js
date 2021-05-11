import './css/componentes.css';

let horas = 0;
let minutos = 0;
let segundos = 0;
let milesimas = 0;
const txtMilesimas = document.querySelector('#milesimas');
const txtSegundos = document.querySelector('#segundos');
const txtMinutos = document.querySelector('#minutos');
const txtHoras = document.querySelector('#horas');
const btnIniciar = document.querySelector('#btn-iniciar');
const btnParar = document.querySelector('#btn-parar');
const btnReiniciar = document.querySelector('#btn-reiniciar');

let intervalo;


btnIniciar.addEventListener('click', () => {
    clearInterval(intervalo);
    intervalo = setInterval(iniciaContador, 10);
});

btnParar.addEventListener('click', () => {
    clearInterval(intervalo);
});

btnReiniciar.addEventListener('click', () => {
    horas = 0;
    minutos = 0;
    segundos = 0;
    milesimas = 0;
    clearInterval(intervalo);
    txtMilesimas.innerText = '00';
    txtSegundos.innerText = '00';
    txtMinutos.innerText = '00';
    txtHoras.innerText = '00';
});

const iniciaContador = () => {
    milesimas++;
    txtMilesimas.innerText = (milesimas <= 9) ? '0' + milesimas : milesimas;
    if (milesimas > 99) {
        segundos++;
        txtSegundos.innerText = (segundos <= 9) ? '0' + segundos : segundos;
        milesimas = 0;
        txtMilesimas.innerText = "00";
    }
    if (segundos === 60) {
        minutos++;
        txtMinutos.innerText = (minutos <= 9) ? '0' + minutos : minutos;
        segundos = 0;
        txtSegundos.innerText = "00";
    }
    if (minutos === 60) {
        horas++;
        txtHoras.innerText = (horas <= 9) ? '0' + horas : horas;
        minutos = 0;
        txtMinutos.innerText = "00";
    }
};