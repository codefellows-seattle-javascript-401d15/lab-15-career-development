'use strict';

const expect = require('chai').expect;

const Node = require('../node.js');
const Stack = require('../stack.js');
const Queue = require('../queue.js');

let stack = new Stack();

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
        stackPop.pop(7);
        expect(stackPop).to.not.have.valueOf(7);
        done();
      });
      
      it('should contain the value before the pop method is applied', done => {
        expect(stackPop).to.have.valueOf(12);
        done();
      });
      
      it('should remove another value', done => {
        stackPop.pop(12);
        expect(stackPop).to.not.have.valueOf(12);
        done();
      });
      
    });
    //NEED TWO MORE TESTS HERE
    describe('testing the peek method', function() {
      let stackPeek = new Stack();
      stackPeek.push(1).push(2).push(3).push(4);
      it('should return the first value in the list', done => {
        expect(stackPeek.peek()).to.equal(4);
        done();
      });
    });
    
    describe('testing the close bracket method', function() {
      let closeBracketTest = new Stack();
      let validString = '({{[]}})';
      let invalidString = 'blah';
      
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
    
    describe('testing the mixed characters', function() {
      let mixedBracketTest = new Stack();
      let validMixedString = '({{[]}})';
      let invalidMixedString = 'blah';
      
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

  describe('testing queue methods', function() {});
});