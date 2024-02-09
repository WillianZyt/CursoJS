let num1 = Number(prompt('Qual o primeiro número?'));
let num2 = Number(prompt('Qual o segundo número?'));
let resultado = num1 + num2;
alert(`Seu número é ${resultado}`);

let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A 
[varA, varB, varC] = [varB, varC, varA]
console.log(varA, varB, varC);