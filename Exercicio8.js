function ehPalindromo(str) {
    if(str.length <= 1) {
      return true;
    } else {
      if(str.charAt(0) !== str.charAt(str.length-1)) {
        return false;
      } else {
        return ehPalindromo(str.substr(1, str.length-2));
      }
    }
  }
  
  console.log(ehPalindromo("abba"));
  console.log(ehPalindromo("abc"));
