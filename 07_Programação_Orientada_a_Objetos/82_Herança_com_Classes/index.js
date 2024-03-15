class DispositivoEletronico {
    constructor(nome) {
        this.nome = nome;
        this.ligado = false;
    }
    ligar() {
        if (this.ligado) {
            console.log(this.nome + ' já ligado')
            return;
        }
        this.ligado = true;
    }
    desligar() {
        if (!this.ligado) {
            console.log(this.nome + ' já desligado')
            return;
        }
        this.ligado = false;
    }
}

class Smartphone extends DispositivoEletronico {   //extends -> para copiar parametros da classe
    constructor(nome, cor, modelo) {
        super(nome);    //super -> para chamar o construtor da classe pai
        this.cor = cor;
        this.modelo = modelo;
    }
}
const s1 = new Smartphone('Iphone', 'Preto', 'Galaxy S10')
console.log(s1)