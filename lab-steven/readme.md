# Lab 15 / DSA 03 - Stacks and Queues
This is a lab assignment in CF401 where we create Stacks and Queues, and implement some prototype methods. Also, I wrote a bracket balacer module, that returns a true or false for valid brackets.

### Setup
- Clone this repo
- Run ```npm install``` in your terminal (make sure you're at the lab-steven filepath in the repo)

### Methods
- ```Stack.pop()```         : removes top Node from Stack, and returns the modified Stack
- ```Stack.peek()```        : returns the value of the top Node in a Stack
- ```Queue.dequeue()```     : removes last node from a queue
- ```balBrkts(<string>)```  : Returns boolean value. True if string has valid brackets, false if not.

### Scripts
- ```npm run lint```         : lints the code
- ```npm run test```         : runs tests (using mocha and chai, which are devDependencies)
