"use strict";
function soma(n1 = 0, n2 = 0) {
    return n1 + n2; // soma dois números
}
console.log(soma(5, 10));
function novoUser(user, pass, nome) {
    let dados = { user, pass, nome };
    console.log(`User: ${user} Senha: ${pass} Nome: ${nome}`);
}
novoUser("br", "123");
