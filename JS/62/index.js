// Valor por referência
//                 0          1       2
// const nomes = ['Eduardo', 'Maria', 'Joana', 'Wallace', 'Rosana']; // Array literal
// const novo = nomes.slice(0,-1); // .slice -> fatia, do elemento x ao y
// console.log(novo);  // cortou 1 antes do ultimo escrito
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
// nomes.unshift('João');  // .unshift -> Insere um elemento no inicio do array 
// nomes.unshift('Wallace');   
// console.log(nomes);

// const nome = 'Luiz Otávio Miranda';
// const nomes = nome.split(' ');  // .split -> converte em array
// console.log(nomes);

const nomes = [ 'Luiz', 'Otávio', 'Miranda' ];
const nome = nomes.join(' ');   // .join -> converte em array
console.log(nome);  