class CPF {
    constructor(cpf) {
        this.cpf = cpf;
    }
    cpfLimpo(cpf) {
        this.cpf = this.cpf.replace(/\D+/g, "");
        this.cpf = Array.from(this.cpf)
        this.cpf = this.cpf.slice(0, -2);
    }
    primNum(cpf) {
        for (let i = 0; i < this.cpf.lenght; i++) {
            this.cpf[i] = this.cpf[i] * ((this.cpf.lenght + 1) - i)
            return this.cpf;
        }
    }
}
// function criaDigito(cpf) {
//     let regressivo = cpf.lenght + 1;
//     const total = cpf.reduce((ac, val) => {
//         ac += regressivo * Number(val);
//         regressivo--;
//         return ac;
//     }, 0)
// }
function primNum(cpf) {
    cpf = Number(cpf)
    for (let i = 0; i < cpf.lenght; i++) {
        cpf[i] = cpf[i] * ((cpf.lenght + 1) - i)
        return console.log(i);
    }
}

const p1 = new CPF('091.759.719-25');
p1.cpfLimpo();
primNum(p1);
console.log(p1)