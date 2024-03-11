// Polimorfismo
// Superclass
function Conta(agencia, conta, saldo) {
    this.agencia = agencia;
    this.conta = saldo;
    this.saldo = saldo;
}
Conta.prototype.sacar = function() {};
Conta.prototype.depositar = function() {};
Conta.prototype.verSaldo = function() {};