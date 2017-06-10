'use strict';

const Queue = module.exports = require('./lilnked-list.js');

Queue.prototype.tail = function(){
  this.tail = null;
};

Queue.prototype.enqueue = function(val){
  this.insert(val);
  if(!this.head.next) this.tail = this.head;
  return this;
};

Queue.prototype.dequeue = function(val){
  let current = null;
  _setCurrent(this.head);
  current.next = null;
  return this;

  function _setCurrent(node){
    if(!node.next) return;
    current = node;
    _setCurrent(node.next);
  }
};
