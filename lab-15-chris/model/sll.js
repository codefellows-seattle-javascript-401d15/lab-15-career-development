'use strict';

const Node = require('./node');

const SLL = module.exports = function() {
  this.head = null;
  this.length = 0;
};

// O(1)
SLL.prototype.prepend = function(value) {
  let node = new Node(value);

  if(!this.head) {
    this.head = node;
    this.length++;
    return this;
  }

  node.next = this.head;
  this.head = node;
  this.length++;
  return this;
};

// O(1)
SLL.prototype.shift = function() {
  if (!this.head) return console.error('the list is empty');
  try {
    let current = this.head;
    this.head = this.head.next;
    current.next = null;
    this.length --;
    return current.val;
  }
  catch(err){
    console.error(err.message);
  }
};

// O(n)
SLL.prototype.append = function(value) {
  let node = new Node(value);
  let lastNode = null;

  if(!this.head) {
    this.head = node;
    return this;
  }

  _setLastNode(this.head);
  lastNode.next = node;
  return this;

  function _setLastNode(node) {
    if(!node) return;
    lastNode = node;
    _setLastNode(node.next);
  }
};

// O(n)
SLL.prototype.reverse = function() {

  if(!this.head || !this.head.next) return this;

  let nodes = [],
    currentNode = this.head,
    node,
    reverseList = new SLL();

  while(currentNode) {
    nodes.push(currentNode);
    currentNode = currentNode.next;
  }

  reverseList.head = nodes.pop();
  currentNode = reverseList.head;

  node = nodes.pop();

  while(node) {
    node.next = null;
    currentNode.next = node;
    currentNode = currentNode.next;
    node = nodes.pop();
  }

  return reverseList;
};

// O(n)
SLL.prototype.remove = function(index) {
  let currentNode = this.head,
    i=0, previous;

  //if list is empty, exit out
  if(!currentNode) return;

  //Check if first node
  if(index === 0){
    this.head = currentNode.next;
  }else{

    while(i < index){
      previous = currentNode;
      currentNode = currentNode.next;
      i++;
    }

    previous.next = currentNode.next;

    return previous;
  }
  /*
  // pass in the index you want to remove
  let list = a list with many nodes
  list.remove(some index)
  */
};
