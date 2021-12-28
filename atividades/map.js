const maca = { valor: 2 }
const laranja = { valor: 3 }
const nums = [1,2];

/*
* map com THIS, não é possivel usar arrow function
* em razão do this ser sempre global.
*/
const MAP_THIS = (arr, thisArg) => {
  return arr.map(function (item) { 
    return item * this.valor
  }, thisArg);
}

console.log(MAP_THIS(nums,laranja));

// map sem THIS, utilizando arrow function
const MAP = (arr) => {
  return arr.map((item) => item * 2 );
}

console.log(MAP(nums));
