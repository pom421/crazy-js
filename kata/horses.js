// https://www.codingame.com/training/easy/horse-racing-duals/

// puissance des chevaux
var data = [30, 50, 20, 60, 80, 40, 10];

var tab = data
  .sort((a, b) => a - b)      // tri du tableau initial
  .map((x, index, arr) =>     // calcul des intervalles avec utilisation du tableau global & Infinity pour gérer le 1er élément
       (index === 0) ? Infinity : Math.abs(x - arr[index - 1])) 
  .sort((a, b) => a - b)      // on retrie le tableau des intervalles
  .shift()                    //on prend le premier élément