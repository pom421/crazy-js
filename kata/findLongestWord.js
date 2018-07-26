
function findLongestWord(str) {
  return str.split(' ').map(function(e){
    return e.length;
  }).reduce(function(prec, next){
    return prec > next? prec : next;
  });
}

findLongestWord("The quick brown fox jumped over the lazy dog");
