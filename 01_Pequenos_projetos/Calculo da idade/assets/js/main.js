const btnAdc = document.querySelector('.btn-adc');
const inputAdc = document.querySelector('.input-adc');
resultado = document.querySelector('.resultado')

btnAdc.addEventListener('click', function (e) {
  e.preventDefault();
  const data = new Date();
  // const ano =
  let num = inputAdc.value;
  const para = document.createElement('p');
  // num = 2024 - num;
  para.innerHTML = `Sua idade é de ${idade(num)} anos.`;
  resultado.appendChild(para);
});

function idade(num) {
  num = 2024 - num;
  return num;
}


// function criaP() {
//   const p = document.createElement('p');
//   p.classList('paragrafo-resultado');
//   return p;
// }