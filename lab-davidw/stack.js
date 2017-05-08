'use strict';

const Stack = module.exports = require('./linked_list.js');

Stack.prototype.push = function (val) {
  this.insert(val);
  return this;
};

Stack.prototype.pop = function () {
  this.shift();
  return this;
};

Stack.prototype.peek = function () {
  return this.head.val;
};


//O(1)
const braces = {
  '{': '{',
  '}': '}',
  '(': '(',
  ')': ')',
  '[': '[',
  ']': ']',
};

Stack.prototype.lintBraces = function (str) {

  let braceStack = new Stack();
  console.log(braceStack);
  for(let i = 0; i < str.length; i++) {
    console.log('braceStack: ', braceStack);
    if(str.charAt(i).includes(braces['{'] || braces['('] || braces['['])) {
      braceStack.push(str.charAt(i));
      console.log('head not null?', braceStack);

    } else if (str.charAt(i).includes(braces['}'] || braces[')'] || braces[']'])) {
      if (braceStack.peek() === braces['{'] && str.charAt(i) === braces['}'] || braceStack.peek() === braces['('] && str.charAt(i) === braces[')'] || braceStack.peek() === braces['['] && str.charAt(i) === braces[']']) {
        console.log(braceStack, '888');
        braceStack.pop();
      }
    } else {
      return false;
    }
    return true;
  }
};
