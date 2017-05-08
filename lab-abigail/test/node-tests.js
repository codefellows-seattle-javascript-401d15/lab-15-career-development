'use strict';

const Stack = require('../lib/methods');
const chai = require('chai');
const http = require('chai-http');
const expect = chai.expect;

chai.use(http);

describe('Peek Method functionality', function() {
  let testStack = new Stack();
  testStack.push(1).push(2).push(3).push(4);

  it('will exist', function(done) {
    expect(testStack.peek()).to.exist;
    done();
  });

  it('will be equal to 4', function(done) {
    expect(testStack.peek()).to.be.equal(4);
    done();
  });

  it('will not be equal to 3', function(done) {
    expect(testStack.peek()).to.not.be.equal(3);
    done();
  });

  it('will be a number', function(done) {
    expect(testStack.peek()).to.be.a('number');
    done();
  });
});

describe('Push Method functionality', function() {
  let testStack = new Stack();
  testStack.push(1);
  testStack.push(2);
  testStack.push(3);
  testStack.push(4);
  testStack.push(5);

  it('head should be equal to 1', function(done) {
    expect(testStack.head.val).to.be.equal(5);
    done();
  });

  it('head should be a number', function(done) {
    expect(testStack.head.val).to.be.a('number');
    done();
  });

  it('head should not be equal to 4', function(done) {
    expect(testStack.head.val).to.not.equal(1);
    done();
  });
});

describe('Pop Method functionality', function() {
  let testStack = new Stack();
  testStack.push(1);
  testStack.push(2);
  testStack.push(3);
  testStack.push(4);


  testStack.pop();

  it('head should be equal to 3', function(done) {
    expect(testStack.head.val).to.be.equal(3);
    done();
  });

  it('head should be a number', function(done) {
    expect(testStack.head.val).to.be.a('number');
    done();
  });

  it('head should not be equal to 4', function(done) {
    expect(testStack.head.val).to.not.equal(4);
    done();
  });

  it('head should not be equal to 3', function(done) {
    testStack.pop();
    expect(testStack.head.val).to.not.equal(3);
    done();
  });

  it('head should be equal to 1', function(done) {
    testStack.pop();
    expect(testStack.head.val).to.equal(1);
    done();
  });
});

describe('Close Bracket Tests', function() {
  let stringOne = '{}{{}}';
  let stringTwo = '{}{{}}2(';
  let closeBracketStack = new Stack();

  let trueCloseBracket = closeBracketStack.closeBracket(stringOne);
  let falseCloseBracket = closeBracketStack.closeBracket(stringTwo);


  it('should be true', function(done) {
    expect(trueCloseBracket).to.be.equal(true);
    done();
  });

  it('should exist', function(done) {
    expect(trueCloseBracket).to.exist;
    done();
  });

  it('should exist', function(done) {
    expect(trueCloseBracket).to.be.a('boolean');
    done();
  });

  it('should be false', function(done) {
    expect(falseCloseBracket).to.be.equal(false);
    done();
  });
});

describe('Mixed Bracket Tests', function() {
  let validString = '{()}[(])';
  let invalidString = '{()}[](3';
  let mixedBracketStack = new Stack();

  let trueMixedBracket = mixedBracketStack.mixedCharacters(validString);
  let falseMixedBracket = mixedBracketStack.mixedCharacters(invalidString);

  it('should be true', function(done) {
    expect(trueMixedBracket).to.be.equal(true);
    done();
  });

  it('should exist', function(done) {
    expect(trueMixedBracket).to.exist;
    done();
  });

  it('should exist', function(done) {
    expect(trueMixedBracket).to.be.a('boolean');
    done();
  });

  it('invalid input should produce a false', function(done) {
    expect(falseMixedBracket).to.be.equal(false);
    done();
  });
});
