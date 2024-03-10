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
    Object.defineProperties(this, {
        nome: {
            enumerable: true,
            value: nome,
            writable: true,
            configurable: true
        },
        preco: {
            enumerable: true,
            value: preco,
            writable: true,
            configurable: true
        },
    })
}

const p1 = new Produto("Camiseta", 20, 3);
p1.estoque = 10000;
// delete p1.estoque; // com o 'configurable: false', não pode deletar
// console.log(Object.keys(p1));
