'use strict';

const Queue = module.exports = require('./SLL');

Queue.prototype.enqueue = function(val){
  this.insert(val);
  return this;
};

Queue.prototype.dequeue = function(){
  let curr = null;

  _setCurrent(this.head);
  curr.next = null;
  return this;

  function _setCurrent(node) {
    if(!node.next) return;
    curr = node;
    _setCurrent(node.next);
  }
};
