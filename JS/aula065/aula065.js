// Filter, map, reduce
// Retorne os números maiores que 10
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
 
function callbackFilter(valor, indice, array) {
  valor>10 ? true : false;
}

const numerosFiltradors = numeros.filter(callbackFilter);
console.log(numerosFiltradors);