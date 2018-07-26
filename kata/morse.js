const WORD_SEP = '   '
const CHAR_SEP = ' '

Array.prototype.debug = function() {
  return this.map(x => { console.log(x); return x })
}

const decodeMorse = (morseCode) => {
  return morseCode
    .split(WORD_SEP)
    .debug()
    .map(w => w
      .split(CHAR_SEP)
      .map(str => str + str)
      .join('')
    )
    .join(' ')
}

//const input = '.... . -.--   .--- ..- -.. .'
const input = 'a z   e'

console.log('res', decodeMorse(input))