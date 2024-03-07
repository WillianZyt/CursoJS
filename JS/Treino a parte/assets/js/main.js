const btnAdc = document.querySelector('.btn-adc');
const inputAdc = document.querySelector('.input-adc');

btnAdc.addEventListener('click', function(e){
  e.preventDefault();
  const num = inputAdc.value;
  
   console.log(`${num}, Botão foi clicado.`)
})

