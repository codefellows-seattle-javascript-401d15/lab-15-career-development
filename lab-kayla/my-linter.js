'use strict';

function STR(str) {
  let curly = new Stack();
  let bracket = new Stack();
  let parin = new Stack();

  for(let i = 0; i < str.length; i++) {
    if(str[i]==='{') curly.push(str[i]);
    if(str[i]==='[') bracket.push(str[i]);
    if(str[i]==='(') parin.push(str[i]);

    if(str[i]==='}') curly.pop;
    if(str[i]==='}') bracket.pop;
    if(str[i]==='}') parin.pop;
  }
  if(curly) console.error;
  if(bracket) console.error;
  if(parin) console.error;
}

STR();
