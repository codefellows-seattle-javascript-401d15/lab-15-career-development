'use strict';

const Stack = module.exports = require('./linked-lists');

// O(n) Big O Notation
Stack.prototype.push = function(val) {
  this.insert(val);
  return this;
};

// O(n) Big O Notation
Stack.prototype.pop = function() {
  this.shift();
  return this;
};

// O(n) Big O Notation
Stack.prototype.peek = function() {
  return this.head.val;
};


//WHITEBOARDING: determine if a string has matching opening and closing brackets/parens

// func(string) {
//   iterate through string
//   for each - see if it is an opening bracket, if it is, add it to the stack
//   if the next one is a closing bracket, pop the openening bracket off the stack
// }

// O(n) Big O Notation
Stack.prototype.closeBracket = function(string) {

  for(let i = 0; i < string.length; i++) {
    if (string.charAt(i) === '{' || string.charAt(i) === '(' || string.charAt(i) === '[') {
      Stack.prototype.push(string.charAt(i));
    } else if (string.charAt(i) === '}' || string.charAt(i) === ')' || string.charAt(i) === ']') {
      Stack.prototype.pop();
    } else {
      return false;
    }
  }
  return true;
};

// O(n) Big O Notation
Stack.prototype.mixedCharacters = function(string) {

  if (string.length%2 === 0) {
    let stackOne = new Stack();
    let stackTwo = new Stack();
    let stackThree = new Stack();

    for(let i = 0; i < string.length; i++){
      if (string.charAt(i) === '{') stackOne.push(string.charAt(i))
      else if (string.charAt(i) === '}') stackOne.pop()
      else if (string.charAt(i) === '(') stackTwo.push(string.charAt(i))
      else if (string.charAt(i) === ')') stackTwo.pop()
      else if (string.charAt(i) === '[') stackThree.push(string.charAt(i))
      else if (string.charAt(i) === ']') stackThree.pop()
      else return false;
    }
    return true;
  } else {
    throw new Error('Invalid string; odd number of values');
  }
};
