// 1. Rest operator ----------------------------------------------------------------------
// WHEN ? In the parameter part of declaration function
// USE : to overcome the arguments problem in JS, which is not really an Array
// REMARK : the "inverse" of spread operator
function showArgs(...args) { // MEANS consider args like an array
    console.log(args);
    for (const item of args) {
      console.log("item", item);
    }
  }
  
  // NB : Consider this following code. This time, ...args means 2 different things
  
  constructor(...args) { // the parameter is not an Array but consider it like an Array
    super(...args); // args is now an Array, but consider it like a sequence of value
  }
  
  // 2 SPREAD operator ---------------------------------------------------------------------
  // WHEN : in an invocation of function or in a Array litteral
  // REMARK : "inverse" of the REST operator
  // USE : easy way to duplicate array or concat arrays in array
  // 2.1: in an invocation of function
  function showFullName(first, middle, last) {
    console.log("Full name ", first, middle, last)
  }
  
  const infos = ["Donald", "Unlucky", "Duck"]
  showFullName(...infos); // MEANS consider infos not like an Array but like a sequence of parameters
  
  // 2.2: in an Array litteral
  const inner = [3, 4]
  const outer = [1, 2, ...inner, 5, 6]
  
  console.log(outer);
  
  // NB : easy way to duplicate an array
  const arr = [1, 2, 3]
  const arr_clone = ...arr // arr_clone !== arr
  const same_ref = arr // arr === same_ref
  
  