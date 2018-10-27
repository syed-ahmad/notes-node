console.log('Starting app...');

const fs = require('fs');
const os = require('os');
// 1. Look for core module lodash
// 2. Look inside node_modules folder
const _ = require('lodash');
const notes = require('./notes');

var filteredArray = _.uniq(['syed', 1, 'syed', 2, 3, 4, 1]);
console.log(filteredArray);

// console.log(_.isString(true));
// console.log(_.isString('Syed'));

// var res = notes.add;
// console.log('Result: ', res(2,3));

// var user = os.userInfo();


// // fs.appendFile('greetings.txt', `Hello ${user.username}! You are ${notes.age}`, function(err){
//     // if(err) {
//         console.log('An error occured');
//     }
// });