// new Object -> Object.protype
const objA = {
    chaveA: 'A'
  // __proto__: Object.prototype
  };
const objB = {
    chaveB: 'B'
  // __proto__: Object.prototype
  };
const objC = new Object()
  objC.chaveC = 'C';

Object.setPrototypeOf(objB, objA);
Object.setPrototypeOf(objC, objB);
// console.log(objC.chaveA);

function Produto(nome, preco){
  this.nome = nome;
  this.preco = preco;
}

Produto.prototype.desconto = function(percentual){
  this.preco = this.preco - (this.preco * (percentual / 100))
}
Produto.prototype.aumento = function(percentual){
  this.preco = this.preco + (this.preco * (percentual / 100))
}
const p1 = new Produto('Camiseta', 50);

// Literal
const p2 = {
  nome: 'caneca',
  preco: 15
}
Object.setPrototypeOf(p2, Produto.prototype);

p1.desconto(100);
p2.aumento(10);

// console.log(p1);
// console.log(p2);

const p3 = Object.create(Produto.prototype,{
  valor: {
    writable: true,
    configurable: true,
    enumerable: true,
    value: 99
  },
  tamanho: {
    writable: true,
    configurable: true,
    enumerable: true,
    value: 42
  }
});
// p3.aumento(10);
console.log(p3);

//------------------------------------------------------------

// function Pessoa(nome, sobrenome) {
//   this.nome = nome,
//   this.sobrenome = sobrenome
// }
// Pessoa.prototype.nomeCompleto = function() {
//   return this.nome + ' ' + this.sobrenome;
// }

// const pessoa1 = new Pessoa('Willian', 'Zytkoski');
// console.log(pessoa1.nomeCompleto());