function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => { // não é obrigatório o uso de 'resolve, reject', mas é o padrão usado pelo dev
        setTimeout(() => {
            if (typeof msg !== 'string') {
                reject('CAI NO ERRO')
                return;
            }

            resolve(msg.toUpperCase() + ' - Passei na promise');
            return;
        }, tempo);
    });
}
// Promisse.all Promisse.race Promisse.resolve Promisse.reject

function baixaPagina(){
    const emCache = true;

    if(emCache){
        return Promise.resolve('Pagina em cache');  //Promise.resolve -> leva para o .then (true) 
    } else {                                        //Promise.reject -> leva para o .catch (false) 
        return esperaAi('Baixei a página', 3000)
    }
}

baixaPagina()
.then(dadosPagina =>{
    console.log()
})
.catch(e => console.log(e))

// const promises = [
//     esperaAi(111, rand(1, 5)),
//     esperaAi('Promise 1', rand(1, 5)),
//     esperaAi('Promise 2', rand(1, 5)),
//     esperaAi('Promise 3', rand(1, 5)),
// ];
// Promise.race(promises)   // Promise.race - > para entregar a primeira que for resolvida
//     .then(function (valor) {
//         console.log(valor);
//     })
//     .catch(function (erro) {
//         console.log(erro);
//     })

// Promise.all(promises)   // Promise.all -> para resolver todas
//     .then(function (valor) {
//         console.log(valor);
//     })
//     .catch(function (erro) {
//         console.log(erro);
//     })