'use strict';

const Node = require('./node.js');

const LinkedList = module.exports = function(array){
  this.head = null;

  if(array) array.forEach(val => this.insert(val));
};

LinkedList.prototype.insert = function(val){
  try {
    if(typeof val === 'undefined'){
      throw new ReferenceError('Enter a value, fool');
    }else{
      this.head = new Node(val, this.head);//when we put this.head into the evaluation, pre-assignment, we're saying that the node that is this node's next node is the head, and then when we assign it, we're making this node the new head.
      return this;
    }
  }catch(e){
    return e;
  }
};

//newNode = new Node(val, null, this.head);

LinkedList.prototype.remove = function(val){
  let current;
  try{
    if(typeof val === 'undefined'){
      throw new ReferenceError('Enter a value dummy.');
    }else if(this.search(val) === false){
      throw new ReferenceError('Do you know what a search is?');
    } else {
      current = this.head;
      if(this.head.val === val){
        this.head = current.next;
        current = null;
        return this;
      }
      while(current.next){
        if(current.next.val === val){
          current.next = current.next.next;
          return this;
        } else{
          current = current.next;
        }
      }
    }
  }catch(e){
    return e;
  }
};

LinkedList.prototype.shift = function(){
  if(!this.head) throw new ReferenceError('Empty list');
  try{
    let current = this.head;
    this.head = this.head.next;
    current.next = null;
    return current.val;
  } catch(e){
    return e;
  }
};

LinkedList.prototype.search = function(val){
  try{
    let current;
    if(typeof val === 'undefined'){
      throw new ReferenceError('Enter a value to search for');
    }else{
      current = this.head;
      while(current.next){

      }
    }
  } catch(e){
    return e;
  }
};
