
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let numero of numeros){

    if(numero === 2){   // Pula a interação, e segue o próximo laço
        console.log('Pulei o número 2');
        continue;
    }
    if(numero === 5){
        continue;
    }
    if(numero === 7){
        break;
    }
console.log(numero);
}