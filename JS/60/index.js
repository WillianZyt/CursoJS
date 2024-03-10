 function recursiva(max){       // Função que se chama de volta, parecido com Loop for. Tem limite.
    console.log(max);
    if (max >=10) return;
    max++;
    recursiva(max);
 }
 recursiva(0);
