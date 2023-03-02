const vetor = [5, 5, 5, 5, 5];

function soma(v) {
    if (v.length === 0) {
      return 0;
    } else {
      return v[0] + soma(v.slice(1));
    }
  }
  
  function produto(v) {
    if (v.length === 0) {
      return 1;
    } else {
      return v[0] * produto(v.slice(1));
    }
  }

console.log("Produto dos elemntos do vetor: ", produto(vetor)); 
console.log("Soma dos elementos do vetor: ", soma(vetor)); 
