// Atribuição via desestruturação (Arrays)
// ... rest, ... spread
//                    0           1           2
//                 0  2  3    0   1   2    0  1   2
const numeros = [[1, 2, 3], [4 , 5 , 6], [7, 8, 9]];
// const[,[,,seis]] = numeros;   //mais complexo
const [lista1, lista, lista3] = numeros;
console.log(lista1[2]);

// const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];
// const [primeiroNumero, segundoNumero, ...resto] = numeros;
// console.log(primeiroNumero, segundoNumero);

