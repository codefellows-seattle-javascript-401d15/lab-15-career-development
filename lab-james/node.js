'use strict';

function Node(val, next, previous) {
  this.val = val;
  this.next = next || null;
  this.previous = previous || null;
}

module.exports = Node;
