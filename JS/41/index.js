// Escreva uma função que recebe 2 números e retorne o maior deles

// num1 = 10;
// num2 = 2;
// function showHightNumber(){
//     if (num1 > num2){
//         console.log(num1);
//     } else if(num2>num1){
//         console.log(num2);
//     }
// }
// showHightNumber();

// function showHightNumber(x, y){
//     // if (x > y) return x;
//     // return y;
//     return x > y ? x : y;
// }

const showHightNumber2 = (x, y) => x > y ? x : y;

console.log(showHightNumber2(100, 2));