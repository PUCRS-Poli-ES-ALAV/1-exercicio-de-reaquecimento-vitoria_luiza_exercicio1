console.log(somaSucessiva(6,4));

function somaSucessiva(num1, num2) {
    let resultado = 0;
    for(let i=1; i<=num1; i++) {
        resultado+=num2;
    }
    return resultado;
}

