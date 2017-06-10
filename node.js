'use strict';

const Node = module.exports = function(val, next, prev) {
  this.val = val;
  this.next = next || null;
  this.prev = prev || null;
};
