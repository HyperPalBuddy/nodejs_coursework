// Modules

const names = require('./3.1-names')
const saysHi = require('./3.2-sayhi')
const altSyntax = require('./3.3-altSyntax')
require('./3.4-addValues')


console.log(altSyntax)
console.log(altSyntax.array)


saysHi('World!')
saysHi(names.name1 + names.name2)
//saysHi(names.name2)