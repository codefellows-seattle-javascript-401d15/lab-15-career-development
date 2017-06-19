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

Stack.prototype.print = function() {
  console.log(this.stack.join(' '));
};

Stack.prototype.peek = function() {
  return this.stack[this.stack.length - 1];
};
