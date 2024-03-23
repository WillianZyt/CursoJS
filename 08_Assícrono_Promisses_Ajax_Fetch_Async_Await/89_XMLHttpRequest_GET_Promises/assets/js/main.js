const request = obj => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(obj.method, obj.url, true);
    xhr.send();

    xhr.addEventListener('load', () => {
      if (xhr.status >= 200) {
        resolve(xhr.responseText);
      } else {
        reject(xhr.statusText);
      }
    });

  });
  //   const xhr = new XMLHttpRequest();
  //   xhr.open(obj.method, obj.url, true);
  //   xhr.send();

  //   xhr.addEventListener('load', () => {
  //     if (xhr.status >= 200) {
  //       obj.succes(xhr.responseText);
  //     } else {
  //       obj.error(xhr.statusText);
  //     }
  //   });
  // };

  document.addEventListener('click', e => {
    const el = e.target;
    const tag = el.tagName.toLowerCase();

    if (tag === 'a') {
      e.preventDefault();
      carregaPagina(el);
    }
  })
  async function carregaPagina(el) {
    const href = el.getAttribute('href');

    const objConfig = {
      method: 'GET',
      url: href
    };

    const response = await request(objConfig);
    carregResultado(response);
      // .then(response => {
      //   carregResultado(response);
      // }).catch(error => console.log(error));
  }

  function carregResultado(response) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = response;
  }

}