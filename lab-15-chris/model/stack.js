'use strict';

const Stack = module.exports = require('./sll');

// O(1)
Stack.prototype.push = function(val) {
  this.prepend(val);
  return this;
};

// O(n)
Stack.prototype.pop = function() {

  return this.shift();
};

// O(1)
Stack.prototype.peek = function() {
  return this.head.val;
};
