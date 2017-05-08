'use strict'

const Node = require('./node')

const LinkedList = module.exports = function(arr){
  this.head = null

  if(arr) arr.forEach(val => this.insert(val));
};


LinkedList.prototype.insert = function(val) {
  try {
    if (typeof val === 'undefined') {
      throw new ReferenceError('Enter a value')
    } else {
      this.head = new Node(val, this.head)
      // this.length += 1;
      return this
    }
  } catch (err) {
    return err
  }
};

LinkedList.prototype.remove = function(val){
  let current
  try {
    if(!val){ throw new ReferenceError('Enter a value')
    } else if (!this.search(val)){
      throw new ReferenceError('Does not exist')
    } else {
      current = this.head
      if (this.head.val === val) {
        this.head = current.next
        current = null
        return this
      } else {
        while(current.next) {
          if (current.next.val === val){
            current.next = current.next.next
            return this
          } else {
            current = current.next
          }
        }
      }
    }
  }catch(err){
    return err
  }
};

LinkedList.prototype.shift = function() {
  if(!this.head) throw new ReferenceError('List is empty')
  try {
    let current = this.head
    this.head = this.head.next
    current.next = null
    return current.val
  } catch(err){
    return err
  }
};

LinkedList.prototype.search = function(val) {
  try {
    let current
    if (typeof val === 'undefined') {
    throw new ReferenceError('Enter a value');
  } else {
    current = this.head
    while (current.next) {
      if (current.val === val) {
        return current.val
      } else {
        current = current.next
      }
    }
    return current.val === val ? current.val : false

  }
} catch (err) {
  return err
  }
};
