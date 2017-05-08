'use strict';

const Stack = require('./stack.js');

//O(n)
module.exports = function(string) {
  let stack = new Stack();
  string.split('').forEach(char => _check(char));

  //if anything is on the stack after the check then fail
  if(stack.head) return false;

  return true;

  function _check(char) {
    if(char === '[' || char === '{' || char === '(' || char === ']' || char === '}' || char === ')') {
      if(char === '[' || char === '{' || char === '(') {
        //add to the stack push(char)
        stack.push(char);
        return;
      }
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
      return false;
    }
  }
};
