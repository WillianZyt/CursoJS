function meuEscopo() {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

        function recebeEventoForm (evento)   {
            evento.preventDefault();

            const peso = form.querySelector('.peso');
            const altura = form.querySelector('.altura');
            const imc = peso * (altura * altura);
            console.log(peso, altura);
            resultado.innerHTML = `<p>Seu IMC é de ${imc}.</p>`;
        }
     }
meuEscopo();