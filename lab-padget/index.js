'use strict';

// TODO: implement a function to determine if a string has matching brackets "{}" "[()]{}"
// TODO: the string can have characters that are not brackets
// TODO: this method should be a pure function, returning a new Stack

// TODO: complete the Stack data structure by adding a pop() and peek() method.
// TODO: complete the Queue data structure by adding an dequeue() method.
// TODO: implement Balanced Brackets using a Stack; from your whiteboard exercise.
// TODO: in comments above or within each function, note the Big-O runtime.

const Stack = require('./lib/stack.js');

module.exports = function(string) {

  let passing = true;
  let stack = new Stack();
  string.split('').forEach(char => check(char));

  //if anything is on the stack after the check then fail
  if(stack.head) passing = false;

  if (passing) return true;
  return false;

  function check(char) {
    if(char === '[' || char === '{' || char === '(' || char === ']' || char === '}' || char === ')') {
      if(char === '[' || char === '{' || char === '(') {
        //add to the stack push(char)
        stack.push(char);
        return;
      }
      if (!stack.head) return passing = false;

      if(this.peek === '[' && char === ']') {
        //remove from the stack pop()
        stack.pop();
        return;
      }
      if(this.peek === '{' && char === '}') {
        //remove from the stack pop()
        stack.pop();
        return;
      }
      if(this.peek === '(' && char === ')') {
        //remove from the stack pop()
        stack.pop();
        return;
      }
      return passing = false;
    }
  }
};
