// Factory functions (Função fábrica)
function criaPessoa(nome, sobrenome, altura, peso) {
    return {
      nome,
      sobrenome,
      // Getter
      get nomeCompleto() {
        return `${nome} ${sobrenome}`;
      },
      // Setter
      set nomeCompleto(valor) {
        valor = valor.split(" "); // split -> para dividir, e ('') é onde esta separando. E vai retornar um array
        console.log(valor);
      },
  
      fala(assunto) {
        // mesmo que -> fala: function(assunto) {}
        return `${this.nome} está ${assunto}.`;
      },
      altura: altura,
      peso: peso,
      // Getter
      get imc() {
        // get-> fingi ser um atributo do objeto
        const indice = this.peso / this.altura ** 2;
        return indice.toFixed(2);
      }
    };
  }
  const p1 = criaPessoa("Willian", "Zytkoski", 1.85, 92);
  const p2 = criaPessoa("Ana Crisitna", "M. Zytkoski", 1.6, 56);
  console.log(p2.fala("falando sobre JS."));
  // console.log(p2.imc());
  console.log(p2.imc);
  console.log(p2.nomeCompleto);
  p2.nomeCompleto = 'Maria Oliveira Silva'
  