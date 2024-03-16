class CPF {
    constructor(cpf) {
        this.cpf = cpf;
    }
    cpfLimpo(cpf) {
        this.cpf = this.cpf.replace(/\D+/g, "");
        this.cpf = Array.from(this.cpf);
        this.cpf = this.cpf.slice(0, -2);
        // for (let i = 0; i < this.cpf.length; i++) {
        //         this.cpf[i] = this.cpf[i] * ((this.cpf.length + 1) - i);
    }
    criaDigito(cpf) {
        for (let i = 0; i < this.cpf.length; i++) {
            this.cpf[i] = this.cpf[i] * ((this.cpf.length + 1) - i);
        }
        this.cpf = this.cpf.reduce((ac, val) => {
            return ac + val;
    },0)  
    this.cpf = 11 - (this.cpf % 11);
    }
    addNumCPF (cpf){
        this.cpf.push(this.cpf);
    }
}

// function eqCPF(cpf) {
//     for (let i = 0; i < cpf.length; i++) {
//         cpf[i] = cpf[i] * ((cpf.length + 1) - i);
//     }
//     return cpf;
// }

const p1 = new CPF('091.759.719-25');
// p1.cpfLimpo();
// p1.criaDigito()
console.log(p1);
