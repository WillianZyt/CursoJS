// Factory functions
function criaPessoa(nome, sobrenome){
    return {
      nome,
      sobrenome,
      fala(assunto) {   // mesmo que -> fala: function(assunto) {}
        return `${this.nome} está ${assunto}.`;
      },
      // peso: 80
    };
  }
  const p1 = criaPessoa('Willian', 'Zytkoski');
  console.log(p1.fala('falando sobre JS.'));