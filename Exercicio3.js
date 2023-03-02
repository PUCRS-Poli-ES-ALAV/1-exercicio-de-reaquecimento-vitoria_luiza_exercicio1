function calculaFracao(n) {
  if(n === 1) {
    return 1;
  } else {
    return 1/n + incrementosSucessivos(n-1);
  }
}

console.log(incrementosSucessivos(2));