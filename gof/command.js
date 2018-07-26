/**
 * Command design pattern implementation
 * 
 * Variation of http://www.dofactory.com/javascript/command-design-pattern
 * 
 * #BehavorialPattern
 * #ActionEncapsulatedInObject 
 * #executeMethod #undo
 */

const add = (x, y) => x + y
const sub = (x, y) => x - y
const mul = (x, y) => x * y
const div = (x, y) => x / y

function Command(command, inverse, value) {
    // currying functions
    this.execute = x => command(x, value)
    this.undo = x => inverse(x, value)
}

const addCommand = (value) => new Command(add, sub, value)
const subCommand = (value) => new Command(sub, add, value)
const mulCommand = (value) => new Command(mul, div, value)
const divCommand = (value) => new Command(div, mul, value)

const calculator = () => {
    var current = 0;
    var commands = [];
  
    return {
        execute: command => {
            current = command.execute(current);
            commands.push(command);
        },
 
        undo: () => {
            var command = commands.pop();
            console.log("undo")
            current = command.undo(current, command.value);
        },
 
        getCurrentValue: () =>  current
    }
} 
 
(function run() {
    var calc = calculator();

    calc.execute(addCommand(105));
    console.log(calc.getCurrentValue())

    calc.execute(subCommand(24));
    console.log(calc.getCurrentValue())

    calc.execute(mulCommand(6));
    console.log(calc.getCurrentValue())

    calc.execute(divCommand(2));
    console.log(calc.getCurrentValue())
 
    // reverse last two commands
    calc.undo();
    calc.undo();
 
    console.log(calc.getCurrentValue())

})()

