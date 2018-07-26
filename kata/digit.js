/**
 * Fonction utilitaire pour mesurer des temps d'exécution
 * 
 * Ex: 
 * var timer = new impots.Timer();
 * timer.end('affichage page');
 * 
 */
	
let best = -1
let input

	function Timer() {
		this.time = new Date().getTime();
	}
	
	Timer.prototype.end = function(msg) {
		var date = new Date().getTime();
		if (console) {
			console.log('Temps écoulé ' + msg + ' : ' + (date - this.time) + ' ms');
		}
		this.time = date;
	}
	

const addZeros = (num, maxLength) => {
  const numZeros = maxLength - num.length
  let res = '' + num

  for (var i = 0; i < numZeros; i++) {
    res += '0'
  }
  return res
}

const shouldContinue = (acc) => {
  const aux = addZeros(acc, new String(input).length)
  console.log('aux = ', aux)
  const res = evaluate(+input, +aux, best) > best ? false : true
  console.log('on ne doit pas continuer. input', input, 'aux ', aux, 'best', best)
  return res
}

const allCombos = (acc, arr, res) => {
  //console.log('-----------------')
  //console.log('acc', acc)

  if (!shouldContinue(acc, arr)) {
    // ne sert à rien de continuer
    console.log('ne sert à rien de continuer ', acc)
    return
  }

  if (!arr.length) {
    //console.log('fin -->', acc)
    best = evaluate(+input, +acc)
    return
  }

  for (var i = 0; i < arr.length; i++) {
    // recopie du tableau
    let arr2 = arr.slice(0)
    // on supprime l'élément courant du tableau et on l'ajoute à l'accumulateur
    const del = arr2.splice(i, 1)
    allCombos(acc + del, arr2, res)
  }
}

const nextBigger = (n) => {
  const timer = new Timer()
  const arr = new String(n).split('')
  input = n
  let res = []
  allCombos('', arr, res)

  timer.end('fin des combos')

  //console.log('on trouve', JSON.stringify(res))
  console.log('# elts', res.length)
  
  /*
  const ret = res.reduce((prev, curr) => {
    if (n - curr == 0) {
      return prev
    }
    if (prev == -1) {
      return curr
    } else {
      return Math.abs(n - curr) < Math.abs(n - prev) ? curr : prev
    }
  }, -1)
  timer.end('fin du reduce')
  */
  
  return best
}

const evaluate = (input, curr, best) => {
    if (curr == 0) {
      return best
    }
    if (input - curr == 0) {
      return best
    }
    if (best == -1) {
      return curr
    } else {
      return Math.abs(input - curr) < Math.abs(input - best) ? curr : best
    }
}

console.log('res', nextBigger(1234567908))
