// Valor por referência
//
const nomes = ['Eduardo', 'Maria', 'Joana']; // Array literal
// const nomes = new Array('Eduardo', 'Maria', 'Joana');
// const novo = [...nomes];

// novo.pop();  //.pop -> Remove o último elemento de um array
// console.log(nomes);
// //["Eduardo","Maria","Joana"]
// console.log(novo);
// //["Eduardo","Maria"]

// const removido = nomes.shift(); // .shift -> Remove o primeiro elemento de um array 
// nomes.push('João');  // .push -> Insere um elemento no inicio do array
// nomes.push('Wallace');  
nomes.unshift('João');  // .unshift -> Insere um elemento no inicio do array 
nomes.unshift('Wallace');   
console.log(nomes);