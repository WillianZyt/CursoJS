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

// Retorne a pessoa mais velha
const pessoas = [
    { nome: "Luiz", idade: 62 },  // Laço comeca com esse valor
    { nome: "Maria", idade: 23 },
    { nome: "Eduardo", idade: 55 },
    { nome: "Letícia", idade: 19 },
    { nome: "Rosane", idade: 64 },
    { nome: "Wallece", idade: 63 }
];

const maisVelha = pessoas.reduce(function(acumulador, valor){
  if (acumulador.idade > valor.idade) return acumulador;
  return valor;
})

console.log(maisVelha);

