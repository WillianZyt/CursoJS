class ControleRemoto {
    constructor(tv) {
        this.tv = tv;
        this.volume = 0
    }
    //  Método de instância
    aumentarVolume() {
        this.volume += 2
    }
    diminuirVolume() {
        this.volume -= 2
    }
    //  Método estático
    static soma(x, y){
        return x + y;
        // console.log('Ok, vou trocar.');
    }
}
const controle1 = new ControleRemoto('LG')
controle1.aumentarVolume();
controle1.aumentarVolume();
controle1.aumentarVolume();
console.log(ControleRemoto.soma(2, 6))     // Método estático -> Só funciona na classe
console.log(controle1); 