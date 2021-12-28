const array = [1,23,55,67,30,2,4]

const FILTER = (arr) => {
  return arr.filter((item) => item % 2 === 0)
}

console.log(FILTER(array));
