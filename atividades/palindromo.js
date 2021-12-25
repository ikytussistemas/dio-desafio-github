const isPalindromo = (string)=> {
  if (!string || string == "") return;
  return (removeSpaces(string) == reverseString(string)) 
    ? `O texto: " ${string} " é um palindromo.` 
    : `O texto: " ${string} " não é um palindromo.`;
}
// retorno a string reversa
const reverseString = (string) => {
  const newString = removeSpaces( string )
  return newString.split("").reverse().join("");
}
// remove os espaços da string
const removeSpaces = (string) => {
  let newString = ""
  for(let c of string) {
    (c == " ") ? newString += "" : newString += c;
  }
  return newString;
}

console.log(isPalindromo('roma me tem amor'));
