// Filter -> Sempre retorna array, com a mesma quantidade de elementos, ou menos
// Retorne os números maiores que 10
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// function callbackFilter(valor, indice, array) {
//   return valor>10;
// let numMaior10 = valor > 10 ? true : false;
//   return numMaior10;
//   if (valor>10){
//     return true;
//   } else {
//     return false;
//   }

const numerosFiltradors = numeros.filter(valor => valor>0);
// const numerosFiltradors = numeros.filter((valor, indice, array) => {
//   console.log(valor, indice, array);
//   valor>10;
// });
// console.log(numerosFiltradors);

// Retorne as pessoas que tem o nome com 5 letras ou mais
// Retorne as pessoas com mais de 50 anos
// Retorne as pessoas cujo o nome termina com a
const pessoas = [
  { nome: "Luiz", idade: 62 },
  { nome: "Maria", idade: 23 },
  { nome: "Eduardo", idade: 55 },
  { nome: "Letícia", idade: 19 },
  { nome: "Rosane", idade: 32 },
  { nome: "Wallece", idade: 47 }
];
  
  const pessoasComNomeGrande = pessoas.filter(obj => obj.nome.length >= 5);
  console.log(pessoasComNomeGrande);
  
  const pessoasMaisVelhas = pessoas.filter(valor => valor.idade > 50);
  console.log(pessoasMaisVelhas);

  const pessoasComFinalA = pessoas.filter(obj => {return obj.nome.toLocaleLowerCase().endsWith('a')});
  console.log(pessoasComFinalA);