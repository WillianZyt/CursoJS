// Object.values    (retorna os valores)
// Object.entries   (retorna as chaves e os valores)
// Object.assign(des, any)  -> para copiar o objeto/ spread é mais intuitivo
// Object.getOwnPropertyDescriptor(o, 'prop')
// ... (spread)

// //Já vimos
// Object.keys (retorna as chaves)
// Object.freeze   (congela o objeto)
// Object.defineProperties (define várias propriedades)
// Object.defineProperty   (define uma propriedade)

const produto = {nome: 'Produto', preco: 1.8};
console.log(Object.values(produto));

// Object.defineProperty(produto, 'nome', {
//     writable: false,
// })
// console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));

// const caneca = {        //...(objeto) -> para copiar
//     ...produto,
//     material: 'porcelana'
// };
// caneca.nome ='Outro nome';
// caneca.preco=2.5;
// console.log(produto);
// console.log(caneca);