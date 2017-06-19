const Queue = require('../lib/queue');
const expect = require('chai').expect;

describe('Queue Function', function() {
  it('Should create a new queue', () => {
    let testQueue = new Queue();
    expect(testQueue).to.be.instanceOf(Object);
    expect(testQueue).to.have.property('queue');
  });
});

describe('Queue enqueue function', function() {
  let testQueue;
  beforeEach('Create test Queue', function () {
    testQueue = new Queue();
    testQueue.enqueue(1);
    testQueue.enqueue(2);
    testQueue.enqueue(3);
    testQueue.enqueue(4);
    testQueue.enqueue(5);
    testQueue.print();
    return;
  });

  it('Should enqueue elements', () => {
    expect(testQueue.queue[0]).to.equal(1);
    expect(testQueue.queue.length).to.equal(5);
  });
});

describe('Queue dequeue function', function () {
  let testQueue;
  beforeEach('Create test Queue', function () {
    testQueue = new Queue();
    testQueue.enqueue(1);
    testQueue.enqueue(2);
    testQueue.enqueue(3);
    testQueue.enqueue(4);
    testQueue.enqueue(5);
    testQueue.print();
    return;
  });

  it('should dequeue the first element', () => {
    testQueue.dequeue();
    expect(testQueue.queue[0]).to.equal(2);
    expect(testQueue.queue[0]).to.not.equal(1);
  });

  it('should dequeue ALL elements', () => {
    testQueue.dequeue();
    testQueue.dequeue();
    testQueue.dequeue();
    testQueue.dequeue();
    testQueue.dequeue();
    expect(testQueue.queue[0]).to.equal(undefined);
    expect(testQueue.queue.length).to.equal(0);
  });
});
