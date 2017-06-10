'use strict';

const Stack = require('./stack.js');

let parens = new Stack();
let curlies = new Stack();
let brackets = new Stack();

let strOne = '{}';
let strTwo = '{([])}';

let arrayOne = strOne.slice('');
let arrayTwo = strTwo.slice('');

let balanceBrackets = function(array) {
  for(let i = 0; i < array.length; i++) {
    if(array[i] === '(') {
      parens.push(array[i]);
    } else if(array[i] === '{') {
      curlies.push(array[i]);
    } else if(array[i] === '[') {
      brackets.push(array[i]);
    } else if(array[i] === ')') {
      parens.pop();
    } else if(array[i] === '}') {
      curlies.pop();
    } else if(array[i] === ']') {
      brackets.pop();
    }
  }
  if(parens.head) {
    throw new Error('Missing a )');
  }
  if(curlies.head) {
    throw new Error('Missing a }');
  }
  if(brackets.head) {
    throw new Error('Missing a ]');
  }
};

balanceBrackets(arrayOne);
balanceBrackets(arrayTwo);
