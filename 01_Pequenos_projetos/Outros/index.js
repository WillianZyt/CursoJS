// const nome = 'Ana Cristina';
// const sobrenome = 'Marcelino'

// const pessoa = {
//   nome: 'Willian',
//   sobrenome: 'Zytkoski',
//   nomeCompleto(){
//    return nome + ' ' + sobrenome;
//   }
// };
// console.log(pessoa.nomeCompleto())
// console.log(nome)
// function novaPessoa(nome, sobrenome){
//   this.nome = nome,
//   this.sobrenome = sobrenome,
//   console.log(nome + ' ' + sobrenome)
// }
// const user001 = novaPessoa('Willian', 'Zytkoski');
// const user002 = novaPessoa('Ana C.', 'Zytkoski');
// const user003 = novaPessoa('Wesley', 'Zytkoski');

const pessoa = new Object;
pessoa.nome = 'Willian';
pessoa.sobrenome = 'Zytkoski';
// console.log(pessoa.nome + ' ' + pessoa.sobrenome)

function criaPessoa(nome, sobrenome){
  this.nome = nome;
  this.sobrenome = sobrenome;
//   function nomeCompleto(){ 
//     return nome + ' ' + sobrenome};
}
// criaPessoa.prototype.nomeCompleto(){
//   return this.nome + ' ' + this.sobrenome;
// }
const user001 = criaPessoa('Willian', 'Zytkoski')
console.log(user001.nome);

const nome = "Ana Cristina";
const sobrenome = "Marcelino Zytkoski";

// Pessoa.prototype.calcIdade = function(valor) {
//   this.anoN = valor - this.anoN;
// }
function Pessoa(nome, sobrenome, anoNasc) {
  return {
    nome, 
    sobrenome, 
    anoNasc
  }
}
Pessoa.prototype.idade = null;
function calcIdade(val) {
  return 2024 - val;
}

const user001 = new Pessoa("Willian", "Zytkoski", 1994);
user001.idade = calcIdade(user001.anoNasc);

console.log(user001.idade);
// console.log(typeof(user001));
