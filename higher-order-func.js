var module = {};

;(function(obj) {
	// fonctions d'ordre supérieur 
	obj.map = function map(tab, fn) {
		var res = [];
		for (var i = 0; i < tab.length; i++){
			res.push(fn(tab[i]));
		}
		return res;
	},

	obj.filter = function filter(tab, fn) {
		var res = [];
		for (var i = 0; i < tab.length; i++) {
			if (fn(tab[i])) {
				res.push(tab[i]);
			}
		}
		return res;
	},

	obj.reduce = function reduce(tab, fn) {
		if (tab.length === 0){
			return 0;
		}
		if (tab.length == 1) {
			return tab[0];
		}
		var res = tab[0];

		for (var i = 1; i < tab.length; i++) {
			res = fn(res, tab[i]);
		}
		return res;
	},

	// moyenne old school
	obj.average = function average(tab) {
		if (!tab) {
			return 0; // Exception ?
		}
		var res = 0;
		for (var i = 0; i < tab.length; i++) {
			res += tab[i];
		}
		return Math.ceil(res / tab.length);
	},

	// moyenne version fonctionelle
	obj.average2 = function average2(tab) {
		return reduce(tab, sum) / tab.length;
	},

	// fonctions
	obj.square = function square(elt) {
		return elt * elt;
	},

	obj.odd = function odd(elt) {
		return (elt % 2) === 0;
	},

	obj.sum = function sum(a, b) {
		return (a + b);},
	// fnGid : fonction rendant un id de groupe
	obj.groupBy = function groupBy(array, fnGid) {
		var res = {};
		array.forEach(function(elt) {
			var id = fnGid(elt);
			if (!(id in res)) {
				res[id] = [];
			}
			res[id].push(getAgeDead(elt));

		});
		return res;
	}
})(module);

// main
/*
var tab = [3, 4, 6, 7, 8]; // somme = 28
var inter1 = module.map(tab, module.square);
console.log(inter1);

var inter2 = module.filter(inter1, module.odd);

console.log("inter2 " + inter2);

console.log(module.filter(module.map(tab, module.square), module.odd));


console.log(module.reduce(tab, module.sum));


console.log(module.average(tab));


///////////
var arrays = [[1, 2, 3], [4, 5], [6]];


console.log('toto ', module.reduce(arrays, function(tab1, tab2) {
  
	return tab1.concat(tab2);
}));


*/
