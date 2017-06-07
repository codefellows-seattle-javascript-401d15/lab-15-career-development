'use strict'

const Stack = require('./stack')

module.exports = exports = {}
//O(n)
exports.bracketBalance = function(str){
  let curly = new Stack()
  let brack = new Stack()
  let square = new Stack()

  for (let i = 0; i < str.length; i++){
    if (str[i] === '{') curly.push('{')
    if (str[i] === '(') brack.push('(')
    if (str[i] === '[') square.push('[')

    if (str[i] === '}') curly.pop()
    if (str[i] === ')') brack.pop()
    if (str[i] === ']') square.pop()
  }

  // console.log(curly, brack, square);

  if(curly.head !== null) return 'Missing }'
  if(brack.head !== null) return 'Missing )'
  if(square.head !== null) return 'Missing ]'
  // if(curly.head !== null) throw new ReferenceError('Missing }')
  // if(brack.head !== null) throw new ReferenceError('Missing )')
  // if(square.head !== null) throw new ReferenceError('Missing ]')

  return 'Passed'
}

// bracketBalance('{{[{}()]()})}') //should fail
// console.log(exports.bracketBalance('{{[()]}'))
// bracketBalance('{}[]()') //should pass
