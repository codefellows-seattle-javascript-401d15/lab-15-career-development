'use strict';

const Stack = module.exports = exports = function() {
  this.stack = [];
};

Stack.prototype.push = function(value) {
  this.stack.push(value);
};

Stack.prototype.pop = function() {
  return this.stack.pop();
};

Stack.prototype.peek = function() {
  return this.stack[this.stack.length - 1];
};

Stack.prototype.length = function() {
  return this.stack.length;
};

Stack.prototype.ReversePolishNotation = function(values) {
  let returnValue = 0;
  let operators = '+-*/';
  let stack = [];

  for (let i = 0; i < values.length; i++) {
    if (operators.indexOf(values[i]) == -1) {
      stack.push(values[i]);
    } else {
      let a = parseInt(stack.pop());
      let b = parseInt(stack.pop());

      switch (values[i]) {
      case '+':
        stack.push(a + b);
        break;

      case '-':
        stack.push(a - b);
        break;

      case '*':
        stack.push(a * b);
        break;

      case '/':
        stack.push(b / a);
        break;
      }
    }
  }
  returnValue = parseInt(stack.pop());

  return returnValue;
};

Stack.prototype.print = function() {
  console.log(this.stack.join(' '));
};

// Implelement a Queue Data structure using two stack Arrays

let stackOne = new Stack();
let stackTwo = new Stack();

stackOne.push(1);
stackOne.push(2);
stackOne.push(3);
console.log(stackOne);
// stack one has standard stack sequence

stackTwo.push(stackOne.pop());
stackTwo.push(stackOne.pop());
stackTwo.push(stackOne.pop());
console.log(stackTwo);
// stack two is a queue data structure

stackTwo.pop();
stackTwo.pop();
stackTwo.pop();
// stack two will pop out 1, 2, 3 FIFO
