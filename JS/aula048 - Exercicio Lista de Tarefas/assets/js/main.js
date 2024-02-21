const inputTarefa = document.querySelector('.input-tarefa')
const btnTarefa = document.querySelector('.btn-tarefa')
const tarefas = document.querySelector('.tarefas')

function criaLi() {
    const li = document.createElement('li');
    return li;
}

inputTarefa.addEventListener('keypress', function (e) {   // tecla pressionada 13=ENTER
    if (e.keyCode === 13) {
        if (!inputTarefa.value) return;
        criaTarefa(inputTarefa.value);
    }
})

function limpaInput() {
    inputTarefa.value = '';
    inputTarefa.focus();
}

function criaBotaoApagar(li) {
    li.innerText += ' ';
    const botaoApagar = document.createElement('button');
    botaoApagar.innerHTML = 'Apagar';
    botaoApagar.setAttribute('class', 'apagar');
    botaoApagar.setAttribute('title', 'Apagar esta tarefa');
    li.appendChild(botaoApagar);
}

function criaTarefa(textoInput) {
    const li = criaLi();
    li.innerText = textoInput;
    tarefas.appendChild(li);
    limpaInput();
    criaBotaoApagar(li);
    salvarTarefas()
}

btnTarefa.addEventListener('click', function () {
    if (!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);
})

document.addEventListener('click', function (e) {
    const el = e.target;
    if (el.classList.contains('apagar')) {
        // console.log('Apagar clicado')
        el.parentElement.remove();      // remover pai
        salvarTarefas();    // para apagar do storage tambem
    }
});

function salvarTarefas() {
    const liTarefas = tarefas.querySelectorAll('li')
    // console.log(liTarefas)
    const listaDeTarefas = [];

    for (let tarefa of liTarefas) {
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim(); // .trim() para remover espaco entre texto e fim do texto
        listaDeTarefas.push(tarefaTexto);
        // console.log(tarefaTexto);
    }
    const tarefasJSON = JSON.stringify(listaDeTarefas);      //JSON -> Arquivo de dados, entre sistemas. Pode salvar no computador e manipula-lo
    localStorage.setItem('tarefas', tarefasJSON);            // localStorage -> Como uma mini base de dados o navegador. Global do navegador
    // console.log(listaDeTarefas);                         // JSON.stringify -> Transforma um elemento JS para uma string JSON
}

function adicionaTarefasSalvas() {
    const tarefas = localStorage.getItem('tarefas');
    const listaDeTarefas = JSON.parse(tarefas);     // JSON.parse - > Converte novamente, agora para Array!
    // console.log(tarefas);

    for (let tarefa of listaDeTarefas){
        criaTarefa(tarefa);
    }
}
adicionaTarefasSalvas();