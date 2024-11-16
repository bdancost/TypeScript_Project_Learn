function soma(n1: number = 0, n2: number = 0): number {
  return n1 + n2; // soma dois números
}

console.log(soma(5, 10));

function novoUser(user: string, pass: string, nome?: string): void {
  let dados = { user, pass, nome };
  console.log(`User: ${user} Senha: ${pass} Nome: ${nome}`);
}

novoUser("br", "123");
