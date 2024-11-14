// let vteste: string | number;
let vteste: any;
vteste = "João";
vteste = 30; // não é possivel atribuir um valor diferente de string para uma variável que foi inicializada como string

let cursos = ["PHP", "JavaScript", "Java", "C#", 100, true];

let valores: number[] = [1, 2, 3, 4, 5];

cursos.push("Python");
valores.push(6);

console.log(cursos);
console.log(valores);
console.log(vteste);
