// Filter -> Sempre retorna array, com a mesma quantidade de elementos, ou menos

// Retorne os números maiores que 10
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// function callbackFilter(valor, indice, array) {
//   return valor>10;
// let numMaior10 = valor > 10 ? true : false;
//   return numMaior10;
//   if (valor>10){
//     return true;
//   } else {
//     return false;
//   }

const numerosFiltradors = numeros.filter(valor => valor>10);
// const numerosFiltradors = numeros.filter((valor, indice, array) => {
//   console.log(valor, indice, array);
//   valor>10;
// });
console.log(numerosFiltradors);
