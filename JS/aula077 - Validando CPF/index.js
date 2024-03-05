// 705.484.450-52 070.987.720-03
/*
7x  0x 5x 4x 8x 4x 4x 5x 0x
10  9  8  7  6  5  4  3  2
70  0  40 28 48 20 16 15 0 = 237

11 - (237 % 11) = 5 (Primeiro dígito)
Se o número digito for maior que 9, consideramos 0.

7x  0x 5x 4x 8x 4x 4x 5x 0x 5x
11 10  9  8  7  6  5  4  3  2
77  0  45 32 56 24 20 20 0  10 = 284

11 - (284 % 11) = 2 (Primeiro dígito)
Se o número digito for maior que 9, consideramos 0.
*/

function verificaCPF(num) {
    let cpf = '705.484.450-52';
    let cpfLimpo = cpf.replace(/\D+/g, ''); // (/\D+/g, '') -> para remover todo item que NaN
    cpfArray = Array.from(cpfLimpo);
    cpfArray = cpfArray.slice(0, -2);
    // console.log(cpfArray);
    cpfArray = parseInt(cpfArray);
    function multiplicaCPF() {
        this.cpfArray[0] * 10;
        this.cpfArray[1] * 9;
        this.cpfArray[2] * 8;
        this.cpfArray[3] * 7;
        this.cpfArray[4] * 6;
        this.cpfArray[5] * 5;
        this.cpfArray[6] * 4;
        this.cpfArray[7] * 3;
        this.cpfArray[8] * 2;
        return cpfArray;
    }
    console.log(cpfArray);
}

verificaCPF();