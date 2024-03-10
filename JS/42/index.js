// Escreva uma função chamada ePaisagem que recebe dois argumentos,
// largura e altura de uma imagem (number).
// Retorne true se a imagem estiver no modo paisagem.

function ePaisagem(x, y){
    if (x > y) return true;else false;
}
console.log(ePaisagem(10, 2));

// ePaisagem2 = (x,y) => x > y ? true : false;
// console.log(ePaisagem2(10, 2));

function ePaisagem2(largura, altura){
    return largura > altura ? true : false; // pode remover o (? true : false), pois ja retorna em boolean
}
console.log(ePaisagem2(1920, 1080));