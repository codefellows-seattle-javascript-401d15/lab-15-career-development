'use strict';

const expect = require('chai').expect;

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
        expect(stackPop).to.have.valueOf(9);
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
    
    describe('testing the close bracket method', function() {
      let closeBracketTest = new Stack();
      let validString = '({{[]}})';
      let invalidString = 'blahh';
      let secondInvalidString = '{{]}}';
      
      it('should evaluate to true if a valid string is passed in', done => {
        expect(closeBracketTest.closeBracket(validString)).to.be.true;
        done();
      });
  
      it('should evalute to false if an invalid string is passed in', done => {
        expect(closeBracketTest.closeBracket(invalidString)).to.be.false;
        done();
      });
      
      it('should evaluate to false if an invalid string is passed in', done => {
        expect(closeBracketTest.closeBracket(secondInvalidString)).to.be.false;
        done();
      });
    });
    
    describe('testing the mixed characters method', function() {
      let mixedBracketTest = new Stack();
      let validMixedString = '({{[]}})';
      let invalidMixedString = ')){[}';
      let secondInvalidMixedString = 'blech';
      
      it('should evaluate to true if a valid string is passed in', done => {
        expect(mixedBracketTest.mixedCharacters(validMixedString)).to.be.true;
        done();
      });
      
      it('should evalute to false if an invalid string is passed in', done => {
        expect(mixedBracketTest.mixedCharacters(invalidMixedString)).to.be.false;
        done();
      });
      
      it('should evaluate to false if an invalid string is passed in', done => {
        expect(mixedBracketTest.mixedCharacters(secondInvalidMixedString)).to.be.false;
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
  
  describe('testing reverse polish notation method - STRETCH', function() {
    let rpn = new Stack();
    
    it('should add the numbers', done => {
      let add = '78+';
      expect(rpn.reversePolishNotation(add)).to.equal(15);
      done();
    });
    
    it('should subtract the numbers', done => {
      let subtract = '27-';
      expect(rpn.reversePolishNotation(subtract)).to.equal(5);
      done();
    });
    
    it('should multiply the numbers', done => {
      let multiply = '77*';
      expect(rpn.reversePolishNotation(multiply)).to.equal(49);
      done();
    });
    
    it('should divide the numbers', done => {
      let divide = '39/';
      expect(rpn.reversePolishNotation(divide)).to.equal(3);
      done();
    });
  });
  
  describe('testing the creation of a queue from a stack - STRETCH', function() {
    let makeQueue = new Stack();
    let testArray = [1, 2, 3, 4, 5];
    
    it('should return a queue', done => {
      expect(makeQueue.queueFromStacks(testArray).head.val.head.val).to.equal(1);
      done();
    });
    
    it('should return an object', done => {
      expect(makeQueue.queueFromStacks(testArray)).to.be.a('object');
      done();
    });
    
    it('should have the numbers in the same order as the array that is passed in', done => {
      expect(makeQueue.queueFromStacks(testArray).head.val.head.val).to.deep.equal(testArray[0]);
      done();
    });
  });
});