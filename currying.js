function add(x, y) {
  return x + y
}

function curry(fn, param) {
  return fn.bind(this, param)
  //return function() {
  //  return fn(param, arguments[0])
  //}
}

var add3 = curry(add, 3)

console.log("3 + 4 =", add3(4))


var adder = x => y => x + y
var add4 = adder(4)

console.log("4 + 5 =", add4(5))

