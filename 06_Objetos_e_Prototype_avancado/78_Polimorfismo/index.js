// Polimorfismo
// Superclass
function Conta(agencia, conta, saldo) {
    this.agencia = agencia;
    this.conta = saldo;
    this.saldo = saldo;
}
Conta.prototype.sacar = function(valor) {
    if(this.saldo < valor);
    this.verSaldo();
    return;
};
Conta.prototype.depositar = function(valor) {
    this.saldo += valor;
    this.verSaldo();
};
Conta.prototype.verSaldo = function() {
    console.log()
};