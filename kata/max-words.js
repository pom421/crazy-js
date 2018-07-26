//Based on the [underscore](http://underscorejs.org) documentation. 
//The aim is to sort the number of words. 

//Interesting fact, this code demonstrates how to convert an objet used an associative array into an array to sort it. 

var _ = require('underscore');

var lyrics = [
  {line: 1, words: "I'm a lumberjack and I'm okay"},
  {line: 2, words: "I sleep all night and I work all day"},
  {line: 3, words: "He's a lumberjack and he's okay"},
  {line: 4, words: "He sleeps all night and he works all day"}
];

var words = _.chain(lyrics)
// cut each line in an array with space as separator
.map(function(line){ return line.words.split(' ') })
// fusion all arrays into one
.flatten()
// reduce into an object (like an associative array)
.reduce(function(memo, val){
  memo[val] = (memo[val] || 0) + 1;
  return memo;
}, {})
// create a new array thanks to map
.map(function(val, key){
  var obj = {};
  obj.name = key;
  obj.nb = val;
  return obj;
})
.sortBy('nb')
.value();

console.log(words);

//In ES2015 : 

'use strict';

const _ = require('underscore');

const lyrics = [
  {line: 1, words: "I'm a lumberjack and I'm okay"},
  {line: 2, words: "I sleep all night and I work all day"},
  {line: 3, words: "He's a lumberjack and he's okay"},
  {line: 4, words: "He sleeps all night and he works all day"}
];

let words = _.chain(lyrics)
// on découpe chaque ligne en tableau avec l'espace comme séparation
.map(line => line.words.split(' '))
// on fusionne tous les tableaux en 1
.flatten()
// on réduit le tableau à un objet unique
.reduce((memo, val) => {
  memo[val] = (memo[val] || 0) + 1;
  return memo;
}, {})
// on parcourt les propriétés de l'objet
.map((val, key) => ({
  name: key,
  nb: val
}))
.sortBy('nb')
.value();

console.log(words);
