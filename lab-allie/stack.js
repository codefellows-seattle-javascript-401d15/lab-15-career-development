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

let string = '{()}[)]';

//O(n)
Stack.prototype.mixedCharacters = function(string) {
  if([...string].length % 2 !== 0) {
    return false;
  };

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