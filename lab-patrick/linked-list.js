'use strict';

const Node = require('./node');

const LinkedList = module.exports =function(array){
  this.head = null;

  if(array) array.forEach(val => this.insert(val));
};


LinkedList.prototype.insert = function(val) {
  try{
    if(typeof val === 'undefined'){
      throw new ReferenceError('Enter a node value');
    } else {
      this.head = new Node (val, this.head);
      return this;
    }
  } catch(err){
    return err;
  }
};

LinkedList.prototype.shift = function(){
  if(!this.head) throw new ReferenceError('This list is empty');
  try{
    let current = this.head;
    this.head = this.head.next;
    current.next = null;
    return current.val;
  } catch (err){
    return err;
  }
};
