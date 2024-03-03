//  Produto -> aumento, desconto
//  Camiseta = cor, caneca = material
function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}
Produto.prototype.aumento = function(quantia) {
    this.preco += quantia;
};
Produto.prototype.desconto = function(quantia) {
    this.preco -= quantia;
};
function Camiseta(nome, preco, cor) {
    Produto.call(this, nome, preco);
    this.cor = cor;
}

Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.constructor = Camiseta; 
Camiseta.prototype.aumento = function(porcentual) {
    this.preco = this.preco + (this.preco * (porcentual / 100));
}

function Caneca (nome, preco, material) {
    Produto.call(this, nome, preco);
    this.material = material;
}
Caneca.prototype = Object.create(Camiseta.prototype);
Caneca.prototype.constructor = Caneca;
Caneca.prototype.aumento = function(porcentual) {
    this.preco = this.preco + (this.preco * (porcentual / 100));
}
const caneca = new Caneca('Caneca', 5, 'Porcelana');
console.log(caneca);

const produto = new Produto('Gen', 111)
const camiseta = new Camiseta('Regata', 7.5, 'Preta');
// console.log(produto);
// console.log(camiseta);
