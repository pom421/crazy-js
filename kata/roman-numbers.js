// simplification de http://www.dofactory.com/javascript/interpreter-design-pattern
// ici c'est le contexte qui devient intelligent et qui lance l'interprétation.
// les règles n'ont pas à être des "expressions" car elles sont toutes construites sur le même schéma avec les mêmes règles. 
// En gros, il faut chercher 1 ou 2 caractères, qui équivalent à une certaine valeurs. Si ce pattern est trouvé, on relance
// sur la chaine diminuée de ce qu'on a déjà trouvé.

// Cela aurait plus d'intérêt si des règles ne suivaient pas le même principe. Par exemple évaluer des expressions mathématiques
// tel que 1 + 1, 2 + (3 * 2), racine_carrée(9). Dans ce cas, surtout avec les parenthèses qui changent l'ordre de priorité,
// il deviendrait intéressant de créer des règles par expression, ce qui s'apparenterait à une évaluation d'un arbre


const regexes = [
    [ /^M/, 1000 ],
    [ /^CM/, 900 ],
    [ /^D/ , 500 ],
    [ /^CD/, 400 ],
    [ /^C/ , 100 ],
    [ /^XC/, 90 ],
    [ /^L/ , 50 ],
    [ /^XL/, 40 ],
    [ /^X/ , 10 ],
    [ /^IX/, 9 ],
    [ /^V/ , 5 ],
    [ /^IV/, 4 ],
    [ /^I/ , 1]
]

// recursively searching patterns
const compute = context => context.interpret().input.length ? compute(context) : context.output
const evaluate = input => compute(new Context(input))

const Context = function(input) {
    this.input = input
    this.output = 0

    const startsWith = regex => regex.test(this.input)

    // search a beggining pattern in the input, starts with the M, then CM, etc..
    this.interpret = () => {
        regexes.some(regex => {

            if (startsWith(regex[0])) {
                this.output += regex[1]
                this.input = this.input.split(regex[0])[1]
                return true
            }
            return false
        })
        return this // chaining pattern allowing lambda function
    }
}

console.log(evaluate("MCMLXXVI"));
console.log(evaluate("CMLXXXI"));

