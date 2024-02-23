// IIFE -> Immediately invoked function expression
// Funções imediatas ou Funções auto invocadas 

(function (idade, peso, altura) {
    // console.log("Ola mundo");
    const sobrenome = 'Zytkoski';
    function criaNome(nome){
      return nome + ' ' + sobrenome;
    }
    function falaNome(){
      console.log(criaNome('Willian'));
    }
    falaNome();
    console.log(idade, peso, altura)
  })(29, 92, 1.85);