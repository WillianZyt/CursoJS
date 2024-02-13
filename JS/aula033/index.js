// Atribuição via desestruturação (Objetos)
const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 30,
    endereço:{
        rua: 'Av Brasil',
      numero: 320
      }
  };
  const { nome, sobrenome } = pessoa;
  // const { nome: teste = '', sobrenome } = pessoa;
  console.log(nome, sobrenome);
  const {endereço: {rua, numero}} = pessoa;
  console.log(rua, numero);