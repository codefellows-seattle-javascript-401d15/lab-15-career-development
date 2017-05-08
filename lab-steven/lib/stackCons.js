'use strict';

const Stack = module.exports = require('./SLL');

//O(1)
Stack.prototype.push = function(val){
  this.insert(val);
  return this;
};

//O(1)
Stack.prototype.pop = function(){
  this.shift();
  return this;
};

//O(1)
Stack.prototype.peek = function(){
  return this.head.val;
};
