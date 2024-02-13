function getDiaSemanaTexto(diaSemana) {
    let = diaSemanaTexto;

    switch (diaSemana) {
    case 0:
        diaSemanaTexto = 'Domingo';
        return diaSemanaTexto;
    case 1:
        diaSemanaTexto = 'Segunda';
        return diaSemanaTexto;
    case 2:
        diaSemanaTexto = 'Terça';
        return diaSemanaTexto;
    case 3:
        diaSemanaTexto = 'Quarta';
        return diaSemanaTexto;
    case 4:
        diaSemanaTexto = 'Quinta';
        return diaSemanaTexto;
    case 5:
        diaSemanaTexto = 'Sexta';
        return diaSemanaTexto;
    case 6:
        diaSemanaTexto = 'Sábado';
        return diaSemanaTexto;
    default:
        return diaSemanaTexto = '';
    }
}

const data = new Date('1987-04-21 00:00:00');
let diaSemana = data.getDay();
let diaSemanaTexto = getDiaSemanaTexto(diaSemana);

console.log(diaSemana, diaSemanaTexto);


// switch (diaSemana) {
// case 0:
//     diaSemanaTexto = 'Domingo';
//     break;
//     case 1:
//     diaSemanaTexto = 'Segunda';
//     break;
//     case 2:
//     diaSemanaTexto = 'Terça';
//     break;
//     case 3:
//     diaSemanaTexto = 'Quarta';
//     break;
//     case 4:
//     diaSemanaTexto = 'Quinta';
//     break;
//     case 5:
//     diaSemanaTexto = 'Sexta';
//     break;
//     case 6:
//     diaSemanaTexto = 'Sábado';
//     break;
// }
// console.log(diaSemanaTexto);

// if (diaSemana === 0) {
//     diaSemanaTexto = 'Domingo';
// } else if (diaSemana === 1) {
//     diaSemanaTexto = 'Segunda';
// } else if (diaSemana === 2) {
//     diaSemanaTexto = 'Terça';
// } else if (diaSemana === 3) {
//     diaSemanaTexto = 'Quarta';
// } else if (diaSemana === 4) {
//     diaSemanaTexto = 'Quinta';
// } else if (diaSemana === 5) {
//     diaSemanaTexto = 'Sexta';
// } else if (diaSemana === 6) {
//     diaSemanaTexto = 'Sábado';
// }
// console.log(diaSemanaTexto);