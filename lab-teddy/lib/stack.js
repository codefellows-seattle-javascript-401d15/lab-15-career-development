'use strict';

const Stack = module.export = require('./linkedList');

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

//O(n)
Stack.prototype.peek = function(){
  return this.head.val;
};

//O(n)
Stack.prototype.STR = function(str){
  let curly = new Stack();
  let parens = new Stack();
  let square = new Stack();

  if(str.startsWith('}' || ']' || ')')) err => console.error(err);

  for(let i = 0; i < str.length; i++){
    if(str[i] === '{') curly.push(str[i]);
    if(str[i] === '(') parens.push(str[i]);
    if(str[i] === '[') square.push(str[i]);
    if(str[i] === '}') curly.pop;
    if(str[i] === ')') parens.pop;
    if(str[i] === ']') square.pop;
  }
  if(curly) err => console.error(err);
  if(parens) err => console.error(err);
  if(square) err => console.error(err);
};
