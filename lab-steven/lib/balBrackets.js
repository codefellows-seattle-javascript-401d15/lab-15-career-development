'use strict';

const Stack = require('./stackCons');

//O(n)
module.exports = function(string){
  let tempStack = new Stack();
  let curr;
  let prev;
  try {
    for(let i = 0; i < string.length; i++){
      curr = string.charAt(i);

      if(curr === '(' || curr === '[' || curr === '{'){
        tempStack.push(curr);
      } else if (curr === ')' || curr === ']' || curr === '}'){
        prev = tempStack.shift();
        if (curr === ')' && prev !== '(') return false;
        if (curr === ']' && prev !== '[') return false;
        if (curr === '}' && prev !== '{') return false;
      }
    }

    if (tempStack.head !== null) return false;
    return true;
  } catch(err) {
    throw new Error(err);
  }
};
