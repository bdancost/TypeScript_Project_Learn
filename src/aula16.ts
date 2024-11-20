// Aprendendo sobre P.O.O
// Abstração
// Encapsulamento
// Herança
// Polimorfismo

class Computador {
  private id: number = 0;
  public nome: string;
  private ram: number;
  private cpu: number;
  private ligado: boolean;

  constructor(nome: string, ram: number, cpu: number) {
    this.nome = nome;
    this.ram = ram;
    this.cpu = cpu;
    this.ligado = false;
    this.id = 0;
  }

  info(): void {
    console.log(`Nome: ..${this.nome}`);
    console.log(`RAM: ...${this.ram} GB`);
    console.log(`CPU: ...${this.cpu} GHz`);
    console.log(`Ligado: ${this.ligado ? "Sim" : "Nao"}`); // Usando o ternário para verificar se o computador está ligado
    console.log("------------------");
  }

  ligar(): void {
    this.ligado = true;
  }

  desligar() {
    this.ligado = false;
  }

  upRam(qtde: number): void {
    if (qtde >= 0 && qtde <= 256) {
      this.ram = qtde;
    } else {
      console.log(
        `Quantidade ${qtde} para o computador ${this.nome} não é permitida!`
      );
    }
  }
}

//Instanciar
const comp1 = new Computador("Rapidão", 64, 10);
const comp2 = new Computador("Carão", 32, 5);
const comp3 = new Computador("Gamer", 128, 10);

comp1.ligar();
comp3.ligar();

comp1.upRam(128);

comp1.nome = "Super Rapidão";

comp1.info();
comp2.info();
comp3.info();
