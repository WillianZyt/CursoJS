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
const p1 = new Produto(
    this.nome = 'caneca',
    this.preco = 5
)
console.log(p1);