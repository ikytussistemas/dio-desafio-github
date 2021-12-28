const numbers = [1,23,55,67,30,2,4];

const SOMA_NUMEROS = (arr) => {
  return arr.reduce((prev, current) => {
    return prev + current
  },0)
}

console.log(SOMA_NUMEROS(numbers));

const LISTA = [
  { preco: 2, nome: 'maçã' },
	{	preco: 30, Nome: 'roupa' },
	{	preco: 25, nome: 'carne'},
];

const CALC_SALDO = (saldoDisponivel, lista) => {
  return lista.reduce ((prev, current) => {
    return prev - current.preco;
  }, saldoDisponivel)
}

console.log(CALC_SALDO(100, LISTA));
