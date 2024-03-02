// .defineProperty -> Getter e Setters
function Produto(nome, preco, estoque) {
  this.nome = nome;
  this.preco = preco;
  let estoquePrivado = estoque;
  Object.defineProperty(this, "estoque", {
    enumerable: true, // mostra a chave
    configurable: true, // configurável
    get: function () {
      return estoquePrivado;
    },
    set: function (valor) {
      if (typeof valor !== 'number') {
        throw new TypeError('Mensagem dee erro.')
      }
      estoquePrivado = valor;
    }
  });
}

// const p1 = new Produto("Camiseta", 20, 3);
// console.log(p1);
// p1.estoque = 'assss';
// console.log(p1.estoque);

// factory function
function criaProduto(valor){
  return{
    get nome(){
      return nome;
    },
    set nome(valor){
      nome = valor;
    }
  };
}
const p2 = criaProduto('Camiseta');
console.log(p2);