// CONTINUE/BREAK
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let numero of numeros){

    if(numero === 2){   // Pula a interação, e segue o próximo laço até o fim
        console.log('Pulei o número 2');
        continue;
    }
    if(numero === 5){
        continue;
    }
    if(numero === 7){   // Para na interação, para no laço
        break;
    }
console.log(numero);
}


let i = 0;
while (i < numeros.length){
    let = numero = numeros[i];
    if (numero === 2){
        console.log('Pulei o número 2 ');
        i++;            // Variavel de controle antes do CONTINUE/BREAK
        continue;
    }


}