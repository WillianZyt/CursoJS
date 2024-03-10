// Objetos
//     const pessoa1 = {       // Dentro de {} => Objeto       Dentro de [] => Array
//     nome: 'Willian ',
//     sobrenome: 'Zytkoski',
//     idade: 29
// };
// const pessoa2 = {
//     nome: 'Ana Cristina M. ',
//     sobrenome: 'Zytkoski',
//     idade: 29
// };
//  console.log(`${pessoa1.nome+pessoa1.sobrenome} é casado com ${pessoa2.nome+pessoa2.sobrenome}`);


// function criaPessoa (nome, sobrenome, idade) {
//     return {
//         nome: nome,
//         sobre: sobrenome,
//         idade: idade
//     };
// }
// function criaPessoa (nome, sobrenome, idade) {      // Simplificado
//     return {nome, sobrenome, idade}
// }

// const pessoa1  = criaPessoa('Willian', 'Zytkoski', 25);
// console.log(pessoa1.nome);



const pessoa1 = {
    nome: 'Willian ',
    sobrenome: 'Zytkoski',
    idade: 29,
    
    fala() {
        console.log(`${this.nome} ${this.sobrenome} está falando oi...`);        // This é para o objeto pessoa1
    },

    incrementaIdade() {
        this.idade++;
        console.log(`Minha idade atual é de ${this.idade} anos.`);
    }
};
pessoa1.fala();
console.log(`Eu tinha ${pessoa1.idade} anos, em 2023.`)
pessoa1.incrementaIdade();
pessoa1.incrementaIdade();
pessoa1.incrementaIdade();
pessoa1.incrementaIdade();
pessoa1.incrementaIdade();