'use strict';

const Stack = require('./stack');

// O(n)
module.exports = function(string) {
  let brackets = '[]{}()';
  let stack = new Stack();

  if (string.length < 1) return new Error('no content to lint!');

  for (let i = 0; i < string.length; i++) {
    let c = string[i];
    let position = brackets.indexOf(c),
      type;
    if (!~position) continue;

    type = position % 2 ? 'closed' : 'open';
    if (type === 'closed') {
      if (!stack.length || brackets.indexOf(stack.pop()) != position - 1) {
        return false;
      }
    } else {
      stack.push(c);
    }
  }
  return !stack.length;
};
