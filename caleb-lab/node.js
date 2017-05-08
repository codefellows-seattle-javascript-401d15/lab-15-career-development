'use strict';

function Node(val, next, prev){
  this.val = val;
  this.next = next || null; //this means that it's the head or last item if null
  this.prev = prev || null; //if this is included, your object is inherently a doubly linked list.
}

module.exports = Node;
