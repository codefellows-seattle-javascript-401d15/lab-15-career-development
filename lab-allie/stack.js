'use strict';

const Stack = module.exports = require('./linked-list.js');

//O(1)
Stack.prototype.push = function(val) {
  this.insert(val);
  return this;
};

//O(1)
Stack.prototype.pop = function() {
  this.shift();
  return this;
};

//O(1)
Stack.prototype.peek = function() {
  return this.head.val;
};

let stringOne = '{}{{}}';

//O(n)
Stack.prototype.closeBracket = function(string) {
  if([...string].length % 2 !== 0) {
    return false;
  } 

  let stack = new Stack();
  
  for(let i = 0; i < string.length; i++) {  
    if (stringOne.charAt(i) === '{' || stringOne.charAt(i) === '(' || stringOne.charAt(i) === '[') {
      stack.push(stringOne.charAt(i));
    } else if (stringOne.charAt(i) === '}' || stringOne.charAt(i) === ')' || stringOne.charAt(i) === ']') {
      stack.pop();
    } else {
      return false;
    }
    return true;
  }
};

//O(n)
Stack.prototype.mixedCharacters = function(string) {
  if([...string].length % 2 !== 0) {
    return false;
  }

  let stackOne = new Stack();
  let stackTwo = new Stack();
  let stackThree = new Stack();

  for(let i = 0; i < string.length; i++){
    if (string.charAt(i) === '{') {
      stackOne.push(string.charAt(i));}
    else if (string.charAt(i) === '}') {stackOne.pop();}
    else if (string.charAt(i) === '(') {stackTwo.push(string.charAt(i));}
    else if (string.charAt(i) === ')') {stackTwo.pop();}
    else if (string.charAt(i) === '[') {stackThree.push(string.charAt(i));}
    else if (string.charAt(i) === ']') {stackThree.pop();}
    else return false;
  }
  return true;
};

//O(1) - STRETCH GOAL
Stack.prototype.reversePolishNotation = function(string) {
  let stack = new Stack();
  
  let operators = ['+', '-', '*', '/'];
  
  for(let i = 0; i < string.length; i++) {
    if(!isNaN(string.charAt(i))) stack.push(string.charAt(i));
  
    if(operators.includes(string.charAt(i))) {
      let X = parseInt(stack.head.val);
      stack.pop();
      let Y = parseInt(stack.head.val);
      if(string.charAt(i) === '+') {
        return X + Y;
      } else if (string.charAt(i) === '-') {
        return X - Y;
      } else if (string.charAt(i) === '*') {
        return X * Y;
      } else if (string.charAt(i) === '/') {
        return X / Y;
      } else return false;
    }
  }  
};

//O(n) - STRETCH GOAL
//Might be O(n^2) because there are two for loops but I think it's O(n) because the second for loop is not nested inside the first for loop
Stack.prototype.queueFromStacks = function(array) {
  let stackOne = new Stack();
  let stackTwo = new Stack();
  
  for(let i = 0; i < array.length; i++) {
    stackOne.push(array[i]);
  }
  
  for(let i = 0; i < array.length-1; i++) {
    stackTwo.push(stackOne.pop());
  }
  return stackTwo;
};