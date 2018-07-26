var LecteurPDFES5 = function(url, opts) {
  this.url = url

  this.pagePrec = opts && opts.pagePrec ? opts.pagePrec : '#services'
  this.textBouton = opts && opts.textBouton ? opts.textBouton : 'Retour'

  console.log('find de LecteurPDFES5');
}

class LecteurPDFES6 {

  constructor(url, opts) {
    const _default = {
      pagePrec: '#services',
      textBouton: 'Retour'
    }

    // étend l'instance courante avec les propriétés de _defaults puis écrase éventuellement avec l'objet opts
    Object.assign(this, _default, opts)

    this.url = url;

    console.log('fin de LecteurPDFES6')
  }
}

const lec1 = new LecteurPDFES6('toto.pdf', { pagePrec: '#home', textBouton: 'Fermer' })
console.log('on trouve ', JSON.stringify(lec1))

const lec2 = new LecteurPDFES6('azeaze.pdf', { pagePrec: '#home'})
console.log('on trouve ', JSON.stringify(lec2))

const lec3 = new LecteurPDFES6('oaoao.pdf')
console.log('on trouve ', JSON.stringify(lec3))

//////

console.log('PDF OLD $$$$$')

const lec11 = new LecteurPDFES5('toto.pdf', { pagePrec: '#home', textBouton: 'Fermer' })
console.log('on trouve ', JSON.stringify(lec11))

const lec22 = new LecteurPDFES5('azeaze.pdf', { pagePrec: '#home'})
console.log('on trouve ', JSON.stringify(lec22))

const lec33 = new LecteurPDFES5('oaoao.pdf')
console.log('on trouve ', JSON.stringify(lec33))