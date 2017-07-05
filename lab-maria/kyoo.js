'use strict';

const Stack = module.exports = require('./stack');


const Queue = module.exports = function() {
  console.log('hi');
  this.inbox = new Stack();
  this.outbox = new Stack();
};

Queue.prototype.enqueue = function(val) {
  this.inbox.push(val);
};


// O(m)
Queue.prototype.dequeue = function() {

  // push everything from inbox to outbox in reverse order,
  // so that the first pushed item is now the head
  //O(n)
  while(this.inbox.head) {
    this.outbox.push(this.inbox.peek());
    this.inbox.pop();
  }

  // pop will chop off the head of the outbox,
  // which was the last item in the inbox

  // O(k)
  this.outbox.pop();

  // move everything back to the inbox in original order
  //O(n)
  while(this.outbox.head) {
    this.inbox.push(this.outbox.peek());
    this.outbox.pop();
  }
};
