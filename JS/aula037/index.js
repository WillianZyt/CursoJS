// For of
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