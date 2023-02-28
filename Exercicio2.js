console.log(somaDoisNaturais(3,2));

function somaDoisNaturais(num1, num2) {
    let resultado = 0;
    for(let i=1; i<=num1; i++) {
        resultado++;
    }
    for(let i=1; i<=num2; i++){
        resultado++;
    }
    return resultado;
}
