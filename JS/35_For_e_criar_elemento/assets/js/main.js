const elementos = [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'footer', texto: 'Frase 3'},
    {tag: 'section', texto: 'Frase 4'}
];

const container = document.querySelector('.container');
const div = document.createElement('div');

for (let i = 0; i< elementos.length; i++){
    let { tag, texto } = elementos[i];
    let tagCriada = document.createElement(tag);
    tagCriada.innerHTML = texto;
    div.appendChild(tagCriada);
}
container.appendChild(div);
div.style.backgroundColor = 'red';


// Como eu resolvi
// function criarParagrafo(msg){
//     const elementoPai = document.querySelector('.container');
//     const novoElemento = document.createElement('p');
//     novoElemento.textContent = msg;
//     elementoPai.appendChild(novoElemento);
// }
//  const p1 = criarParagrafo('Frase 1');
//  const p2 = criarParagrafo('Frase 2');
//  const p3 = criarParagrafo('Frase 3');
//  const p4 = criarParagrafo('Frase 4');