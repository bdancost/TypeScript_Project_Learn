abstract class Conta {
  // Public: acessado de qualquer lugar
  // Private: acessado apenas dentro da sua própria classe
  // Protected: acessado apenas dentro da sua classe e classes filhas
  private readonly numero: number;
  protected titular: string;
  protected saldoConta: number;
  constructor(titular: string) {
    this.numero = this.gerarNumeroConta();
    this.titular = titular;
    this.saldoConta = 0;
  }

  private gerarNumeroConta(): number {
    return Math.floor(Math.random() * 100000) + 1;
  }

  protected info() {
    console.log(`Titular: ${this.titular}`);
    console.log(`Número: ${this.numero}`);
    console.log("------------------");
  }
  public get saldo(): number {
    // Getter
    return this.saldoConta;
  }

  private set saldo(saldoConta: number) {
    // Setter
    this.saldoConta = saldoConta;
  }
  protected deposito(valor: number) {
    if (valor < 0) {
      console.log(`Valor invalido`);
      return;
    }
    this.saldoConta += valor;
  }
  protected saque(valor: number) {
    if (valor < 0) {
      console.log(`Valor invalido`);
      return;
    }
    if (valor <= this.saldoConta) {
      this.saldoConta -= valor;
    } else {
      console.log(`Saldo insuficiente`);
    }
  }
}

interface Tributos {
  taxaCalculo: number;
  calcularTributo(valor: number): number;
}

class ContaPF extends Conta implements Tributos {
  taxaCalculo = 100;
  cpf: number;
  constructor(cpf: number, titular: string) {
    super(titular);
    this.cpf = cpf;
  }
  calcularTributo(taxa: number): number {
    return valor * this.taxaCalculo;
  }
  info() {
    console.log(`Tipo...:PF`);
    super.info();
    console.log(`CPF...:${this.cpf}`);
    console.log("------------------");
  }
  public deposito(valor: number) {
    if (valor > 1000) {
      console.log("Limite de deposito excedido");
    } else {
      super.deposito(valor);
    }
  }

  public saque(valor: number) {
    if (valor > 1000) {
      console.log("Limite de saque excedido");
    } else {
      super.saque(valor);
    }
  }
}

class ContaPJ extends Conta {
  cnpj: number;
  constructor(cnpj: number, titular: string) {
    super(titular);
    this.cnpj = cnpj;
  }
  info() {
    console.log(`Tipo...:PJ`);
    super.info();
    console.log(`CNPJ...:${this.cnpj}`);
    console.log("------------------");
  }

  public deposito(valor: number) {
    if (valor > 10000) {
      console.log("Limite de deposito excedido");
    } else {
      super.deposito(valor);
    }
  }

  public saque(valor: number) {
    if (valor > 10000) {
      console.log("Limite de saque excedido");
    } else {
      super.saque(valor);
    }
  }
}

const cont1 = new ContaPF(3434565, "João");
const cont2 = new ContaPJ(567689, "Maria");

cont1.deposito(800);
cont1.deposito(200);
cont1.deposito(1000);
cont1.saque(500);
console.log(cont1.saldo);

// cont2.deposito(8000);
// cont2.deposito(2000);
// cont2.deposito(10000);
// console.log(cont2.saldo());

cont1.info();
//cont2.info();
