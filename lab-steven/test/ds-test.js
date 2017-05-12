'use strict';

const expect = require('chai').expect;
const balBrkts = require('../lib/balBrackets');
const Queue = require('../lib/queueCons');
const Stack = require('../lib/stackCons');

let tempStack;
let tempQueue;

describe('stackCons.js', function(){
  beforeEach(function(done){
    tempStack = new Stack();
    tempStack.push(1);
    tempStack.push(2);
    tempStack.push(3);
    done();
  });
  afterEach(function(done){
    tempStack = null;
    done();
  });

  describe('#pop', function(){
    it('modifies the stack it was called on', done => {
      tempStack.pop();
      expect(tempStack.head.val).to.equal(2);
      done();
    });
    it('returns the modified stack it was called on', done => {
      let popStack = tempStack.pop();
      expect(popStack).to.equal(tempStack);
      done();
    });
    it('does not return the popped value', done => {
      let popStack = tempStack.pop();
      expect(popStack).to.not.equal(3);
      done();
    });
  });

  describe('#peek', function(){
    it('returns head value', done => {
      let peekd = tempStack.peek();
      expect(peekd).to.equal(3);
      done();
    });
    it('does not modify stack', done => {
      tempStack.peek();
      expect(tempStack.head.val).to.equal(3);
      done();
    });
    it('returns value type that is the same type input', done => {
      let peekd = tempStack.peek();
      expect(peekd).to.be.a('number');
      done();
    });
  });
});


describe('queueCons.js', function(){
  beforeEach(function(done){
    tempQueue = new Queue();
    tempQueue.enqueue(1);
    tempQueue.enqueue(2);
    tempQueue.enqueue(3);
    done();
  });
  afterEach(function(done){
    tempQueue = null;
    done();
  });

  describe('#dequeue', function(){
    it('modifies the queue it was called on', done => {
      tempQueue.dequeue();
      expect(tempQueue.head.next.next).to.be.null;
      done();
    });
    it('returns the modified queue it was called on', done => {
      let dqd = tempQueue.dequeue();
      expect(dqd).to.equal(tempQueue);
      done();
    });
    it('does not return the dequeued value', done => {
      let dqd = tempQueue.dequeue();
      expect(dqd).to.not.equal(1);
      done();
    });
  });
});

describe('balBrackets.js', function(){
  describe('balBrackets functionality', function(){
    it('returns true for string with balanced brackets', done => {
      let string = 'this[is]{balanced()}';
      expect(balBrkts(string)).to.be.true;
      done();
    });
    it('returns false for string with unbalance brackets', done => {
      let string = 'this[is]not({balanced)}';
      expect(balBrkts(string)).to.be.false;
      done();
    });
    it('returns a boolean value', done => {
      let string = '{this} [is] (fine)';
      expect(balBrkts(string)).to.be.a('boolean');
      done();
    });
  });
});
