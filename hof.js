// Higher-order functions: map, filter, reduce + validation with tape
// ----------------------
// 
// Instructions : 
// install tape : npm i tape --save-dev
// run this file : node hof.js

var test = require('tape');

// map

test('map test', function(t){
    const arr = [10, 20, 40];
    const newArr = map(arr, x => 2 * x);

    t.plan(3);
    t.equal(arr.length, newArr.length, 'les tableaux doivent avoir le même nombre d\'éléments');
    t.equal(newArr[0], 20);
    t.equal(newArr[2], 80);
})

var map = function map(arr, fun){
    const res = [];
    for (var i = 0; i < arr.length; i++){
        res[i] = fun(arr[i]);
    }
    return res;
}

// filter

test('filter test', function(t){
    const arr = [12, 13, 17, 21, 22, 44, 65, 66];
    const newArr = filter(arr, x => x % 2 === 0);

    t.plan(3);
    t.equal(newArr.length, 4, 'devrait trouver 4 nombres pairs');
    t.equal(newArr[0], 12);
    t.equal(newArr[1], 22);
})

var filter = function filter(arr, predicate){
    const res = [];
    for (var i = 0; i < arr.length; i++){
        if (predicate(arr[i])) res.push(arr[i]);
    }
    return res;
}

// reduce

test('reduce test', function(t){
    const arr = [5, 6, 3, 2, 11];
    const res = reduce(arr, 0, (x, y) => x + y);
    const res2 = reduce(arr, 7, (x, y) => x + y);

    t.plan(2);
    t.equal(res, 27, 'la somme du tableau doit être égale à 27');
    t.equal(res2, 34, 'la somme du tableau doit être égale à 34');
})

var reduce = function(arr, start, fun){
    var rest = start;
    for (var i = 0; i < arr.length; i++){
        rest = fun(arr[i], rest);
    }
    return rest;
}

// sort

test('sort test', function(t){
    const arr = [5, 7, 4, 1, 24, 99, 0];

    const newArr = sort(arr, (x, y) => x > y);

   t.equal(newArr.length, 7, 'le tableau devrait avoir une taille de 7 éléments');
   t.equal(newArr[1], 1);
   t.equal(newArr[5], 24);
   t.end();
})

var sort = function sort(arr, predicate){
    if (!arr || !arr.length) throw new Error('le tableau ne peut pas être vide');

    var newArr = [arr[0]];

    for (var i = 1; i < arr.length; i++){
        var trouve = false;
        for (var j = 0; j < newArr.length; j++){
            if (!predicate(arr[i], newArr[j])){
                newArr.splice(j, 0, arr[i]);
                trouve = true;
                break;
            }
        }
        if (!trouve) newArr.push(arr[i]);
    }

    return newArr;
}