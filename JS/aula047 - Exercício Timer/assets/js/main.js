const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');



const timer = setInterval(function timerUS(){
    for (let i; i <=59; i++){
        console.log = `00:00:${i}`
    }
}, 1000)
timer();

const relogioTimer = new timer();

relogio.addEventListener('click', function(event){

});
iniciar.addEventListener('click', function(event){
    timerUS();
});
pausar.addEventListener('click', function(event){

});
zerar.addEventListener('click', function(event){

});