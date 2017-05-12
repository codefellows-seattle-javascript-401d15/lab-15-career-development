'use strict';

const balBrkts = require('./lib/balBrackets');

let thing1 = '(){[]}'; //should rtn true
let thing2 = '{(})[]'; //should rtn false

console.log(balBrkts(thing1));
console.log(balBrkts(thing2));
