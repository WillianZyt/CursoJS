// Revisando objetos
const pessoa = {
    // {} corpo do objeto
    nome: "Luiz", // nome:, sobrenome:, são as chaves do objeto
    sobrenome: "Otávio"
  };
  // console.log(pessoa.nome);       // ou pessoa['nome]
  // console.log(pessoa['sobrenome']);
  
  const pessoa1 = new Object();
  pessoa1.nome = "Luiz";
  pessoa1.sobrenome = "Otávio";
  pessoa1.idade = 0;
  // console.log(`${pessoa1.nome} ${pessoa1.sobrenome}`);
  // delete pessoa1.nome  // para deletar a chave nome
  pessoa1.falarNome = function () {
    // método é a função dentro do objeto
    return (`${this.nome} está falando seu nome.`);
  };
  pessoa1.getDataDascimento = function(){
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade;
  };
  for (let chave in pessoa1){
    console.log(chave);
  }
  