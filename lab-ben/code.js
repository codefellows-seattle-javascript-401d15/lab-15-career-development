'use strict';

//import Stack module

//Word
let lint = function(string) {
  let passing = true;
  // [W, o, r, d]
  let checkStack = new Stack;
  string.split('').forEach(char => check(char));

  //if anything is on the stack after the check then fail
  if(checkStack.head) return passing = false;

  if(passing) return 'yay';
  else return 'fail';

  let check = function(character) {
    if(character === '[' || character === '{' || character === '(' || character === ']' || character === '}' || character === ')') {
      if(character === '[' || character === '{' || character === '(') {
        //add to the stack push(character)
      }
      if(this.peek === '[' && character === ']') {
        //remove from the stack pop()
      }
      if(this.peek === '{' && character === '}') {
        //remove from the stack pop()
      }
      if(this.peek === '(' && character === ')') {
        //remove from the stack pop()
      }
      return passing = false;
    }
  };
};
