class Conta {
  protected numero: number;
  protected titular: string;
  constructor(titular: string) {
    this.numero = this.gerarNumeroConta();
    this.titular = titular;
  }

  private gerarNumeroConta(): number {
    return Math.floor(Math.random() * 100000) + 1;
  }

  info() {
    console.log(`Titular: ${this.titular}`);
    console.log(`Número: ${this.numero}`);
    console.log("------------------");
  }
}

class ContaPF extends Conta {
  cpf: number;
  constructor(cpf: number, titular: string) {
    super(titular);
    this.cpf = cpf;
    console.log(`ContaPF Criada: ${titular}`);
  }
}

class ContaPJ extends Conta {
  cnpj: number;
  constructor(cnpj: number, titular: string) {
    super(titular);
    this.cnpj = cnpj;
    console.log(`ContaPJ Criada: ${titular}`);
  }
}

const cont1 = new ContaPF(3434565, "João");
const cont2 = new ContaPJ(567689, "Maria");

cont1.info();
cont2.info();
