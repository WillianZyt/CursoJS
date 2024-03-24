class Carro {
  constructor(marca, modelo) {
    this.marca = marca;
    this.modelo = modelo;
  }
  carroCompleto = function(marca, modelo){
    return `Seu veiculo é um ${marca} ${modelo}?`
  }
}

const c1 = new Carro('Volkswagen', 'Gol')
console.log(c1.carroCompleto())
c1.carroCompleto