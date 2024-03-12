// Escreva uma função que recebe um número e retorne o seguinte:
// Número é divisível por 3 = Fizz
// Número é divisível por 5 = Buzz
// Número é divisível por 3 e 5 = FizzBuzz
// Número não é divisível por 3 e 5 = Retorna o próprio número
// Checar se o número é realmente um número = Retorna o próprio número
// Use a função com o númesros de 0 a 100 (um laço)

function fizzBuzz(numero) {
    if (typeof numero !== 'number') return numero;
    if (numero % 3 ===0 && numero % 5 === 0) return 'FizzBuzz';
    if (numero % 3 === 0) return 'Fizz';
    if (numero % 5 === 0) return 'Buzz';
    return numero;
}
for (let i = 0; i <= 100; i++){
    console.log(i, fizzBuzz(i));
}

// MINHA RESOLUÇÃO
// function numDiv5e3(){
//     for (let i= 1; i<= 100; i++){
//         if (i % 3 ===0 && i % 5 === 0){
//             console.log('FizzBuzz');
//             continue;
//         }
//         if (i % 3 === 0){
//             console.log('Fizz');
//             continue;
//         }
//       if (i % 5 === 0){
//             console.log('Buzz');
//             continue;
//         }
//         console.log(i, Number(i));
//     }
// }
// numDiv5e3();