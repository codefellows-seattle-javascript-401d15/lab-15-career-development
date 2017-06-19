const Stack = require('../lib/stack');
const expect = require('chai').expect;

describe('Stack Function', function() {
  it('Should create a new stack', () => {
    let testStack = new Stack();
    expect(testStack).to.be.instanceOf(Object);
    expect(testStack).to.have.property('stack');
  });
});

describe('Stack PUSH function', function() {
  let testStack;
  beforeEach('Create test Stack', function () {
    testStack = new Stack();
    testStack.push(3);
    testStack.push(3);
    testStack.push(3);
    testStack.push(3);
    testStack.push(5);
    testStack.print();
    return;
  });

  it('Should return the last element', () => {
    expect(testStack.peek()).to.equal(5);
  });
});

describe('Stack POP function', function() {
  let testStack;
  beforeEach('Create test Stack', function () {
    testStack = new Stack();
    testStack.push(7);
    testStack.push(2);
    testStack.push(3);
    testStack.push(4);
    testStack.push(9);
    testStack.print();
    return;
  });

  it('Should add 5 elements to the stack', () => {
    expect(testStack.stack[0]).to.equal(7);
    expect(testStack.stack[4]).to.equal(9);
  });

  it('Should lengthen the length property', () => {
    expect(testStack.stack.length).to.equal(5);
  });
});

describe('Stack PEEK function', function() {
  let testStack;
  beforeEach('Create test Stack', function () {
    testStack = new Stack();
    testStack.push(1);
    testStack.push(2);
    testStack.push(3);
    testStack.push(4);
    testStack.push(8);
    testStack.print();
    return;
  });

  it('Should return the last element', () => {
    expect(testStack.peek()).to.equal(8);
  });
});
