// Construtora -> molde (classe)
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    // this.nomeCompleto = () => 'ORIGINAL: ' + this.nome + ' ' + this.sobrenome;
}

Pessoa.prototype.nomeCompleto = () => this.nome + ' ' + this.sobrenome;

// instância
const pessoa1 = new Pessoa('Luiz', 'O.');   // <- Pessoa = Função construtora
const data = new Date();   // <- Date = Função construtora

// Pessoa.prototype.estouAqui = 'Hahahaha';    // .prototype -> Prototipo, primeiro criada, a base, Proto
// Pessoa.prototype é o mesmo que pessoa1.__proto__ (console do Google Chrome)

console.dir(pessoa1);
console.dir(data);