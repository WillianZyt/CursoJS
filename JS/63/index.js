//               -5       -4       -3          -2      -1
//                0        1        2           3       4
const nomes = [ 'Luiz', 'João', 'Eduardo', 'Gabriel', 'Júlia'];

//nomes.splice(índice, delete, elem1, elem2, elem3);

// pop
const removidos = nomes.splice(-1, 1);
console.log(nomes,removidos); 

// const removidos = nomes.splice(4, 1);
// console.log(nomes,removidos); 
// [ 'Luiz', 'João', 'Eduardo', 'Gabriel' ] [ 'Júlia' ]

//  vai add a partir do indice 3
// const removidos = nomes.splice(3, 0, 'Luiz');
// console.log(nomes,removidos); 
//[ 'Luiz', 'João', 'Eduardo', 'Luiz', 'Gabriel', 'Júlia' ] []

//  vai substituir o indice 3
// const removidos = nomes.splice(3, 1, 'Luiz');
// console.log(nomes,removidos); 
//[ 'Luiz', 'João', 'Eduardo', 'Luiz', 'Júlia' ] [ 'Gabriel' ]