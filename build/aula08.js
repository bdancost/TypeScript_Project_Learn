"use strict";
let dados = {
    nome: "João",
    idade: 30,
    status: "Ativo",
    ola: () => console.log("Ola"),
    info: (p) => {
        console.log(p);
    },
};
dados.nome = "Daniel";
console.log(typeof dados);
console.log(dados);
dados.ola();
dados.info(dados.nome);
