const person = {
    name: "po",
    age: 41,
    motto: "YOLO"
}

// destructuring an object with new names for constants
const { name: theName, motto: theMotto } = person

console.log(`${theName} says "${ theMotto}"`)

// destructuring objec with name of const equals to name of property (shorcut)
const { name, age } = person

console.log(`${ name } is ${ age} years old`)

var a = 5, b = 10;

console.log(`a est ${a} et b = ${b}`);

[a, b] = [b, a]

console.log(`a est ${a} et b = ${b}`)

console.log(a)
console.log(b)

/*
Différents sens des caractères spéciaux

() => invocation de fonction / paramètres d'une fonction / condition (if, for) / délimitation d'une expression plutôt qu'une déclaration
[] => index d'un tableau / accès à une propriété calculée d'un objet
{} => création d'un bloc / création d'un objet littéral

*/
