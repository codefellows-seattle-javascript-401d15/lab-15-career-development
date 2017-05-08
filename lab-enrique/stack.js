'use strict';

let str = [];

let curly = new Stack();
let square = new Stack();
let circle = new Stack();

for(let i = 0; i = str.length; i++){
  if(str[i] = '{'){
    curly.push(str[i]);
  }
  if(str[i] = '['){
    square.push(str[i]);
  }
  if(str[i] = '('){
    circle.push(str[i]);
  }

}
