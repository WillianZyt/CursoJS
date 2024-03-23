  document.addEventListener('click', e => {
    const el = e.target;
    const tag = el.tagName.toLowerCase();

    if (tag === 'a') {
      e.preventDefault();
      carregaPagina(el);
    }
  })

function carregaPagina(el) {
    const href = el.getAttribute('href');

    fetch(href)
    .then(response=>{
      if(response.status !== 200) throw new Error('ERROR 404');
      response.text();
    })
    .then(html=>carregResultado(html))
    .catch(e=> console.log(e));
  }

  function carregResultado(response) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = response;
  }

// fetch('pagina1.html')
//   .then(resposta => {
//     if (resposta.status !== 200) throw new Error('ERRO 404 NOSSO');
//   })
//   .then(html =>console.log(html))
//   .catch(e => console.log(e));