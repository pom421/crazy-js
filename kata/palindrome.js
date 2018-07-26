
function palindrome(str) {
  // Good luck!
  
  let normalized = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  
  if (normalized.length == 1){
    return true;
  }
  else {
    let nbIteration = Math.floor(normalized.length / 2);
    for (var i = 0; i < nbIteration; i++){
      if (normalized[i] != normalized[normalized.length - i - 1]){
        return false;
      }
    }
  }
  
  return true;
}



palindrome("1 eye for of 1 eye.");
