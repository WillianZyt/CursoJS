// Extend e Super

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

class Tablet extends DispositivoEletronico {
    constructor(nome, temWiFi){
        super(nome);
        this.temWiFi = temWiFi;
    }
    ligar(){
        console.log('Olha, você alterou o método ligar.')
    }
}

const s1 = new Smartphone('Samsung', 'Preto', 'Galaxy S10')
console.log(s1)

const t1 = new Tablet('iPad', true);
console.log(t1.ligado)