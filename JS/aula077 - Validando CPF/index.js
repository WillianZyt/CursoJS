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
let cpf;
function verificaCPF(cpf) {
    let cpfLimpo = cpf.replace(/\D+/g, ''); // (/\D+/g, '') -> para remover todo item que NaN
    cpfArray = Array.from(cpfLimpo);
    cpfArray = cpfArray.slice(0, -2);
    let primDigDoCPF;
    valPrimDigDoCPF = (num) => {
        num = this.cpfArray;
        function multiplicaCPF() {
            cpfArray[0] = cpfArray[0] * 10;
            cpfArray[1] = cpfArray[1] * 9;
            cpfArray[2] = cpfArray[2] * 8;
            cpfArray[3] = cpfArray[3] * 7;
            cpfArray[4] = cpfArray[4] * 6;
            cpfArray[5] = cpfArray[5] * 5;
            cpfArray[6] = cpfArray[6] * 4;
            cpfArray[7] = cpfArray[7] * 3;
            cpfArray[8] = cpfArray[8] * 2;
            return cpfArray;
        }
        cpfArray = multiplicaCPF(cpfArray).reduce((ac, val) => {
            return ac + val;
        }, 0);
        cpfArray = 11 - (cpfArray % 11);
        return cpfArray;
    }
    console.log(valPrimDigDoCPF());
}
verificaCPF('705.484.450-52');