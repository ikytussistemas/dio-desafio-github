const trocaPar = (array) =>{
  const newArray = []
  for(let a of array) {
    (a % 2 == 0 || a == 0) ? newArray.push(0) : newArray.push(a);
  }
  return newArray
}

console.log(trocaPar([1,5,6,33,78,45,0,89,88,16,7,10]));