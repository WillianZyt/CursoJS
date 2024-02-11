// Capturar evento de submit do formulário
const form = document.querySelector('#formulario');

form.addEventListener('submit', function(e){        //e = evento
    e.preventDefault();
    console.log('Evento prevenido.');
    setResultado('Olá mundo!');
});

function setResultado (msg) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';
    const p = document.createElement('p');  //Criar elementro novo-> p= paragrafo
    p.innerHTML = 'Qualquer coisa.';
    resultado.appendChild(p);
}
