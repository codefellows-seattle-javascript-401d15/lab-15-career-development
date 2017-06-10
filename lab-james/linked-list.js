'use strict';

const Node = require('./node.js');

const Sll = module.exports = function(array) {
  this.head = null;

  if(array) {
    array.forEach(val => {
      this.insert(val);
    });
  }
};

Sll.prototype.insert = function(val) {
  try {
    if(typeof val === 'undefined') {
      throw new ReferenceError('Value needed for node.');
    } else {
      this.head = new Node (val, this.head);
      return this;
    }
  } catch(err) {
    return err;
  }
};

Sll.prototype.search = function(val) {
  try {
    let current;
    if(typeof val === 'undefined') {
      throw new ReferenceError('Value needed for node.');
    } else {
      current = this.head;
      while(current.next) {
        if(current.val === val) {
          return current.val;
        } else {
          current = current.next;
        }
      }
      if(current.val === val) {
        return current.val;
      } else {
        return false;
      }
    }
  } catch(err) {
    return err;
  }
};

Sll.prototype.remove = function(val) {
  let current;
  try {
    if(typeof val === 'undefined') {
      throw new ReferenceError('Value needed for node.');
    } else if(this.search(val) === false) {
      throw new ReferenceError('Value does not exist in list.');
    } else {
      current = this.head;
      if(this.head.val === val) {
        this.head = current.next;
        return this;
      } else {
        while(current.next) {
          if(current.next.val === val) {
            current.next = current.next.next;
            return this;
          } else {
            current = current.next;
          }
        }
      }
    }
  } catch(err) {
    return err;
  }
};

Sll.prototype.shift = function() {
  if(!this.head) {
    throw new ReferenceError('This list is empty.');
  }
  try {
    let current = this.head;
    this.head = this.head.next;
    current.next = null;
    return current.val;
  } catch(err) {
    return err;
  }
};
