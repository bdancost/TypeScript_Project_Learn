const obj = {
  cor1: "Vermelho",
  cor2: "Azul",
  cor3: "Verde",
  cor4: "amarelo",
  cor5: "Rosa",
};

let { cor1, cor2, cor3, cor4, cor5 } = obj;

let [nu1 = 0, nu2 = 0, ...nu3] = [10, 20, 30, 40, 50];

console.log(cor1, cor2, cor3, cor4, cor5);
console.log(nu1, nu2, nu3);
