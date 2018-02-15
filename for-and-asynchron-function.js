/*
En synchrone, il n'y a pas de problème. console.log affiche i au moment où il en a besoin
*/
for (var i = 0; i < 5; i++) {
  console.log("synchrone ", i);
}

// fonction qui ne fait rien. Sert à montrer que le problème ne vient pas du callback mais du côté asynchrone
function doDo(fn) {
  fn()
}

for (var i = 0; i < 5; i++) {
  doDo(function() {
    console.log("synchrone 1", i)
  })
}

/*
Comportement non attendu !!

Ici, il y a création d'une fonction invoquée de manière asynchrone (par le biais d'un setTimeout mais on pourrait imaginer un appel AJAX).
Une fonction est passé en paramètre sous forme de callback. Cette fonction nécessite une variable i et a donc une référence sur cette variable.
Au bout de 100 ms, les 5 itérations sont effectuées et i contient donc maintenant la variable 4. Les fonctions sont maintenant invoquées et nous avons 5x le chiffre 4 !!!
 */
for (var i = 0; i < 5; i++) {
  setTimeout(function() {
    console.log("asynchrone 1", i)
  }, 100)
}

/*
Une solution est de figée dans la fonction de callback sa valeur d'appel de i. Pour cela, on doit encapsuler le setTimeout dans une fonction qui prendra en paramètre una valeur.
Cette fonction wrapper est automatiquement appelé avec chacune des valeurs de i. C'est une IIFE (Immediate Invoked Function Expression).

En fait, comme cette fonction est immédiatement invoquée, nous sommes dans la même "frame" synchrone que la boucle for.
L'invocation d'une fonction wrapper permet de figer des valeurs.
*/
for (var i = 0; i < 5; i++) {
  (function (index) {
    setTimeout(function() {
      console.log('asynchrone 2', index)
    }, 100)
  })(i)
}

/*
Avec let, le problème est résolu aussi.
Let va créer une variable dont la portée est le bloc for. À chaque itération, elle sera créée au début avec la bonne valeur et supprimée à la fin
*/
for (let i = 1; i <= 5; ++i) {
  setTimeout(function(){
    console.log("asynchrone 3", i);
  }, 1000);
}

/*
Avec bind, le problème est résolu aussi.
*/
for (var i = 0; i < 5; i++) {
  setTimeout(function(i) {
    console.log("avec bind", i)
  }.bind(this, i), 100)
}

/*
Autre problème du même genre sur SO
*/

var funcs = [];
for (var i = 0; i < 3; i++) {      // let's create 3 functions
  funcs[i] = function() {          // and store them in funcs
    console.log("My value: " + i); // each should log its value.
  };
}
for (var j = 0; j < 3; j++) {
  funcs[j]();                      // and now let's run each one to see
}

/*
    My value: 3
    My value: 3
    My value: 3
*/

/*
Exemple web
var buttons = document.getElementsByTagName("button");
for (var i = 0; i < buttons.length; i++) {          // let's create 3 functions
  buttons[i].addEventListener("click", function() { // as event listeners
    console.log("My value: " + i);                  // each should log its value.
  });
}
*/