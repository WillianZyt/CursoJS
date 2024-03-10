// IEEE 754-2008
let num1 = 0.7;       // number
let num2 = 0.1;       // number

num1 += num2;       //0.8
num1 += num2;       //0.9
num1 += num2;       //1.0
num1 += num2;       //1.1
num1 += num2;       //1.2
num1 += num2;       //1.3
num1 += num2;       //1.4
num1 += num2;       //1.5
num1 += num2;       //1.6
num1 += num2;       //1.7
num1 += num2;       //1.8
num1 += num2;       //1.9
num1 += num2;       //2.0

// num1 = (((num1 * 100) + (num2 * 100)) / 100);  
// num1 = (((num1 * 100) + (num2 * 100)) / 100);  
// num1 = (((num1 * 100) + (num2 * 100)) / 100);     

num1 = Number(num1.toFixed(2));     // ->maneira mais facil 
console.log(num1);      // vai ser 0.9999999 -> mudar para inteiro -> .toFixed(2)
console.log(Number.isInteger(num1));


// console.log(num1.toString() + num2); -> altera para String temporariamente
// console.log(typeof num1); -> tipo do elemento
// num = num1.toString(); -> altera pra String
// console.log(num1.toString(2)) ->    mostra em binario
// console.log(num1.toFixed(2)); ->    para casa decimais
// console.log(Number.isInteger(num1));        -> se o valor é inteiro

let temp = num1 * 'Olá';
console.log(Number.isNaN(temp));    // NaN-> Not a Number -> conta errado