'use strict';

const Stack = require('./model/stack');

// O(n)
const balanceBrackets = module.exports = function(string) {
  let stack = new Stack();
  let brackets = '[]{}()',
    i, // index in the string
    c; // character in the string
  if(string.length <= 1) return false;

  for (i = 0; i < string.length; i++) {

    c = string[i];
    let position = brackets.indexOf(c),
      type;

    // ~ is truthy for any number but -1
    if (!~position) continue;

    type = position % 2 ? 'closed' : 'open';

    if (type === 'closed') {
      // if there is no open bracket at all, return false
      if (!stack.length || brackets.indexOf(stack.pop()) != position - 1) return false;

    } else {

      stack.push(c);
    }
  }
  //If anything is left on the stack, not balanced
  return !stack.length;
};

let myString1 = '[{((({})([])))},{}{{{{{}}}}function(({}){})}]';

console.log('should return true: ', balanceBrackets(myString1));
