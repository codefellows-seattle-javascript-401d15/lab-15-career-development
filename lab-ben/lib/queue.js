'use strict';

const Queue = module.exports = require('./link-list.js');

Queue.prototype.enque = function(val) {
  this.insert(val);
};

//O(n)
Queue.prototype.dequeue = function() {
  let current = this.head;

  _setCurrent(this.head);
  if (current === this.head) {
    this.head = null;
    return this;
  }
  current.next = null;
  return this;

  function _setCurrent(node) {
    if(!node.next) return;
    current = node;
    _setCurrent(node.next);
  }
};
