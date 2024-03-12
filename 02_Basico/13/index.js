//              0123456789
let umaString = "Um \"texto\"";
console.log(umaString[4]);
console.log(umaString.charAt(6));

console.log(umaString.concat(' em um lindo dia.'));
console.log(umaString + ' em um lindo dia.');
console.log(`${umaString} em um lindo dia.`);

console.log(umaString.indexOf('o', 3));     // De onde comeca
console.log(umaString.search(/x/));

umaString = 'O rato roeu a roupa do rei de Roma.'
console.log(umaString.replace(/r/, '#'));
console.log(umaString.replace(/r/g, '#'));      // Com  //g altera todas as letras selecionadas
console.log(umaString.length);  // Tamanho da String
console.log(umaString.slice(-5, -1));  //Cortar a string  -> Entre elas (1, 2)

console.log(umaString.split(' '), 3);
console.log(umaString.toUpperCase()); // Para maiusculo
console.log(umaString.toLowerCase());  // Para minusculo