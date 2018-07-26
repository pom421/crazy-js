function largestOfFour(arr) {
  var res = [];
  arr.map(function(e){
    res.push(Math.max.apply(Math, e));
  });

  return res;

}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
