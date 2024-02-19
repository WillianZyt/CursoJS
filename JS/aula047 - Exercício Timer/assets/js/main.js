// new Date(0)
const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');
let segundos = 0;
let timer;

function criaHoraDosSegundos(segundos) {
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'GMT'
    });
}

function iniciaRelogio() {
    timer = setInterval(function () {
        segundos++;
        relogio.innerHTML = criaHoraDosSegundos(segundos);
    }, 1000);
}

function zerarRelogio(){
    clearInterval();
}

relogio.addEventListener('click', function (event) {});
iniciar.addEventListener('click', function (event) {
    iniciaRelogio();
});
pausar.addEventListener('click', function (event) {
    clearInterval(timer);
    relogio.fontcolor('red');
});
zerar.addEventListener('click', function (event) {
    zerarRelogio();
});