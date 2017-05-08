'use strict';

function Node(val, next) {
  this.val = val;
  this.next = next || null;
}

module.exports = Node;
