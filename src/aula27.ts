interface curso {
  titulo: string;
  des: string;
  iniciarCurso?(teste: string): void;
}

interface cursoProgramacao extends curso {
  aulas: number;
  maxAlunos?: number;
}

interface cursoArtes extends curso {
  aulas: number;
  maxAlunos?: number;
}

let curso1: cursoProgramacao;
let curso2: cursoProgramacao;
let curso3: cursoArtes;

curso1 = {
  titulo: "Curso de JavaScript",
  des: "Aprenda JavaScript",
  aulas: 30,
  maxAlunos: 30,
};

curso2 = {
  titulo: "Curso de Java",
  des: "Aprenda Java",
  aulas: 20,
  maxAlunos: 40,
};

curso3 = {
  titulo: "Curso de Python",
  des: "Aprenda Python",
  aulas: 200,
};

console.log(curso1);
console.log(curso2);
console.log(curso3);
