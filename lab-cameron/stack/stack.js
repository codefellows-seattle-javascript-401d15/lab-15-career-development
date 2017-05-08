'use strict';

const Stack = module.exports = require('../models/linked-list');

// O(1)
Stack.prototype.push = function(value) {
  this.insert(value);
  return this;
};

// O(1)
Stack.prototype.pop = function() {
  return this.shift();
};

// O(1)
Stack.prototype.peek = function() {
  return this.head.value;
};
