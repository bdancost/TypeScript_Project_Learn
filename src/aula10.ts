// NULL // UNDEFINED // UNKNOWN

// NULL - Tipo Nulo
// UNDEFINED - Tipo indefinido
// UNKNOWN - Tipo desconhecido

let vnome: string | null;
vnome = "João";
console.log(vnome);

let vnome2: any;
console.log(vnome2);

let vnome3: unknown = vnome; // unknown só pode ser atribuido em tipos unknown ou any
let vnum: any = vnome3;
console.log(vnum);
