'use strict';

const Node = require('./node');

const LinkedList = module.exports = function() {
  this.head = null;
  this.length = 0;
};

LinkedList.prototype.size = function() {
  try {
    if (this.length === 0) {
      throw new Error('there are no nodes in the list');
    } else {
      return this.length;
    }
  } catch(err) {
    return err;
  }
};

LinkedList.prototype.insert = function(value) {
  try {
    if (typeof value === 'undefined') {
      throw new ReferenceError('please enter a value for the node');
    } else {
      this.head = new Node(value, this.head);
      this.length++;
      return this;
    }
  } catch(err) {
    return err;
  }
};

LinkedList.prototype.remove = function(value) {
  let current;
  try {
    if (typeof value === 'undefined') {
      throw new ReferenceError('please enter a value for the node');
    } else if (this.search(value) === 'false') {
      throw new ReferenceError('that node does not exist in the list');
    }  else {
      current = this.head;
      if (this.head.value === value) {
        this.head = current.next;
        current = null;
        this.length--;
        return this;
      } else {
        while (current.next) {
          if (current.next.value === value) {
            current.next = current.next.next;
            this.length--;
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

LinkedList.prototype.shift = function() {
  if (!this.head) throw new ReferenceError('this list is empty');
  try {
    let current = this.head;
    this.head = this.head.next;
    current.next = null;
    this.length--;
    return current.value;
  } catch (err) {
    return err;
  }
};

LinkedList.prototype.search = function(value) {
  try {
    let current;
    if (typeof value === 'undefined') {
      throw new ReferenceError('please enter a value for that node');
    } else {
      current = this.head;
      while (current.next) {
        if (current.value === value) {
          return value;
        }
        current = current.next;
      }
    }
  } catch (err) {
    return err;
  }
};
