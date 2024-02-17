// Escreva uma função que recebe um número e retorne o seguinte:
// Número é divisível por 3 = Fizz
// Número é divisível por 5 = Buzz
// Número é divisível por 3 e 5 = FizzBuzz
// Número não é divisível por 3 e 5 = Retorna o próprio número
// Checar se o número é realmente um número = Retorna o próprio número
// Use a função com o númesros de 0 a 100 (um laço)


function numDiv5e3(){
    for (let i= 0; i<= 10; i++){
        if (i % 3 === 0) return 'Fizz'; else if(i % 5 === 0) return 'Buzz';
        console.log(i);
    }     
}
numDiv5e3();