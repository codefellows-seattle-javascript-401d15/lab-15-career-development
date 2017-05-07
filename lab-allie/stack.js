'use strict';

const Stack = module.exports = require('./linked-list.js');

Stack.prototype.push = function() {
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