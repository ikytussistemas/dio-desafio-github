const alunos = [
	{ nome: 'João', nota: 5, turma: '1B' },
	{	nome: 'Sofia', nota: 9, turma: '1B' },
	{	nome: 'Paulo', nota: 6, turma: '2C'	},
];

const ALUNOS_APROVADOS = (arr, media) => {
  let aprovados = []

  for(const { nota, nome } of arr){
    (nota >= media)? aprovados.push(nome) : '';
  }
  return aprovados;
}

console.log(ALUNOS_APROVADOS(alunos, 5));
