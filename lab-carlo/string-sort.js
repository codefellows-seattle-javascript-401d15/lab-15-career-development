'use strict';

const Stack = require('./stack');
module.exports = exports = {};

let testString = '{[()]}';

let curlies = new Stack;
let squareBrackets = new Stack;
let parenths = new Stack;

let stack = module.exports = function(string) {
  for(let i = 0; i < string.length; i++) {
    if(string[i] === '(') {
      parenths.push(string[i]);
      console.log('parenths stack ', parenths);
    } else if (string[i] === ')') {
      if(!parenths.head) {
        console.error('missing (');
        return;
      }
      parenths.pop();
      console.log('parenths stack ', parenths);
    }     if(string[i] === '[') {
      squareBrackets.push(string[i]);
      console.log('squareBrackets stack ', squareBrackets);
    } else if (string[i] === ']') {
      if(!squareBrackets.head) {
        console.error('missing (');
        return;
      }
      squareBrackets.pop();
      console.log('squareBrackets stack ', squareBrackets);
    }     if(string[i] === '{') {
      curlies.push(string[i]);
      console.log('curlies stack ', curlies);
    } else if (string[i] === ')') {
      if(!curlies.head)  {
        console.error('missing (');
        return;
      }
      curlies.pop();
      console.log('curlies stack ', curlies);
    }
  }
  if(parenths.head) console.error('not enough )');
  if(squareBrackets.head) console.error('not enough ]');
  if(curlies.head) console.error('not enough }');
};

stack(testString);
