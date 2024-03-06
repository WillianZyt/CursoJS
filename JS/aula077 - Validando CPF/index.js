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
    let cpfArray = Array.from(cpfLimpo);
    cpfArray = cpfArray.slice(0, -2);
    let primDigDoCPF;
    let segDigDoCPF;
    valPrimDigDoCPF = () => {
        let numCPF = cpfArray.map((num) => num);
        // console.log(numCPF);
        function multiplicaCPF() {
            for (let i =0; i<numCPF.length; i++ ){
                numCPF[i] = numCPF[i] * ((numCPF.length+1) - i);
            }
            return numCPF;
        }
        numCPF = multiplicaCPF(numCPF).reduce((ac, val) => {
            return ac + val;
        }, 0);
        numCPF = 11 - (numCPF % 11);
        return numCPF;
        // return primDigDoCPF;
    }
    primDigDoCPF = valPrimDigDoCPF();
    cpfArray.push(primDigDoCPF);
    // segDigDoCPF = valPrimDigDoCPF();
    console.log(cpfArray);
}
verificaCPF('705.484.450-52');