'use strict';

const chai = require('chai');
const expect = chai.expect;
const match = require('../bracket-matcher');
const Stack = require('../model/stack');

describe('bracket-matcher()', function() {

  it('should return true if brackets are correct', done => {
    let myString1 = '[{((({})([])))},{}{{{{{}}}}function(({}){})}]';
    let result = match(myString1);
    console.log('should return true: ', match(myString1));
    expect(result).to.be.true;
    done();
  });

  it('should return false if brackets do not match', done => {
    let myString1 = '[{((({})([])))},{}{{{{{}}}}function(({}){}})}]';
    let result = match(myString1);
    console.log('should return false: ', match(myString1));
    expect(result).to.be.false;
    done();
  });

  it('should return false if no string length', done => {
    let myString1 = '';
    let result = match(myString1);
    console.log('should return false: ', match(myString1));
    expect(result).to.be.false;

    done();
  });
});

describe('stack.pop()', function() {
  it('should remove the head of the list', done => {
    let stack = new Stack();
    stack.push(2);
    stack.push(1);
    let result = stack.pop();
    expect(result).to.equal(1);

    done();
  });
});

describe('stack.push()', function() {
  it('should prepend the new node as the head', done => {
    let stack = new Stack();
    stack.push(2);
    stack.push(1);
    let result = stack.head.val;
    expect(result).to.equal(1);

    done();
  });
});

describe('stack.peek()', function() {
  it('should return the value of the head', done => {
    let stack = new Stack();
    stack.push(2);
    stack.push(1);
    let result = stack.peek();
    expect(result).to.equal(1);

    done();
  });
});
