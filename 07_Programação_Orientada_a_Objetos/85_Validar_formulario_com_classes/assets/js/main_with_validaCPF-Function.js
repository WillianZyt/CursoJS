// Conter Nome, CPF, Usuario, Senha, Repetir senha
// Erro, novo paragrafo com erro do que esta faltando

function ValidaCPF(cpfEnviado) {
    Object.defineProperty(this, "cpfLimpo", {
        enumerable: true,
        get: function () {
            return cpfEnviado.replace(/\D+/g, "");
        }
    });
}
ValidaCPF.prototype.valida = function () {
    if (typeof this.cpfLimpo === "undefined") return false;
    if (this.cpfLimpo.length !== 11) return false;
    if (this.isSequencia()) return false;

    const cpfParcial = this.cpfLimpo.slice(0, -2);
    const digito1 = this.criaDigito(cpfParcial);
    const digito2 = this.criaDigito(cpfParcial + digito1);

    const novCPF = cpfParcial + digito1 + digito2;
    return novCPF === this.cpfLimpo;
};

ValidaCPF.prototype.criaDigito = function (cpfParcial) {
    const cpfArray = Array.from(cpfParcial);

    let regressivo = cpfArray.length + 1;
    const total = cpfArray.reduce((ac, val) => {
        ac += regressivo * Number(val);
        regressivo--;
        return ac;
    }, 0);

    const digito = 11 - (total % 11);
    return digito > 9 ? "0" : String(digito);
    console.log(digito);
};
ValidaCPF.prototype.isSequencia = function () {
    const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length);
    return sequencia === this.cpfLimpo;
};

class ValidaFormulario {
    constructor() {
        this.formulario = document.querySelector(".formulario");
        this.eventos();
    }

    eventos() {
        this.formulario.addEventListener("submit", (e) => {
            this.handleSumbit(e);
        });
    }

    handleSumbit(e) {
        e.preventDefault();
        const camposValidos = this.camposSaoValidos();
    }

    camposSaoValidos() {
        let valid = true;

        for (let errorText of this.formulario.querySelectorAll(".error-text")) {
            errorText.remove();
        }

        for (let campo of this.formulario.querySelectorAll(".validar")) {
            const label = campo.previousElementSibling.innerText;
            if (!campo.value) {
                this.criaErro(campo, `Campo '${label}' não pode estar em branco.`);
                valid = false;
            }
            if (campo.classList.contains("cpf")) {
                if (!this.validaCPF(campo)) valid = false;
            }
        }
    }
    validaCPF(campo) {
        const cpf = campo.value;
        ValidaCPF(cpf);
        if (!cpf.valida) {
            this.criaErro(campo, "CPF inválido.");
            return false;
        }
        return true;
    }

    criaErro(campo, msg) {
        const div = document.createElement("div");
        div.innerHTML = msg;
        div.classList.add("error-text");
        campo.insertAdjacentElement("afterend", div);
    }
}

const valida = new ValidaFormulario();
