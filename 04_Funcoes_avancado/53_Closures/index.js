// Closures, habilidade da funcao de acessar o escopo lexico, global, etc...
function retornaFuncao(nome) {
    return function(){
        return nome;
    };
}
const funcao = retornaFuncao('Luiz');
const funcao2 = retornaFuncao('João');
console.dir(funcao);
console.dir(funcao2);
console.log(funcao(), 'e', funcao2());