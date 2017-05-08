'use strict';

//Insert(val)
//Remove(val)
//Search(val)
//Shift()

const Stack = module.exports = exports = function() {
  this.Stack = [];
};

let curlyStack = new Stack();
let squareStack = new Stack();
let parenStack = new Stack();

Stack.prototype.push = function(val) {
  this.insert(val);
  return this;
};

Stack.prototype.pop = function() {
  this.shift();
  return this;
};

Stack.prototype.peek = function() {
  return this.head.val;
};

let findParen = function(str) {
  for(let i = 0; i < str.length; i++) {
    if(str[i] === '{') {
      curlyStack.push(str[i]);
    }
    if(str[i] === '[') {
      squareStack.push(str[i]);
    }
    if(str[i] === '(') {
      parenStack.push(str[i]);
    }
  }
};
