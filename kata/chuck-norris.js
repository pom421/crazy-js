// https://www.codingame.com/training/easy/chuck-norris
// coder 0 sous la forme 00 0 et 1 sous la forme 0 0

// fonction utilitaire d'espionnage de Array
Array.prototype.show = function (msg) { console.log((msg + ' ') + JSON.stringify(this)); return this}; 

var input = "CC%";

res = input
    .split('')                                              // transformation en Array
    .map(x => x.charCodeAt().toString(2))                   // récupération du code numérique du caractère et passage en base 2
    .map(x => ('0000000' + x).substr(-7))                   // remplissage éventuels caractères manquants avec 0
    .show('1')                      
    .join('')                                               // transformation en String
    .match(/(1+|0+)/g)                                      // récupération d'un Array rempli des groupes de 1 et de 0 par regex
    .show('2')                          
    .map(x => ['00 ', '0 '][x[0]] + '0'.repeat(x.length))   // affichage "unaire"
    .show(3)
    .join('')                                               // transformation en String