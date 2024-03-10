// Declarar função (Função Hoisting-> levado para o topo do arquivo a Função)
falaOi();
function falaOi(){
    // console.log('Oie.');
}

// First-class objects (Objeto de primeira classe)
// Function expression
const souUmDado = function(){
    // console.log('Sou um dado.');
}

function executaFuncao(funcao){
    // console.log('Vou executar sua função abaixo.')
    funcao();
}
executaFuncao(souUmDado);

// Arrow function
const funcaoArrow = () => {
    // console.log('Sou uma arrow funcion.');
}
funcaoArrow();

// Dentro de um objeto
const obj = {
    falar: function(){          //ou, usar-> falar() {}
        console.log('Estou falando...');
    }
}

obj.falar();