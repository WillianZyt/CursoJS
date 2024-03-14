// const pessoaProtype = {
//     falar() {
//         console.log(`${nome} está falando.`)
//     },
//     comer() {
//         console.log(`${nome} está comendo.`)
//     },
//     beber() {
//         console.log(`${nome} está bebendo.`)
//     }
// }

const falar = {
    falar() {
        console.log(`${nome} está falando.`)
    }
}
const comer = {
    comer() {
        console.log(`${nome} está comendo.`)
    }
}
const beber = {
    beber() {
        console.log(`${nome} está bebendo.`)
    }
}
// const pessoaProtype = { ...falar, ...comer, ...beber};
const pessoaProtype = Object.assign({}, falar, comer, beber)

function CriaPessoa(nome, sobrenome) {
    return Object.create(pessoaProtype, {
        nome: { value: nome },
        sobrenome: { value: sobrenome }
    });
}
const p1 = new CriaPessoa('Willian', 'Zytkoski');
const p2 = new CriaPessoa('Ana Cristina', 'M. Zytkoski');
console.log(p1);
console.log(p2);