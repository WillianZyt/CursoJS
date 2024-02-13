// Repetição clássica

// i - index
// i++ // i += ''
// for (let i = 0; i<=500; i += 10 ) {
//     console.log(`Linha ${i}`);
// }
// for (let i = 500; i >= 400; i -= 10 ) {
//     console.log(`Linha ${i}`);
// }

for (let i = 0; i <= 10; i ++) {
    const par = i % 2 === 0 ? 'Par' : 'Ímpar';
    console.log(i, par);
}

const frutas = ['Maçã', 'Pêra', 'Uva', 'Banana', 'Melância', 'Abacaxi']

for (let i = 0; i < frutas.length; i ++) {
    console.log(`Índice ${i}`, frutas[i]);
}