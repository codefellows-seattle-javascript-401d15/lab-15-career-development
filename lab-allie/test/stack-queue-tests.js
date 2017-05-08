'use strict';

const expect = require('chai').expect;

const Node = require('../node.js');
const Stack = require('../stack.js');
const Queue = require('../queue.js');

let stack = new Stack();

let queue = new Queue();

describe('testing stack and queue methods', function() {
  describe('testing stack methods', function() {
    it('should instantiate a new stack', done => {
      expect(stack).to.exist;
      done();
    });
    
    it('should be an object', done => {
      expect(stack).to.be.a('object');
      done();
    });
    
    describe('testing push method', function() {
      it('should not contain the value before the method is applied', done => {
        expect(stack).to.not.have.valueOf(5);
        done();
      });
      
      it('should contain the value after pushing', done => {
        stack.push(5);
        expect(stack).to.have.valueOf(5);
        done();
      });
      
      it('should add the new value at the beginning of the linked list', done => {
        expect(stack.head).to.equal.valueOf(5);
        done();
      });
      
      it('should insert another value at the beginning', done => {
        stack.push(6);
        expect(stack.head).to.equal.valueOf(6);
        done();
      });
    });
    
    describe('testing the pop method', function() {
      let stackPop = new Stack();
      stackPop.push(5).push(12).push(7).push(9);
      
      it('should contain the value before the pop method is applied', done => {
        expect(stackPop).to.have.valueOf(7);
        done();
      });
      
      it('should remove the value', done => {
        stackPop.pop();
        expect(stackPop).to.not.have.valueOf(9);
        done();
      });
      
      it('should contain the value before the pop method is applied', done => {
        expect(stackPop).to.have.valueOf(7);
        done();
      });
      
      it('should remove another value', done => {
        stackPop.pop();
        expect(stackPop).to.not.have.valueOf(7);
        done();
      });
      
    });
    
    describe('testing the peek method', function() {
      let stackPeek = new Stack();
      stackPeek.push(1).push(2).push(3).push(4);
      it('should return the first value in the list', done => {
        expect(stackPeek.peek()).to.equal(4);
        done();
      });
      
      describe('it should not return any other value in the list', function() {
        it('should not return a value of 1', done => {
          expect(stackPeek.peek()).to.not.equal(1);
          done();
        });
        
        it('should not return a value of 2', done => {
          expect(stackPeek.peek()).to.not.equal(2);
          done();
        });
        
        it('should not return a value of 3', done => {
          expect(stackPeek.peek()).to.not.equal(3);
          done();
        });
      });
    });
    
    describe.only('testing the close bracket method', function() {
      let closeBracketTest = new Stack();
      let validString = '({{[]}})';
      let invalidString = 'blahh';
      
      it('should evaluate to true if a valid string is passed in', done => {
        expect(closeBracketTest.closeBracket(validString)).to.be.true;
        done();
      });
      // TEST IS RETURNING TRUE
      it('should evalute to false if an invalid string is passed in', done => {
        expect(closeBracketTest.closeBracket(invalidString)).to.be.false;
        done();
      });
    });
    
    describe.only('testing the mixed characters method', function() {
      let mixedBracketTest = new Stack();
      let validMixedString = '({{[]}})';
      let invalidMixedString = ')){[}';
      
      it('should evaluate to true if a valid string is passed in', done => {
        expect(mixedBracketTest.closeBracket(validMixedString)).to.be.true;
        done();
      });
      // TEST IS RETURNING TRUE
      it('should evalute to false if an invalid string is passed in', done => {
        expect(mixedBracketTest.closeBracket(invalidMixedString)).to.be.false;
        done();
      });
      
      
    });
  });

  describe('testing queue methods', function() {
    it('should instantiate a new queue', done => {
      expect(queue).to.exist;
      done();
    });
    
    it('should create an object', done => {
      expect(queue).to.be.a('object');
      done();
    });
    
    describe('testing the enqueue method', function() {
      it('should not contain the value before it is added', done => {
        expect(queue).to.not.have.valueOf(16);
        done();
      });
      
      it('should contain the value after it is added', done => {
        queue.enqueue(16);
        expect(queue).to.have.valueOf(16);
        done();
      });
      
      it('should add a new value as the head of the queue', done => {
        queue.enqueue(14);
        expect(queue.head.val).to.equal(14);
        done();
      });
    });
    
    describe('testing the dequeue method', function() {
      let testDequeue = new Queue();
      testDequeue.enqueue(12).enqueue(9).enqueue(5);
      it('should contain the value before it is removed', done => {
        expect(testDequeue).to.have.valueOf(12);
        done();
      });
      
      it('should remove the first value that was added', done => {
        testDequeue.dequeue();
        expect(testDequeue).to.not.have.valueOf(12);
        done();
      });
      
      it('should still contain the other values', done => {
        expect(testDequeue).to.have.valueOf(9);
        expect(testDequeue).to.have.valueOf(5);
        done();
      });
      
      it('should remove the next value that was added', done => {
        testDequeue.dequeue();
        expect(testDequeue).to.not.have.valueOf(9);
        done();
      });
    });
  });
});