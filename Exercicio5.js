function sequencia(n) {
    if(n===1) {
        return 1;
    } else if(n===2) {
        return 2;
    } else {
        return (2 * sequencia(n-1)) + (3 * sequencia(n-2));
    }
}

console.log(sequencia(3));