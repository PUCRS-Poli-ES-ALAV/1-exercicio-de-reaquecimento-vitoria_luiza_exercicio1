function somaSucessiva(a, b) {
    if (b === 1) {
      return a;
    } else {
      return a + somaSucessiva(a, b-1);
    }
}

console.log(somaSucessiva(6,4));
  

