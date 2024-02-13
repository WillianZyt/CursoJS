// const elementos = [
//     {tag: 'p', texto: 'Frase 1'},
//     {tag: 'div', texto: 'Frase 2'},
//     {tag: 'footer', texto: 'Frase 3'},
//     {tag: 'section', texto: 'Frase 4'}
// ];
// const {texto: texto0 } = elementos[0];
// const {texto: texto1 } = elementos[1];
// const {texto: texto2 } = elementos[2];
// const {texto: texto3 } = elementos[3];
// console.log(texto0, texto1, texto2, texto3);

const para = document.createElement('p');
const texto = document.createTextNode('Texto teste!');
para.appendChild(texto);

const div = document.getElementById('div1');
div.innerHTML(para);