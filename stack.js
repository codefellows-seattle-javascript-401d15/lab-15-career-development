'use strict';

const Stack = module.exports = require('./linked-lists');

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

Stack.prototype.linter = function(list) {
  let current;
  try {
  //   if (typeof val === 'undefined') {
  //     throw new ReferenceError('enter a value for node.');
  // }
   if (this.head === null){
    throw new ReferenceError('Node does not exist');
  } else {
    while(this.head != null) {
      if (this.head === '[' && this.next === ']') {
        this.list.pop()
      } else if (this.head === '{' && this.next === '}') {
        this.list.pop()
      } else if (this.head === '(' && this.next === ')') {
        this.list.pop()
      }else if (this.prev === '[' || '{' || '(' ) {
        this.next
      }else if (this.head === null) {
        console.log('linter passed');
        return this.list
      }
    }
  }
   }
   catch (error){
     return error;
  }

}

let myStack = new Stack(['[', '(']);

console.log(myStack.linter());
