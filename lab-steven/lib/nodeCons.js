'use strict';

module.exports = function Node(value, next, prev){
  this.val = value;
  this.next = next || null;
  this.prev = prev || null;
};
