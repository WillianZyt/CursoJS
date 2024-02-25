function criaCalculadora() {
    return {
      display: document.querySelector(".display"),
  
      inicia() {
        this.cliqueBotoes();
      },
  
      cliqueBotoes() {
        // this -> calculadora
        document.addEventListener("click", function (e) {
          const el = e.target;
          console.log(this);
  
          if (el.classList.contains("btn-num")) {
            this.btnParaDisplay();
          }
        });
      },
      btnParaDisplay() {}
    };
  }
  
  const calculadora = criaCalculadora();
  calculadora.inicia();
  