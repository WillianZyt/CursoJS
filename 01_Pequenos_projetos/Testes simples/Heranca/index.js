class Veiculo {
  constructor(tipo, marca, modelo) {
    this.tipo = tipo;
    this.marca = marca;
    this.modelo = modelo;
  }
  carroCompleto = function (marca, modelo) {
    return `Seu veiculo é um ${this.marca} ${this.modelo}?`
  }
}

class Onibus extends Veiculo {
  constructor(tipo, marca, modelo, ano) {
    super(tipo, marca, modelo),
      this.ano = ano;
  }
  velMaxPerm = function () {
    console.log(`A velocidade máxima do ${this.marca} ${this.modelo} do ano ${this.ano} é de 90km/h.`);
  }
}

Onibus.prototype.TamDaString = function () {
  const numStr = this.marca.length
}
const o1 = new Onibus('Onibus', 'Mercedes', 'B200', 2020);

function primeiraFuncao(){
  return new Promise((resolve, reject) =>{
    setTimeout(()=>{
      console.log('Esperou isso aqui!');
      resolve();
    }, 2000)
  });
}

async function segundaFuncao(){
  console.log('Iniciou');
  await primeiraFuncao();
  console.log('Terminou');
}
// segundaFuncao()

// prático
function getUser(id){
  return fetch(`https://reqres.in/api/users?id=${id}`)
  .then((data) => data.json())
  .catch((e) => console.log(e))
}

async function showUserName(id){
  const user = await getUser(id);
  console.log(`O nome do usuário é: ${user.data.first_name}`);
}
showUserName(3);