'use strict';

const express = require('express');
const mongoose = require('mongoose');
const Promise = require('bluebird');
const bodyParser = require('body-parser').json();
const queueTest = require('./queue');
const stackTest = require('./stack')

const app = module.exports = express();
const router = express.Router();
const PORT = process.env.PORT || 3000;


// const Queue = module.exports = exports = function(){
//   this.queue = [];
//
//
//   Queue.prototype.pop = function(){
//     this.queue.length(-1).remove();
//   };
//
//   Queue.prototype.peek = function(){
//     return this.queue[0];
//   };
//
//   Queue.prototype.dequeue = function(){
//     return this.queue.shift();
//   };
//
//   Queue.prototype.enqueue = function(val){
//     this.queue.push(val);
//   };
//
// };
//
// let myQueue = [2,3,4,5,6,6,8];
//
// console.log(myQueue.peek());



app.listen(PORT, () => console.log(`Making port: ${PORT}`));
