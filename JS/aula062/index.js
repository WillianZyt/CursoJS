// Valor por referência
//
// const nomes = ['Eduardo', 'Maria', 'Joana']; // Array literal
const nomes = new Array('Eduardo', 'Maria', 'Joana');
const novo = [...nomes];

novo.pop();
console.log(nomes);
//["Eduardo","Maria","Joana"]
console.log(novo);
//["Eduardo","Maria"]