// Some todos os numeros (Reduce)
// Retorne um array com os pares (Filter)
// Retorne um array com o dobro dos calores (Map)
//               0  1   2   3  4  5 ...
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const total = numeros.reduce(function (acumulador, valor) {
    if (valor % 2 === 0) acumulador.push(valor);
    // console.log(acumulador, valor)
    return acumulador;
}, []);
// console.log(total);



const pessoas = [
    { nome: "Luiz", idade: 62 },
    { nome: "Maria", idade: 23 },
    { nome: "Eduardo", idade: 55 },
    { nome: "Letícia", idade: 19 },
    { nome: "Rosane", idade: 32 },
    { nome: "Wallece", idade: 47 }
];

