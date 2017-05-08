'use strict'

function Node(val, next){
  this.val = val,
  this.next = next || null;
  // this.prev = prev || null,
}

module.exports = Node;
