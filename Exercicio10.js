function sequenciaFibonacci(n) {
    if(n===0) {
        return 'f0';
    } else if(n===1) {
        return 'f1';
    } else {
        return sequenciaFibonacci(n-1) + sequenciaFibonacci(n-2);
    }
}

console.log(sequenciaFibonacci(3));

//nao sei se entendi o enunciado kkkkk