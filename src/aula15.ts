// parâmetros REST com SPREAD em Typescript

function fsoma(...n: number[]) {
  let s: number = 0;
  for (let en of n) {
    s += en;
  }

  // Outra forma
  //n.forEach((en) => {
  //  s += en;
  //});
  return s;
}

console.log(fsoma(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
