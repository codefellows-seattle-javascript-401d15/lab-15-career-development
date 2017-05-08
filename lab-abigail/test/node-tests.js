'use strict';

const method = require('../lib/methods');
const LinkedList = require('../lib/linked-lists');
const Stack = require('../lib/node');
const chai = require('chai');
const http = require('chai-http');
const expect = chai.expect;

chai.use(http);

describe('Peek Method functionality', function() {
  let testStack = new LinkedList();
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
