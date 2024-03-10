// try {   // Testar o código
//     console.log(naoExisto);
//     } catch(erro){  // ao ver o erro, manda essa msg
//       console.log('naoExisto não existe.')
//       console.log(erro);
//     }

function soma(x, y){
    if(typeof x !== 'number' ||
       typeof y !== 'number'){
       throw new Error('x e y precisam ser números.');
    }
    return x + y;
}

console.log(soma(1,'b'));