'use strict';

//Not required to use Queues on lab 15
//Notes on Queues from 5/5/17 401

const Queue = module.exports = require(‘./linked_list’);

Queue.prototype.tail = null;

Queue.prototype.enqueue = function(val) {
	this.insert(val)
	if(!this.head.next) this.tail = this.head
	return this
}

Queue.prototype.dequeue = function() {
	let current = null;

	_setCurrent(this.head)
	current.next = null;
	return this;

	function _setCurrent(node) {
		if(!node.next) return
		current = node
		_setCurrent (node.next)
	}
}
