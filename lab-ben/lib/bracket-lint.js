'use strict';

const Stack = require('./stack.js');

//O(n)
module.exports = function(string) {
  let passing = true;
  let stack = new Stack();
  string.split('').forEach(char => _check(char));

  //if anything is on the stack after the check then fail
  if(stack.head) passing = false;

  if (passing) return true;
  return false;

  function _check(char) {
    if(char === '[' || char === '{' || char === '(' || char === ']' || char === '}' || char === ')') {
      if(char === '[' || char === '{' || char === '(') {
        //add to the stack push(char)
        stack.push(char);
        return;
      }

      if(!stack.head) return passing = false;

      if(stack.peek() === '[' && char === ']') {
        //remove from the stack pop()
        stack.pop();
        return;
      }

      if(stack.peek() === '{' && char === '}') {
        //remove from the stack pop()
        stack.pop();
        return;
      }

      if(stack.peek() === '(' && char === ')') {
        //remove from the stack pop()
        stack.pop();
        return;
      }

      return passing = false;
    }
  }
};
