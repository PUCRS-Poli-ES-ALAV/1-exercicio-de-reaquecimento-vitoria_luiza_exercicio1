function sequenciaDeAckermann(m, n) {
    if (m === 0) {
       return n + 1;

    } else if (m > 0 && n === 0) {
      return sequenciaDeAckermann(m - 1, 1);
    } else {
      return sequenciaDeAckermann(m - 1, sequenciaDeAckermann(m, n - 1));
    }
  }

console.log(sequenciaDeAckermann(1, 2)); 
console.log(sequenciaDeAckermann(0, 0)); 