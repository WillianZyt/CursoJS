class Veiculo {
  constructor(tipo, marca, modelo) {
    this.tipo = tipo;
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
  }
  carroCompleto = function(marca, modelo){
    return `Seu veiculo é um ${this.marca} ${this.modelo}?`
  }
}

const v1 = new Veiculo('Carro', 'Volkswagen', 'Gol')
Veiculo.prototype.ano
const v2 = new Veiculo('Onibus', 'Mercedes', 'B400', 2020)
console.log(v1.ano)
console.log(`Seu veiculo é um ${v2.tipo} da marca ${v2.marca} e do ano ${v2.ano}`)