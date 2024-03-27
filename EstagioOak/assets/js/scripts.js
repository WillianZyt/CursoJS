function criaProduto() {
  const nome = document.querySelector('.nome');
  const descricao = document.querySelector('.desc-prod');
  const valor = document.querySelector('.valor');
  const formulario = document.querySelector(".formulario");
  const boxS = document.querySelector('.boxs')
  const boxN = document.querySelector('.boxn')

  formulario.addEventListener("submit", e => {
    e.preventDefault();
    console.log('Seu produto foi cadastrado com sucesso.');
    cadastraProduto(nome.value, 'Nome');
    cadastraProduto(descricao.value, 'Descrição');
    cadastraProduto(valor.value, 'Valor');
  })

  function cadastraProduto(campo1, campo2) {
    const campoDesc = campo1;
    const nomeDesc = campo2
    criaTexto(campoDesc, nomeDesc)
  }
  function criaTexto(campoDesc, nomeDesc) {
    const li = criaLi();
    li.innerText = `${nomeDesc}: ${campoDesc}`;
    formulario.appendChild(li)
  }
  function criaLi() {
    const li = document.createElement('p');
    li.classList.add('novalinha')
    return li;
  }
}
const p1 = new criaProduto()
