'use strict';

// const Node = require('./node.js');

const Stack = module.exports = require('./linked-list.js');

Stack.prototype.push = function(val) { //wrapper around the insert method, we the stack has the functionality
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