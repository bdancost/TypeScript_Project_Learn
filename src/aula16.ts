// Aprendendo sobre P.O.O
// Abstração
// Encapsulamento
// Herança
// Polimorfismo

class Computador {
  nome: string;
  ram: number;
  cpu: number;
  ligado: boolean;

  constructor(nome: string, ram: number, cpu: number) {
    this.nome = nome;
    this.ram = ram;
    this.cpu = cpu;
    this.ligado = false;
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
}

//Instanciar
const comp1 = new Computador("Rapidão", 64, 10);
const comp2 = new Computador("Carão", 32, 5);
const comp3 = new Computador("Gamer", 128, 10);

comp1.ligar();
comp3.ligar();

comp1.info();
comp2.info();
comp3.info();
