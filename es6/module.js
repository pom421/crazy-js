# Node aka Common JS ------------------------------------

`math.js`
```js
module.exports = (a, b) => a + b
```

`index.js`
```js
const add = require("./math")
```

# or

`math.js`

```js
exports.add = (a, b) => a + b
exports.mul = (a, b) => a * b
```

`index.js`

```js
const add = require("./math").add
```

# ES6 modules -------------------------------------------

`module.js`

```js
export { name1, name2, name3 }
export function nomFonction() { … };
export class nomClasse { … };
export default expression;
```

`index.js`

```js
import name1 from "./module"
import nomFonction from "./module"
import nomClass from "./module"
import Module from "./module" # récupération de l'export default du fichier, on peut le nommer comme on veut
```

