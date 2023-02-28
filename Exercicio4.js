function inversaoString(str) {
    if(str === "") {
      return "";
    } else {
      return inversaoString(str.substr(1)) + str.charAt(0);
    }
}
console.log(inversaoString('vitoria e luiza'));