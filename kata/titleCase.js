function titleCase(str) {
  return str.toLowerCase().split(' ').map(function(e){
    return e.substr(0, 1).toUpperCase() + e.substr(1);
  }).join(' ');
}

titleCase("sHoRt AnD sToUt ");
