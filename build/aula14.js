"use strict";
const teste = (txt) => {
    console.log(txt);
};
const fsoma2 = (n) => {
    let s = 0;
    n.forEach((e) => {
        s += e;
    });
    return s;
};
teste("Python");
teste("JavaScript");
teste("Java");
teste("C#");
let numer = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(fsoma2(numer));
