'use strict';

const Stack = module.exports = require('./stack');

let bracketArray = [];

Stack.prototype.tinder = function(str) {
  if(str.startsWith(']' || ')' || '}' )) err => {
    return console.error(err);
  };
  for (let i=0; i < str.length; i++) {
    if(str[i]==='{') bracketArray.push(str[i]);

  }
};
