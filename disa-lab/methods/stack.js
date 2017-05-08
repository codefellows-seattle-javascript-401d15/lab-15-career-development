'use strict';

const Stack = module.exports = require('./linked-list');

Stack.prototype.push = funciton(val) {
  this.insert(val);
  return this;
};

Stack.prototype.pop = function(val) {
  this.shift(val);
  return this;
};

Stack.prototype.peek = function(val) {
  return this.head.val
};
