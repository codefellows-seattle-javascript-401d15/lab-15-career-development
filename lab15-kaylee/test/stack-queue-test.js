'use strict';

const expect = require('chai').expect;
const Stack = require('./../lib/stack.js');
const Queue = require('./../lib/queue.js');

let stack = new Stack();
let queue = new Queue();

describe('testing stack methods', function() {
  describe('testing push method', function() {
    let testStack = stack.push(5);
    testStack.push(7);
    it('should return an object', done => {
      expect(testStack).to.be.an('object');
      done();
    });
    it('should exist', done => {
      expect(testStack).to.exist;
      done();
    });
    it('should contain the values 5 and 7', done => {
      expect(testStack).to.contain(5);
      expect(testStack).to.contain(7);
      done();
    });
  });
  describe('testing pop method', function() {
    let testStack = stack.push(5);
    testStack.push(7);
    testStack.pop();
    it('should return an object', done => {
      expect(testStack).to.be.an('object');
      done();
    });
    it('should exist', done => {
      expect(testStack).to.exist;
      done();
    });
    it('should contain the value 5, and not the value 7', done => {
      expect(testStack).to.contain(5);
      expect(testStack).to.not.contain(7);
      done();
    });
  });
  describe('testing peek method', function() {
    let testStack = stack.push(5);
    testStack.push(7);
    testStack.push(9);
    it('should return an object', done => {
      expect(testStack).to.be.an('object');
      done();
    });
    it('should exist', done => {
      expect(testStack).to.exist;
      done();
    });
    it('should have a head with a value of 9', done => {
      expect(testStack.head.val).to.equal(9);
      done();
    });
  });
});
describe('testing queue methods', function() {
  describe('testing enqueue method', function() {
    it('should not have a value before enqueue is called, but should have a value after it is called', done => {
      expect(queue).to.not.contain(5);
      let testQueue = queue.enqueue(5);
      expect(testQueue).to.contain(5);
      done();
    });
    it('should return an object', done => {
      expect(queue).to.be.an('object');
      done();
    });
    it('should have a head with a value of 9', done => {
      let testQueue = queue.enqueue(5);
      testQueue.enqueue(7);
      testQueue.enqueue(9);
      expect(testQueue.head.val).to.be.equal(9);
      done();
    });
  });
  describe('testing dequeue method', function() {
    it('an existing queue should contain a value before dequeue is called, but should not after it is called', done => {
      let testQueue = queue.enqueue(5);
      expect(testQueue).to.contain(5);
      testQueue.dequeue();
      expect(testQueue).to.not.contain(5);
      done();
    });
    it('should return an object', done => {
      let testQueue = queue.enqueue(4);
      testQueue.dequeue();
      expect(testQueue).to.be.an('object');
      done();
    });
    it('should have a current value of null', done => {
      let testQueue = queue.enqueue(7);
      testQueue.dequeue();
      expect(testQueue.current).to.not.equal(7);
      done();
    });
  });
});
