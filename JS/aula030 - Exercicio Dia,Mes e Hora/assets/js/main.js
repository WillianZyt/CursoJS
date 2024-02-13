
const data = new Date('2019-10-07 22:52');
let diaSemana = data.getDay();
let dia = data.getDate();
let mes = data.getMonth();
let ano = data.getFullYear();
let hora = data.getHours();
let min = data.getMinutes();

function getDiaSemanaTexto(diaSemana) {
    let diaSemanaTexto;
    if (diaSemana === 0) {
        return diaSemanaTexto= 'Domingo';
    } else if (diaSemana === 1) {
        return diaSemanaTexto= 'Segunda-feira';
    } else if (diaSemana === 2) {
        return diaSemanaTexto= 'Terça-feira';
    } else if (diaSemana === 3) {
        return diaSemanaTexto= 'Quarta-feira';
    } else if (diaSemana === 4) {
        return diaSemanaTexto= 'Quinta-feira';
    } else if (diaSemana === 5) {
        return diaSemanaTexto= 'Sexta-feira';
    } else if (diaSemana === 6) {
        return diaSemanaTexto= 'Sábado';
    }
}

function getMesTexto(mes) {
    let mesTexto;
    if (mes === 0) {
        return mesTexto= 'Janeiro';
    } else if (mes === 1) {
        return mesTexto= 'Fevereiro';
    } else if (mes === 2) {
        return mesTexto= 'Março';
    } else if (mes === 3) {
        return mesTexto= 'Abril';
    } else if (mes === 4) {
        return mesTexto= 'Maio';
    } else if (mes === 5) {
        return mesTexto= 'Junho';
    } else if (mes === 6) {
        return mesTexto= 'Julho';
    } else if (mes === 7) {
        return mesTexto= 'Agosto';
    } else if (mes === 8) {
        return mesTexto= 'Setembro';
    } else if (mes === 9) {
        return mesTexto= 'Outubro';
    } else if (mes === 10) {
        return diaSemanaTexto= 'Novembro';
    } else if (mes === 11) {
        return mesTexto= 'Dezembro';
    }
}


let = mesTexto = getMesTexto(mes);
let = diaSemanaTexto = getDiaSemanaTexto(diaSemana);
let diaDeHoje = document.querySelector('.diaDeHoje');
diaDeHoje.innerHTML = `${diaSemanaTexto}, ${dia} de ${mesTexto} de ${ano} </br> ${hora}:${min}`;

console.log(`${diaSemanaTexto}, ${dia} de ${mesTexto} de ${ano} \n ${hora}:${min}`);


// Caminho mais rapido, uso de dom
// const h1 = document.querySelector('.container h1');
// h1.innerHTML = 'Só para testar';