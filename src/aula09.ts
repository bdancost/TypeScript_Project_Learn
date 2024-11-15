enum dias {
  domingo = 0,
  segunda = 1,
  terca = 2,
  quarta = 3,
  quinta = 4,
  sexta = 5,
  sabado = 6,
}

console.log(dias.domingo);

const d = new Date();
console.log(d.getDate()); //Dia do mês atual
console.log(dias[d.getDay()]); // Dia da semana atual

enum cores {
  branco = "#fff",
  preto = "#000",
  vermelho = "#f00",
  azul = "#00f",
  verde = "#0f0",
  amarelo = "#ff0",
  roxo = "#f0f",
}

console.log(cores.azul);
