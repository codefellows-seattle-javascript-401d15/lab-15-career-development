'use strict';

const Stack = require('./stack.js');

let baconStrips = '{([])}';
let parens = new Stack();
let square = new Stack();
let handlebars = new Stack();

// O(n)
let baconSort = module.exports = function(string){
  for(let i = 0; i < string.length; i++){
    if(string[i] === '('){
      parens.push(string[i]);
      console.log(parens);
    } else if(string[i] === ')'){
      if(!parens.head) console.error(new Error('No corresponding "("'));
      parens.pop();
      console.log(parens);
    }

    if(string[i] === '['){
      square.push(string[i]);
      console.log(square);
    } else if(string[i] === ']'){
      if(!square.head) console.error(new Error('No corresponding "("'));
      square.pop();
      console.log(square);
    }

    if(string[i] === '{'){
      handlebars.push(string[i]);
      console.log(handlebars);
    } else if(string[i] === '}'){
      if(!handlebars.head) console.error(new Error('No corresponding "("'));
      handlebars.pop();
      console.log(handlebars);
    }
  }
  if(parens.head) console.log('No matching closing ")" bracket');
  if(square.head) console.log('No matching closing "]" bracket');
  if(handlebars.head) console.log('No matching closing "}" bracket');
};

baconSort(baconStrips);
