let numeros: number[] = [20, 30, 40];
//let numeros1: Array<number | string> = [20, 30, 40, "Daniel"];
//let numeros2: (number | string)[] = [20, 30, 40, "Daniel"];

numeros.push(50);
numeros.unshift(10);

numeros.pop();
numeros.shift();

console.log(numeros);

let numeros_ro: ReadonlyArray<number> = [20, 30, 40];
console.log(numeros_ro);
