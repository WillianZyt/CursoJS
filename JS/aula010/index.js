const nome = 'Luiz'; // String, entre "",'',``
const num1 = 10; // Number, ou 10.85
let nomeAluno; // undefined -> Nao aponta para local nenhum na memoria
const sobrenomeAluno = null; // Nulo -> Nao aponta para local nenhum na memoria
const aprovado = false; // Boolean -> true ou false (logico)

console.log(typeof sobrenomeAluno, sobrenomeAluno); // Tipo de dado

let a = 2;
const b = a;
console.log(a, b); // 2, 2

a = 3;  // alterou apenas o 'a', 'b' ainda se mantem
console.log(a, b); // 3 , 2