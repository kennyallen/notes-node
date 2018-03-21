console.log('Starting app.');

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');

var adding = notes.add();
console.log(adding);

// var user = os.userInfo();

// fs.appendFileSync('greetings.txt', `Hello ${user.username}! You are ${notes.age}. `);
