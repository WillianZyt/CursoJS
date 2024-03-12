// Funções de callback
function rand(min = 1000, max = 3000) {    // Função número aleatório entre 1000 e 3000
    const num = Math.random() * (max - min) + min;
    return Math.floor(num);
  }
  
  function f1(callback) {
    setTimeout(function () {
      console.log('f1');
      if (callback) callback();
    }, rand);
  }
  
  function f2(callback) {
    setTimeout(function () {
      console.log('f2');
      if (callback) callback();
    }, rand);
  }
  
  function f3(callback) {
    setTimeout(function () {
      console.log('f3');
      if (callback) callback();
    }, rand);
  }
  
  // f1(function(){             // Vai virar uma árvore de natal
  //   f2(function(){
  //     f3(function(){
  //       console.log('Ola mundo.')
  //     })
  //   })
  // })
  
  f1(f1Callback);         // Sem funções anônimas, e sem árvore de natal
  
  function f1Callback(){
    f2(f2Callback)
  }
  function f2Callback(){
    f3(f3Callback)
  }
  function f3Callback(){
    console.log('Ola mundo!')
  }
  