'use strict'

const Queue = module.exports = require('./ll')

Queue.prototype.enqueue = function(val) {
  this.insert(val)
  return this
}

Queue.prototype.dequeue = function() {
  let current = null

  setCurrent(this.head)
  current.next = null
  return this

  function setCurrent(node) {
    if(!node.next) return
    current = node
    setCurrent(node.next)
  }
}
