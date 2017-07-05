const expect = require('chai').expect;
const Stack = require('../stack');
const Kyoo = require('../kyoo')
const Linter = require('../app');

describe('Stack test', function() {
  it('should push an item to the stack', () => {
    let test = new Stack();
    test.push(1);
    expect(test.head.val).to.equal(1);
    test.push(2);
    expect(test.head.val).to.equal(2);
    expect(test.head.next.val).to.equal(1);
  });
  it('should pop the most recently added item from the stack', () => {
    let test = new Stack();
    test.push(1);
    test.push(2);
    test.push(3);
    test.pop();
    expect(test.head.val).to.equal(2);
  });
  it('should return the value of the current head', () => {
    let test = new Stack();
    test.push(1);
    test.push(2);
    test.push(3);
    test.push(4);
    test.push(5);
    expect(test.peek()).to.equal(5);
    test.pop();
    expect(test.peek()).to.equal(4);
  });
});

describe('Kyoo test', function() {
  it('should add an item to the kyoo', () => {
    let kyoo = new Kyoo();
    kyoo.enqueue(1);
    expect(kyoo.inbox.peek()).to.equal(1);
    kyoo.enqueue(2);
    expect(kyoo.inbox.peek()).to.equal(2);
    kyoo.enqueue(3);
    expect(kyoo.inbox.peek()).to.equal(3);
  });
  it('should remove the first item added from the queue', () => {
    let kyoo = new Kyoo();
    kyoo.enqueue(1);
    kyoo.enqueue(2);
    kyoo.enqueue(3);
    kyoo.dequeue();
    expect(kyoo.inbox.peek()).to.equal(3);
    expect(kyoo.inbox.head.next.val).to.equal(2);
    expect(kyoo.inbox.head.next.next).to.equal(null);
    kyoo.enqueue(4);
    kyoo.dequeue();
    expect(kyoo.inbox.peek()).to.equal(4);
    expect(kyoo.inbox.head.next.val).to.equal(3);
    expect(kyoo.inbox.head.next.next).to.equal(null);
  });
});

let test1 = '{}{}{}';
let test2 = '()()()';
let test3 = '[][][]';
let test4 = '[]{}()';
let test5 = '[[]]{}{([])}';
let test6 = '[{]()}[]{}(})';
let test7 = '{}[]function{}()';

describe('lint test', function() {
  it('should return true', () => {
    expect(Linter(test1)).to.equal(true);
    expect(Linter(test2)).to.equal(true);
    expect(Linter(test3)).to.equal(true);
    expect(Linter(test4)).to.equal(true);
    expect(Linter(test5)).to.equal(true);
    expect(Linter(test6)).to.equal(false);
    expect(Linter(test7)).to.equal(true);
  });

});
