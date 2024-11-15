"use strict";
var dias;
(function (dias) {
    dias[dias["domingo"] = 0] = "domingo";
    dias[dias["segunda"] = 1] = "segunda";
    dias[dias["terca"] = 2] = "terca";
    dias[dias["quarta"] = 3] = "quarta";
    dias[dias["quinta"] = 4] = "quinta";
    dias[dias["sexta"] = 5] = "sexta";
    dias[dias["sabado"] = 6] = "sabado";
})(dias || (dias = {}));
console.log(dias.domingo);
const d = new Date();
console.log(d.getDate()); //Dia do mês atual
console.log(dias[d.getDay()]); // Dia da semana atual
var cores;
(function (cores) {
    cores["branco"] = "#fff";
    cores["preto"] = "#000";
    cores["vermelho"] = "#f00";
    cores["azul"] = "#00f";
    cores["verde"] = "#0f0";
    cores["amarelo"] = "#ff0";
    cores["roxo"] = "#f0f";
})(cores || (cores = {}));
console.log(cores.azul);
