// Factory functions (Função fábrica)
function criaPessoa(nome, sobrenome, altura, peso) {
    return {
        nome,
        sobrenome,
        // Getter
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        },
        // Setter
        set nomeCompleto(valor) {
            // split -> para dividir, e ('') é onde esta separando. E vai retornar um array
            valor = valor.split(" ");
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
            // console.log(valor);
        },

        fala(assunto = 'falando sobre NADA.') {
            // mesmo que -> fala: function(assunto) {}
            return `${this.nome} está ${assunto}.`;
        },
        altura: altura,
        peso: peso,

        // Getter
        get imc() { // get-> fingi ser um atributo do objeto
            const indice = this.peso / this.altura ** 2;
            return indice.toFixed(2);
        }
    };
}
const p1 = criaPessoa("Luiz", "Otávio", 1.8, 80);
// const p2 = criaPessoa("Ana Cristina", "M. Zytkoski", 1.6, 56);
// console.log(p2.fala("falando sobre JS."));
// console.log(p2.imc());
// console.log(p2.imc);
// console.log(p2.nomeCompleto);
// p1.nomeCompleto = 'Maria Oliveira Silva';
// console.log(p1.nome);
// console.log(p1.sobrenome);
// console.log(p1.nomeCompleto);
// console.log(p1.fala());

const p2 = criaPessoa("João", "Otávio", 1.8, 57);
const p3 = criaPessoa("Junior", "Otávio", 1.5, 110);
console.log(p3.imc);
console.log(p2.imc);
console.log(p1.imc);