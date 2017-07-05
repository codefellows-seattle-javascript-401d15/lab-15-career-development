const Stack = require('./stack.js');

// I took a look at Cameron's solution and after staring at it all day I
// finally figured out what he was doing and how it worked and I lked it so
// much I wanted to use it too, so my solution is similar but more verbose
// to prove I actually get it but also for readabiliy because at first glance
// his code is unreadable (and a little bit show-offy but whatevs)
// actually after doing my version I have no idea how cameron's works other than
// the "!~" part, that was ingenious

//O(n)
const primitiveLint = module.exports = function(string) {
  if(!string.length) return new Error('nothing to lint');

  let brackets = '{}[]()';

  let stack = new Stack();

  for(let i = 0; i < string.length; ++i) {
    let position = brackets.indexOf(string[i]);

    if (!~position) continue;

    if(position % 2 === 0) {
      stack.push(string[i]);
    }
    else {
      if (brackets.indexOf(stack.peek()) != position - 1) {
        console.log('FALSE');
        return false;
      }
      stack.pop();
    }
  }
  console.log('true');
  return true;
};
