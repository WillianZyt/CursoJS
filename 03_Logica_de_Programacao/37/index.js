// Uso do for
// For clássico -> Geralmente com iteráveis (arry ou strings)
// For in -> Retorna o índice ou chave (string, array ou objetos)
// For of -> Retorna o valor em si (iteráveis, arryas ou strings)
const nome = 'Willian Zytkoski';

for (let i in nome){
    console.log(nome[i]);
};

console.log('####')

for (let valor of nome){
    console.log(valor);
};

nome.forEach(function(valor, indice, array){
    console.log(valor, indice, array);
});