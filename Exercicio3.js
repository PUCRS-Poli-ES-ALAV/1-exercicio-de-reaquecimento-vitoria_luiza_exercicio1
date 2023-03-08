function calculaFracao(n) {
  if(n === 1) {
    return 1;
  } else {
    return 1/n + calculaFracao(n-1);
  }
}

console.log(calculaFracao(2));