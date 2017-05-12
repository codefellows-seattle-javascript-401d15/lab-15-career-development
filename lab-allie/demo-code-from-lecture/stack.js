'use strict';

const Stack = module.exports = require('./linked-list.js'); 

Stack.prototype.push = function() { 
  this.insert(val);
  return this;
}

Stack.prototype.pop = function() {
  this.shift();
  return this;
}

Stack.prototype.peek = function() {
  return this.head.val;
}


//WHITEBOARDING: determine if a string has matching opening and closing brackets/parens

func(string) {
  iterate through string
  for each - see if it is an opening bracket, if it is, add it to the stack
  if the next one is a closing bracket, pop the openening bracket off the stack
}



let stringOne = '{}{{}}';

Stack.prototype.closeBracket = function(string) {
  
  for(let i = 0; i < string.length; i++) {  
    if (stringOne.charAt(i) === '{' || stringOne.charAt(i) === '(' || stringOne.charAt(i) === '[') {
      Stack.push(stringTwo.charAt(i));
    } else if (stringOne.charAt(i) === '}' || stringOne.charAt(i) === ')' || stringOne.charAt(i) === ']') {
      Stack.pop();
    } else {
      return false;
    }
  }
  return true;
}

let stringTwo = '{()}[)]'

Stack.prototype.mixedCharacters = function(string) {

  let stackOne = new Stack();
  let stackTwo = new Stack();
  let stackThree = new Stack();

  for(let i = 0; i < stringTwo.length; i++){
    if (stringTwo.charAt(i) === '{') {stackOne.push(stringTwo.charAt(i))}
    else if (stringTwo.charAt(i) === '}') {stackOne.pop()}
    else if (stringTwo.charAt(i) === '(') {stackTwo.push(stringTwo.charAt(i))}
    else if (stringTwo.charAt(i) === ')') {stackTwo.pop()}
    else if (stringTwo.charAt(i) === '[') {stackThree.push(stringTwo.charAt(i))}
    else if (stringTwo.charAt(i) === ']') {stackThree.pop()}
    else return false;
  }
  return true;
}