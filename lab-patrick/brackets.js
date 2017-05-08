'use strict';

const Stack = require('./stacks');

let testString = '({)}';

let brackets = new Stack;
let curlBrackets = new Stack;
let squrBrackets = new Stack;

module.exports = exports ={};

let stacker = module.exports = function(string){
  for (let i = 0; i < string.length; i++) {
    if(string[i] === '('){
      brackets.push(string[i]);
      console.log(brackets);
    } else if (string[i] === ')'){
      if(!brackets.head){
        console.log('Corresponding "(" not found');
        return;
      }
      brackets.pop();
      console.log(brackets);
    }
    if(string[i] === '{'){
      curlBrackets.push(string[i]);
      console.log(curlBrackets);
    } else if (string[i] === ']'){
      if(!brackets.head){
        console.log('Corresponding "[" not found');
        return;
      }
      curlBrackets.pop();
      console.log(curlBrackets);
    }
    if(string[i] === '['){
      squrBrackets.push(string[i]);
      console.log(squrBrackets);
    } else if (string[i] === ']'){
      if(!brackets.head){
        console.log('Corresponding "[" not found');
        return;
      }
      squrBrackets.pop();
      console.log(squrBrackets);
    }
  }
  if(brackets.head) console.log('something went wrong with your ")"');
  if(curlBrackets.head) console.log('something went wrong with your  "}"');
  if(squrBrackets.head) console.log('something went wrong with your  "]"');
};

stacker(testString);
