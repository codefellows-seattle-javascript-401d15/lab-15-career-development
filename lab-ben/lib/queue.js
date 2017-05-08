'use strict';

const Queue = module.exports = require('./link-lists.js');

Queue.prototype.enque = function(val) {
  this.insert(val);
};

//O(n)
Queue.prototype.dequeue = function() {
  let current;

  _setCurrent(this.head);
  current.next = null;
  return this;

  function _setCurrent(node) {
    if(!node.next) return;
    current = node;
    _setCurrent(node.next);
  }
};
