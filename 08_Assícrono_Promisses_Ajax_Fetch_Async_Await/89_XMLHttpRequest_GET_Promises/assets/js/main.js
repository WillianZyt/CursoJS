const request = obj => {
  const xhr = new XMLHttpRequest();
  xhr.open(obj.method, obj.url, true);
  xhr.send();

  xhr.addEventListener('load', () => {
    if (xhr.status >= 200) {
      obj.succes(xhr.responseText);
    } else {
      obj.error(xhr.statusText);
    }
  });
};

document.addEventListener('click', e => {
  const el = e.target;
  const tag = el.tagName.toLowerCase();

  if (tag === 'a') {
    e.preventDefault();
    carregaPagina(el);
  }
})
function carregaPagina() {
  const href = el.getAttribute('href');
  
  request({
    method: 'GET',
    url: href,
    succes(response){
      carregResultado(response);
    },
    error(errorText){
      console.log(errorText);
    }
  });
}
function carregResultado(response){
  const resultado = document.querySelector('.resultado');
  resultado.innerHTML = response;
}