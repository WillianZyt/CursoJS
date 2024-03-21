// Pares e Ímpares
// Escreva uma função ordernar(lista) que recebe como parâmetro uma lista de inteiros não negativos. 
// E ordene a lista de forma que os pares fiquem em ordem crescente e depois os ímpares em ordem decrescente.

// Entrada:
// [ 4, 32, 34, 543, 3456, 654, 567, 87, 6789, 98 ]
// Saida:
// [4, 32, 34, 98, 654, 3456, 6789, 567, 543, 87 ]

let num = [4, 32, 34, 543, 3456, 654, 567, 87, 6789, 98];

function ordenar(num) {
    let numPar = num.filter(num => num % 2 === 0);
    numPar.sort((a, b) => a - b);
    let numImpar = num.filter(num => num % 3 === 0);
    numImpar.sort((a, b) => b - a);
    let numParImpar = numPar
    numPar.push(...numImpar)
    console.log(numParImpar);
}
ordenar(num);