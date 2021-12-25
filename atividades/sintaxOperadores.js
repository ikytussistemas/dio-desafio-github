const comparar = (num1, num2)=> {
  const isEquals = (num1 === num2) ? '' : 'não';
  return `Os números ${num1} e ${num2} ${isEquals} são iguais.`
}

const testar = (num1, num2)=>{
  const soma = num1 + num2;
  const to10 = (soma > 10) ? 'maior' : 'menor';
  const to20 = (soma > 20) ? 'maior' : 'menor';
  
  return `Sua soma é ${soma}, que é ${to10} que 10 e ${to20} que 20.`
}

const comparaNumeros = (num1, num2) => {
  return `${comparar(num1, num2)} ${testar(num1, num2)}`
}

console.log(comparaNumeros(10,-5));