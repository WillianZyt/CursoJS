// Operação ternária = if else, mas código mais curto
// (copndição) ? 'Valor para verdadeiro' : 'Valor para falso';
const pontucaoUsuario = 1000;
const nivelUsuario = pontucaoUsuario >=1000 ? 'Usuário VIP' : 'Usuário normal';

const corUsuario = 'Pink';
const corPadrao = corUsuario || 'Preta';

console.log(nivelUsuario, corPadrao);
