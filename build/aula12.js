"use strict";
function logar(username, senha) {
    console.log(`User: ${username} Senha: ${senha}`);
}
logar("Daniel", "123");
function soma2(n1, n2) {
    let r = n1 + n2;
    return r;
}
let n_res = soma2(5, 10);
let s_res = soma2(5, 8).toString();
console.log(n_res);
console.log(s_res);
