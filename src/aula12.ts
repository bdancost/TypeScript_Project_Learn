function logar(username: string, senha: string): void {
  console.log(`User: ${username} Senha: ${senha}`);
}

logar("Daniel", "123");

function soma2(n1: number, n2: number): number {
  let r = n1 + n2;
  return r;
}

let n_res: number = soma2(5, 10);
let s_res: string = soma2(5, 8).toString();

console.log(n_res);
console.log(s_res);
