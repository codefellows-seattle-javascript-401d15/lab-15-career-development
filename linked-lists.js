'use strict';

const Node = require('./node');

const LL = module.exports = function(array) {
  this.head = null;
  this.length = 0;

  if(array) array.forEach(val => this.insert(val));
};

LL.prototype.insert = function(val) {
  try {
    if(typeof val === 'undefined') {
      throw new ReferenceError('Please enter a value for the node');
    } else {
      this.head = new Node(val, this.head);
      this.length += 1;
      return this;
    }
  }
  catch(error){
    return error;
  }
};

LL.prototype.remove = function(val) {
  let current;
  try {
    if (typeof val === 'undefined') {
      throw new ReferenceError('enter a value for node.');
    }else if (this.search(val) === false) {
      throw new ReferenceError('Node does not exist');
    } else {
      current = this.head;
      if (this.head.val === val) {
        this.head = current.next;
        current = null;
        this.length -=1;
        return this;
      } else {
        while (current.next) {
          if (current.next.val === val) {
            current.next = current.next.next;
            this.length -= 1;
            return this;
          } else {
            current = current.next;
          }
        }
      }
    }
  } catch(error) {
    return error;
  }
};





let myNodes = new LL([2, 4, 5, 2, 1, 6, 9]);
console.log(myNodes.insert(99));
