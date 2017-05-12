'use strict';

const Node = require('./nodeCons');

const SLL = module.exports = function(arr){
  this.head = null;
  if(arr) arr.forEach(val => this.insert(val));
};

SLL.prototype.insert = function(val) {
  try {
    if(val){
      this.head = new Node(val, this.head);
      return this;
    } else {
      throw new Error('Value required');
    }
  } catch (err) {
    return err;
  }
};

SLL.prototype.remove = function(val){
  let curr;
  try {
    if (!val) {
      throw new Error('Value required');
    } else if (this.search(val) === false){
      throw new Error('Node does not exist');
    } else {
      curr = this.head;
      if (this.head.val === val) {
        this.head = curr.next;
        curr = null;
        return this;
      } else {

        while (curr.next) {
          if (curr.next.val === val) {
            curr.next = curr.next.next;
            return this;
          } else {
            curr = curr.next;
          }
        }

      }
    }
  } catch (err) {
    return err;
  }
};

SLL.prototype.shift = function(){
  if(!this.head) throw new Error('Empty list');
  try {
    let curr = this.head;
    this.head = this.head.next;
    curr.next = null;
    return curr.val;
  } catch (err) {
    return err;
  }
};

SLL.prototype.search = function(val){
  try {
    let curr;
    if (!val) {
      throw new Error('Value required');
    } else {
      curr = this.head;

      while (curr.next) {
        if (curr.val === val) {
          return curr.val;
        } else {
          curr = curr.next;
        }
      }

      return curr.val === val ? curr.val : false;
    }

  } catch (err) {
    return err;
  }

};
