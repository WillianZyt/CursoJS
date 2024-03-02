// Object.defineProperty() e Object.defineProperties()
function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;
  
    Object.defineProperty(this, "estoque", {
      enumerable: true, // mostra a chave
      value: estoque, // valor
      writable: false, // se pode ou na alterar o valor
      configurable: false // configurável
    });
  }
  
  const p1 = new Produto("Camiseta", 20, 3);
  p1.estoque = 10000;
  console.log(p1);
  