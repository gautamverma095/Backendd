
// const readFile  = require("node:fs")

const fs = require('node:fs');

fs.readFile('./index.js', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
});


fs.appendFile('append.txt', 'Please append', (err) => {
    if (err) throw err;
    console.log('The "data to append" was appended to file!');
});