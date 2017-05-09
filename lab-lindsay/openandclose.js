'use strict';

const Stack = require('./lib/stack');

let curlyStack = new Stack();
let squareStack = new Stack();
let parenStack = new Stack();

let findParen = module.exports = function(str) {

  for(let i = 0; i < str.length; i++) {
    if(str[i] === '{') {
      curlyStack.push(str[i]);
    } else if(str[i] === '}') {
      curlyStack.pop();
    }

    if(str[i] === '[') {
      squareStack.push(str[i]);
    } else if(str[i] === ']') {
      squareStack.pop();
    }

    if(str[i] === '(') {
      parenStack.push(str[i]);
    } else if(str[i] === ')') {
      parenStack.pop();
    }
  }
};
