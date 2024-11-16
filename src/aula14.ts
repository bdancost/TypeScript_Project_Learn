const teste = (txt?: string): void => {
  console.log(txt);
};

const fsoma2 = (n: number[]): number => {
  let s: number = 0;
  n.forEach((e) => {
    s += e;
  });
  return s;
};

teste("Python");
teste("JavaScript");
teste("Java");
teste("C#");

let numer: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(fsoma2(numer));
