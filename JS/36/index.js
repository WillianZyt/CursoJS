// For in -> Lê os índices ou chaves do objeto
//                 0       1      2

const pessoa = {
    nome: 'Willian',
    sobrenome: 'Zytkoski',
    idade: '29'
};

for (let chave in pessoa){
    console.log(chave, pessoa[chave]);
};

// const frutas = ['Pêra', 'Maçã', 'Uva'];

// for (let i in frutas){
//     console.log(frutas[i]);
// }
