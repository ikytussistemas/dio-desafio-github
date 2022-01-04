
const quad = (N) => {
  for(let opt = 1; opt <= N; opt++){
    if ( opt % 2 === 0) {
      console.log( (opt**2).toFixed(2));    //escreva sua lógica nos espaços em branco
    }    
  }
}

console.log(quad(2000));